import { Link } from "react-router-dom";
import notFoundMobImg from "../assets/img/404-mob@1x.webp";
import notFoundMobImg2x from "../assets/img/404-mob@2x.webp";
import notFoundTabImg from "../assets/img/404-tab@1x.webp";
import notFoundTabImg2x from "../assets/img/404-tab@2x.webp";
import notFoundDeskImg from "../assets/img/404-desk@1x.webp";
import notFoundDeskImg2x from "../assets/img/404-desk@2x.webp";

const NotFoundPage = () => {
  return (
    <div className="flex flex-col items-center justify-between gap-5 bg-orange pt-[245px] pr-[33px] pb-[245px] pl-[33px] rounded-[30px]">
      <div className="flex items-center gap-2">
        <p className="text-white text-[120px] font-extrabold leading-30">4</p>
        <picture>
          <source
            media={"(max-width: 767px)"}
            srcSet={`${notFoundMobImg} 1x, ${notFoundMobImg2x} 2x`}
          />
          <source
            media={"(min-width: 768px) and (max-width: 1279px)"}
            srcSet={`${notFoundTabImg} 1x, ${notFoundTabImg2x} 2x`}
          />
          <source
            media={"(min-width: 1280px)"}
            srcSet={`${notFoundDeskImg} 1x, ${notFoundDeskImg2x} 2x`}
          />
          <img
            className="w-29 h-[117px] rounded-[1000px] bg-white/10"
            src={notFoundDeskImg}
            alt="Not Found image"
          />
        </picture>
        <p className="text-white text-[120px] font-extrabold leading-30">4</p>
      </div>
      <p className="text-white text-base font-bold leading-5 tracking-[-0.48px]">
        Ooops! This page not found :(
      </p>
      <Link
        className="w-37.5 h-10.5 rounded-[30px] bg-brown-light pt-3 pr-[30px] pb-3 pl-[30px] text-orange text-sm font-bold leading-4.5 tracking-[-0.42px] border-0 outline-0 cursor-pointer"
        to="/home"
      >
        To home page
      </Link>
    </div>
  );
};
export default NotFoundPage;
