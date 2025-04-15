import sprite from "../assets/sprite.svg";

const PetsItem = () => {
  return (
    <div className="relative flex gap-3.5 p-4 border border-black/10 rounded-[20px]">
      <div className="w-16.5 h-16.5 bg-orange rounded-full"></div>
      <div className="flex flex-col justify-between gap-2">
        <p className="w-[145px] truncate">Golden Retriever Puppies</p>
        <ul className="flex flex-wrap gap-2.5 w-[145px]">
          <li className="flex flex-col justify-start gap-1">
            <p className="text-black/50 text-[10px] leading-3.5 tracking-[-0.2px]">
              Name
            </p>
            <p className="text-xs leading-3.5 tracking-[-0.24px]">Daisy</p>
          </li>
          <li className="flex flex-col justify-start gap-1">
            <p className="text-black/50 text-[10px] leading-3.5 tracking-[-0.2px]">
              Birthday
            </p>
            <p className="text-xs leading-3.5 tracking-[-0.24px]">01.10.2022</p>
          </li>
          <li className="flex flex-col justify-start gap-1">
            <p className="text-black/50 text-[10px] leading-3.5 tracking-[-0.2px]">
              Sex
            </p>
            <p className="text-xs leading-3.5 tracking-[-0.24px]">Female</p>
          </li>
          <li className="flex flex-col justify-start gap-1">
            <p className="text-black/50 text-[10px] leading-3.5 tracking-[-0.2px]">
              Species
            </p>
            <p className="text-xs leading-3.5 tracking-[-0.24px]">Dog</p>
          </li>
        </ul>
      </div>
      <button
        className="absolute top-3 right-3 w-8.5 h-8.5 rounded-full bg-brown-light flex items-center justify-center"
        type="button"
      >
        <svg width={16} height={16} className="fill-orange">
          <use href={sprite + "#icon-trash"}></use>
        </svg>
      </button>
    </div>
  );
};
export default PetsItem;
