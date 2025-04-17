import { Suspense } from "react";
import Header from "./Header.jsx";
import Loader from "./Loader.jsx";
import { Outlet } from "react-router-dom";
import { Toaster } from "react-hot-toast";

const Layout = () => {
  return (
    <>
      <Header />
      <Suspense fallback={<Loader />}>
        <main>
          <Outlet />
        </main>
      </Suspense>
      <Toaster position="top-center" reverseOrder={false} />
    </>
  );
};
export default Layout;
