import { AxiosInstance } from "axios";
import { appendFile } from "fs";
import React from "react";
import { PROYECCIONCOSTOS } from "../api";
import { api } from "../utils/api";

async function fetch(set: (data: any) => any) {
  const response = await api.get(`/PROYECCION_COSTOS`);
  set(response.data);
}

export function useCostos() {
  const [costos, setCostos] = React.useState<PROYECCIONCOSTOS[]>([]);

  React.useEffect(() => {
    fetch(setCostos);
  }, []);

  return { costos, fetchCostos: () => fetch(setCostos) };
}
