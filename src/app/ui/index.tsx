import "./index.css";
import { routes } from "../router";
import { RouterProvider } from "react-router-dom";
import { AuthProvider } from "@/shared/context";
import { Suspense } from "react";

export function App() {
  return (
    <AuthProvider>
      <Suspense fallback={<div>Заагрузка...</div>}>
        <RouterProvider router={routes} />
      </Suspense>
    </AuthProvider>
  );
}
