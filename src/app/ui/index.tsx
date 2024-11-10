import "./index.css";
import { routes } from "../router";
import { RouterProvider } from "react-router-dom";
import { Suspense } from "react";
import { AppStoreProvider } from "../providers";

export function App() {
  return (
    <AppStoreProvider>
      <Suspense fallback={<div>Заагрузка...</div>}>
        <RouterProvider router={routes} />
      </Suspense>
    </AppStoreProvider>
  );
}
