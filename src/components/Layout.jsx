import { Suspense } from "react";
import Header from "./Header.jsx";
import Loader from "./Loader.jsx";
import { Outlet, useLocation } from "react-router-dom";
import { Toaster } from "react-hot-toast";

const Layout = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/home";

  return (
    <div
      className={isHomePage ? "pt-5 pb-5 md:pt-8 md:pb-8 xl:pt-4 xl:pb-4" : ""}
    >
      <Header />
      <Suspense fallback={<Loader />}>
        <main>
          <Outlet />
        </main>
      </Suspense>
      <Toaster position="top-center" reverseOrder={false} />
    </div>
  );
};
export default Layout;
