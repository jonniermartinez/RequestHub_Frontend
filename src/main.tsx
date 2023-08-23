import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx"; 
import "./index.css";
// import { Login } from "./components";
import store from "./redux/store.ts";
import { Provider } from "react-redux";
import PQRCompo from "./components/pqrCompo/pqrCompo";
// import LoginCompo from "./components/loginCompo/loginCompo.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
    <PQRCompo empresa="Sara SAS" />
    {/* <LoginCompo /> */}
    {/* <Login /> */}
  </React.StrictMode>
);
