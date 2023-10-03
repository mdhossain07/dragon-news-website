import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="max-w-screen-2xl mx-auto px-8 md:px-16 lg:px-24">
      <Outlet />
    </div>
  );
};

export default Layout;
