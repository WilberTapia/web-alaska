import { createStore, createTypedHooks, thunk, Thunk } from "easy-peasy";
import Axios, { AxiosInstance } from "axios";
import { config } from "./utils/config";

const typedHooks = createTypedHooks<StoreModel>();
export const useStoreActions = typedHooks.useStoreActions;
export const useStoreDispatch = typedHooks.useStoreDispatch;
export const useStoreState = typedHooks.useStoreState;

export interface StoreModel {
  loggedIn: boolean;
  accessToken: string | null;
  apiClient: AxiosInstance;
  rehydrated: boolean;
  createSession: Thunk<StoreModel, { accessToken: string }>;
  destroySession: Thunk<StoreModel, void>;
  rehydrateSession: Thunk<StoreModel, void>;
}
 const baseURL = "http://localhost:3005";

export const store = createStore<StoreModel>({
  loggedIn: false,
  accessToken: null,
  apiClient: Axios.create({ baseURL: baseURL }),
  rehydrated: false,

  createSession: thunk(async (actions : any, payload : any, { getState } : any ) => {
    const state = getState();
    const apiClient = Axios.create({
      baseURL: config.API_URL,
      headers: { authorization: `Bearer ${payload.accessToken}` },
    });

    state.loggedIn = true;
    state.accessToken = payload.accessToken;
    state.apiClient = apiClient;

    localStorage.setItem("accessToken", state.accessToken);
  }),

  destroySession: thunk(async (actions : any, payload : any, { getState } : any) => {
    const state = getState();
    const apiClient = Axios.create({
      baseURL: baseURL,
    });

    state.loggedIn = false;
    state.accessToken = null;
    state.apiClient = apiClient;

    localStorage.removeItem("accessToken");
  }),

  rehydrateSession: thunk(async (actions : any, payload : any, { getState } : any) => {
    const state = getState();
    const accessToken = localStorage.getItem("accessToken");

    if (accessToken) {
      actions.createSession({ accessToken });
    }

    state.rehydrated = true;
  }),
});

const globalWindow: any = window;
globalWindow.store = store;
