import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div className="flex flex-col items-center justify-between gap-5 bg-orange pt-[245px] pr-[33px] pb-[245px] pl-[33px] rounded-[30px]">
      <div className="flex items-center gap-[8px]">
        <p className="text-white text-[120px] font-extrabold leading-[120px]">
          4
        </p>
        <img
          className="w-[116px] h-[117px] rounded-[1000px] bg-white/10"
          src="src/assets/img/404-mob@1x.webp"
          alt="Not Found image"
        />
        <p className="text-white text-[120px] font-extrabold leading-[120px]">
          4
        </p>
      </div>
      <p className="text-white text-base font-bold leading-5 tracking-[-0.48px]">
        Ooops! This page not found :(
      </p>
      <Link
        className="w-[150px] h-[42px] rounded-[30px] bg-brown-light pt-3 pr-[30px] pb-3 pl-[30px] text-orange text-[14px] font-bold leading-[18px] tracking-[-0.42px] border-0 outline-0 cursor-pointer"
        to="/home"
      >
        To home page
      </Link>
    </div>
  );
};
export default NotFoundPage;
