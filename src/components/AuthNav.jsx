import { Link } from "react-router-dom";

const AuthNav = () => {
  return (
    <div className="flex flex-col gap-[8px]">
      <Link
        className="block w-[178px] h-[42px] p-3 rounded-[30px] cursor-pointer bg-orange text-white font-bold leading-[18px] tracking-[-0.42px] uppercase text-center"
        to="/login"
      >
        Log In
      </Link>
      <Link
        className="block w-[178px] h-[42px] p-3 rounded-[30px] cursor-pointer bg-brown-light text-orange font-bold leading-[18px] tracking-[-0.42px] uppercase text-center"
        to="/register"
      >
        Registration
      </Link>
    </div>
  );
};
export default AuthNav;
