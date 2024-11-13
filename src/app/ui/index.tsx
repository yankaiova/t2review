import "./index.css";
import { routes } from "../providers/router";
import { RouterProvider } from "react-router-dom";
import { AppStoreProvider } from "../providers";

export function App() {
  return (
    <AppStoreProvider>
      <RouterProvider router={routes} />
    </AppStoreProvider>
  );
}
