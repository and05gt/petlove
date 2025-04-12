const PetBlock = ({ mob, tab, desk, src }) => {
  return (
    <div className="rounded-[30px] bg-orange">
      <picture>
        <source media={"(max-width: 767px)"} srcSet={mob} />
        <source
          media={"(min-width: 768px) and (max-width: 1279px)"}
          srcSet={tab}
        />
        <source media={"(min-width: 1280px)"} srcSet={desk} />
        <img className="mt-0 mr-auto mb-0 ml-auto" src={src} alt="Pet image" />
      </picture>
    </div>
  );
};
export default PetBlock;
