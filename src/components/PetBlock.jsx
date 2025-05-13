const PetBlock = ({ mob, tab, desk, src }) => {
  return (
    <div className="bg-orange rounded-[30px] md:rounded-[60px] xl:w-148">
      <picture>
        <source media={"(max-width: 767px)"} srcSet={mob} />
        <source
          media={"(min-width: 768px) and (max-width: 1279px)"}
          srcSet={tab}
        />
        <source media={"(min-width: 1280px)"} srcSet={desk} />
        <img
          className="mx-auto my-0 xl:mt-1.5 xl:mb-0"
          src={src}
          alt="Pet image"
        />
      </picture>
    </div>
  );
};
export default PetBlock;
