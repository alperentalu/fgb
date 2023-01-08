import { useReducer, useContext } from "react";
import "./App.css";
import { Routes, BrowserRouter, Route } from "react-router-dom";
import {usePersistedContext, usePersistedReducer} from './context/usePersist'
import Store from './context/GlobalContext'
import reducer from "./context/reducer";
import { PrivateRoutes } from "./routes/PrivateRoutes";
import { PublicRoutes } from "./routes/PublicRoutes";
import RouteRender from './routes/RouteRender'

function App() {
  // create a global store to store the state
  const globalStore = usePersistedContext(useContext(Store), "state");

  // `todos` will be a state manager to manage state.
  const [state, dispatch] = usePersistedReducer(
    useReducer(reducer, globalStore),
    "state" // The localStorage key
  );
  return (
    <Store.Provider value={{ state, dispatch }}>
      <RouteRender/>
    </Store.Provider>
  );
}

export default App;
