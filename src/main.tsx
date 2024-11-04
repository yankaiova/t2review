import ReactDOM from "react-dom/client";
import React from "react";
import { App } from "./app/ui";
import "./index.css";
import { Provider } from "react-redux";
import { store } from "@/entities/root-store";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
