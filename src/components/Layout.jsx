import { Suspense } from "react";
import Header from "./Header.jsx";
// import Loader from "./Loader.jsx";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <Header />
      <Suspense fallback={null}>
        <main>
          <Outlet />
        </main>
      </Suspense>
      {/* <Loader /> */}
    </>
  );
};
export default Layout;
