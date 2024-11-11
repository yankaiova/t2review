import { Outlet } from "react-router-dom";
import { Header } from "@/widgets/header";

export const Layout = () => {
  return (
    <div>
      <Header />
      <div>
        <Outlet />
      </div>
    </div>
  );
};
