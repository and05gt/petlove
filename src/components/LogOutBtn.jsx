import { useLocation } from "react-router-dom";

const LogOutBtn = ({ styles, onClick }) => {
  const location = useLocation();
  const isHomePage = location.pathname === "/home";

  return (
    <button
      style={styles}
      className={
        isHomePage
          ? "bg-orange md:bg-orange block h-10.5 w-44.5 cursor-pointer rounded-[30px] border-0 p-3 font-bold tracking-[-0.42px] text-white uppercase outline-0 md:h-12.5 md:w-34 md:px-[35px] md:py-[15px] md:text-base md:leading-5 md:tracking-[-0.03em] md:text-white"
          : "bg-brown-light text-orange md:bg-orange block h-10.5 w-44.5 cursor-pointer rounded-[30px] border-0 p-3 font-bold tracking-[-0.42px] uppercase outline-0 md:h-12.5 md:w-34 md:px-[35px] md:py-[15px] md:text-base md:leading-5 md:tracking-[-0.03em] md:text-white"
      }
      type="button"
      onClick={onClick}
    >
      Log out
    </button>
  );
};
export default LogOutBtn;
