import { useLocation } from "react-router-dom";

const LogOutBtn = ({ width, onClick }) => {
  const location = useLocation();
  const isHomePage = location.pathname === "/home";

  return (
    <button
      style={{ width: width }}
      className={
        isHomePage
          ? "w-44.5 h-10.5 block p-3 rounded-[30px] bg-orange text-white font-bold tracking-[-0.42px] uppercase outline-0 border-0 cursor-pointer md:w-34 md:h-12.5 md:px-[35px] md:py-[15px] md:text-base md:leading-5 md:tracking-[-0.03em] md:bg-orange md:text-white"
          : "w-44.5 h-10.5 block p-3 rounded-[30px] bg-brown-light text-orange font-bold tracking-[-0.42px] uppercase outline-0 border-0 cursor-pointer md:w-34 md:h-12.5 md:px-[35px] md:py-[15px] md:text-base md:leading-5 md:tracking-[-0.03em] md:bg-orange md:text-white"
      }
      type="button"
      onClick={onClick}
    >
      Log out
    </button>
  );
};
export default LogOutBtn;
