import { Link } from "react-router-dom";

const AuthNav = () => {
  return (
    <div className="flex flex-col gap-2 md:flex-row">
      <Link
        className="block w-44.5 h-10.5 p-3 rounded-[30px] cursor-pointer bg-orange text-white font-bold leading-4.5 tracking-[-0.42px] uppercase text-center md:w-auto md:h-12.5 md:px-[35px] md:py-[15px] md:text-base md:leading-5 md:tracking-[-0.48px]"
        to="/login"
      >
        Log In
      </Link>
      <Link
        className="block w-44.5 h-10.5 p-3 rounded-[30px] cursor-pointer bg-brown-light text-orange font-bold leading-4.5 tracking-[-0.42px] uppercase text-center md:w-auto md:h-12.5 md:px-5 md:py-[15px] md:text-base md:leading-5 md:tracking-[-0.48px]"
        to="/register"
      >
        Registration
      </Link>
    </div>
  );
};
export default AuthNav;
