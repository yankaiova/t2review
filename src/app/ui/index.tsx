import "./index.css";
import { routes } from "../router";
import { RouterProvider } from "react-router-dom";
import { Suspense } from "react";
import { Provider } from "react-redux";
import { store } from "@/entities/root";

export function App() {
  return (
    <Provider store={store}>
      <Suspense fallback={<div>Заагрузка...</div>}>
        <RouterProvider router={routes} />
      </Suspense>
    </Provider>
  );
}
