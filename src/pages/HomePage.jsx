const HomePage = () => {
  return (
    <>
      <div className="rounded-[30px] bg-orange pt-[18px] pr-[20px] pb-[50px] pl-[20px] flex flex-col gap-[24px]">
        <h1 className="text-[50px] font-bold text-white leading-[48px] tracking-[-1.5px]">
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
          srcSet={
            "../../src/assets/img/home-mob@1x.webp 1x, ../../src/assets/img/home-mob@2x.webp 2x"
          }
        />
        <source
          media={"(min-width: 768px) and (max-width: 1279px)"}
          srcSet={
            "../../src/assets/img/home-tab@1x.webp 1x, ../../src/assets/img/home-tab@2x.webp 2x"
          }
        />
        <source
          media={"(min-width: 1280px)"}
          srcSet={
            "../../src/assets/img/home-desk@1x.webp 1x, ../../src/assets/img/home-desk@2x.webp 2x"
          }
        />
        <img
          className="rounded-[30px]"
          src={"../assets/img/home-desk@1x.webp"}
          alt="Dog"
        />
      </picture>
    </>
  );
};
export default HomePage;
