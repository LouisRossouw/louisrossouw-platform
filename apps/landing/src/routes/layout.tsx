import { Outlet } from "react-router";

export function Layout() {
  return (
    <div className="h-full w-full bg-background">
      {/* <NavBar /> */}
      <Outlet />
    </div>
  );
}
