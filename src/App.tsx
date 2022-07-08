import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { CostosScreen } from './screens/costos/CostosScreen';

function App() {
  return (
    // <MuiThemeProvider theme={theme}>
    //   <StoreProvider store={store}>
        <BrowserRouter>
          <div className="App">
            <Switch>
              <Route exact path="/">
                <Redirect to="/dashboard/costos" />
              </Route>
              <Route exact path="/dashboard/costos">
                    <CostosScreen />
                  </Route>
            </Switch>
          </div>
        </BrowserRouter>
    //   </StoreProvider>
    // </MuiThemeProvider>
  );
}

export default App;
