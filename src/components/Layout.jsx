import { Suspense, useEffect, useState } from "react";
import Header from "./Header.jsx";
import Loader from "./Loader.jsx";
import { Outlet, useLocation } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import MainScreen from "./MainScreen.jsx";

const Layout = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/home";
  const [showMainScreen, setShowMainScreen] = useState(
    isHomePage ? true : false,
  );

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowMainScreen(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={isHomePage ? "py-5 md:py-8 xl:py-4" : ""}>
      <Header />
      {showMainScreen && <MainScreen />}
      <main>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </main>
      <Toaster position="top-center" reverseOrder={false} />
    </div>
  );
};
export default Layout;
