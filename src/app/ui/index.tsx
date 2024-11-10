import "./index.css";
import { routes } from "../router";
import { RouterProvider } from "react-router-dom";
import { Suspense } from "react";

export function App() {
  return (
    <Suspense fallback={<div>Заагрузка...</div>}>
      <RouterProvider router={routes} />
    </Suspense>
  );
}
