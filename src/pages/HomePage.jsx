import homeMobImg from "../assets/img/home-mob@1x.webp";
import homeMobImg2x from "../assets/img/home-mob@2x.webp";
import homeTabImg from "../assets/img/home-tab@1x.webp";
import homeTabImg2x from "../assets/img/home-tab@2x.webp";
import homeDeskImg from "../assets/img/home-desk@1x.webp";
import homeDeskImg2x from "../assets/img/home-desk@2x.webp";

const HomePage = () => {
  return (
    <>
      <div className="rounded-[30px] bg-orange pt-4.5 pr-5 pb-12.5 pl-5 flex flex-col gap-6">
        <h1 className="text-[50px] font-bold text-white leading-12 tracking-[-1.5px]">
          Take good <span className="opacity-40">care</span> of your small pets
        </h1>
        <p className="text-white font-medium">
          Choosing a pet for your home is a choice that is meant to enrich your
          life with immeasurable joy and tenderness.
        </p>
      </div>
      <picture>
        <source
          media={"(max-width: 767px)"}
          srcSet={`${homeMobImg} 1x, ${homeMobImg2x} 2x`}
        />
        <source
          media={"(min-width: 768px) and (max-width: 1279px)"}
          srcSet={`${homeTabImg} 1x, ${homeTabImg2x} 2x`}
        />
        <source
          media={"(min-width: 1280px)"}
          srcSet={`${homeDeskImg} 1x, ${homeDeskImg2x} 2x`}
        />
        <img
          className="rounded-[30px]"
          src={homeDeskImg}
          alt="Home Dog Image"
        />
      </picture>
    </>
  );
};
export default HomePage;
