import mainMobImg from "../assets/img/main-mob@1x.webp";
import mainMobImg2x from "../assets/img/main-mob@2x.webp";
import mainTabImg from "../assets/img/main-tab@1x.webp";
import mainTabImg2x from "../assets/img/main-tab@2x.webp";
import mainDeskImg from "../assets/img/main-desk@1x.webp";
import mainDeskImg2x from "../assets/img/main-desk@2x.webp";
import sprite from "../assets/sprite.svg";
import { useEffect, useState } from "react";

const Loader = () => {
  const [progress, setProgress] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!isLoading) {
      const interval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            clearInterval(interval);
            return 100;
          }
          return prev + 1;
        });
      }, 10);

      return () => clearInterval(interval);
    }
  }, [isLoading]);

  return (
    <div className="fixed top-0 left-0 w-full h-full z-50 flex items-center justify-center">
      <picture>
        <source
          media={"(max-width: 767px)"}
          srcSet={`${mainMobImg} 1x, ${mainMobImg2x} 2x`}
        />
        <source
          media={"(min-width: 768px) and (max-width: 1279px)"}
          srcSet={`${mainTabImg} 1x, ${mainTabImg2x} 2x`}
        />
        <source
          media={"(min-width: 1280px)"}
          srcSet={`${mainDeskImg} 1x, ${mainDeskImg2x} 2x`}
        />
        <img src={mainDeskImg} alt="Main Image" />
      </picture>
      {isLoading ? (
        <p className="absolute inline-flex items-center text-white text-[50px] font-bold leading-12.5 tracking-[-0.04em]">
          petl
          <span className="w-11 h-11">
            <svg width={44} height={44} className="fill-orange">
              <use href={sprite + "#icon-heart-circle"}></use>
            </svg>
          </span>
          ve
        </p>
      ) : (
        <>
          <div
            style={{ transform: `rotate(${(progress / 100) * 360}deg)` }}
            className="absolute w-72 h-72 border-2 border-white/30 rounded-[270px]"
          ></div>
          <p className=" absolute text-white text-[50px] font-bold leading-12.5 tracking-[-2px]">
            {progress}%
          </p>
        </>
      )}
    </div>
  );
};
export default Loader;
