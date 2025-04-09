import sprite from "../assets/sprite.svg";

const Pagination = () => {
  return (
    <div className="flex justify-center items-center gap-[11px]">
      <div className="flex gap-[6px]">
        <button
          className="relative flex items-center justify-center w-10 h-10 border border-black/5 bg-transparent rounded-full"
          type="button"
        >
          <svg
            className="absolute left-[13px] fill-black/50 rotate-90"
            width={20}
            height={20}
          >
            <use href={sprite + "#icon-chevron-down"}></use>
          </svg>
          <svg
            className="absolute right-[13px] fill-black/50 rotate-90"
            width={20}
            height={20}
          >
            <use href={sprite + "#icon-chevron-down"}></use>
          </svg>
        </button>
        <button
          className="flex items-center justify-center w-10 h-10 border border-black/5 bg-transparent rounded-full"
          type="button"
        >
          <svg className="fill-black/50 rotate-90" width={20} height={20}>
            <use href={sprite + "#icon-chevron-down"}></use>
          </svg>
        </button>
      </div>
      <div className="flex gap-[10px]">
        <button
          className="flex items-center justify-center w-10 h-10 border border-orange bg-orange rounded-full text-[14px] text-white font-bold leading-[18px]"
          type="button"
        >
          1
        </button>
        <button
          className="flex items-center justify-center w-10 h-10 border border-black/5 bg-transparent rounded-full text-[14px] text-black font-bold leading-[18px]"
          type="button"
        >
          2
        </button>
        <button
          className="flex items-center justify-center w-10 h-10 border border-black/5 bg-transparent rounded-full"
          type="button"
        >
          ...
        </button>
      </div>
      <div className="flex gap-[6px]">
        <button
          className="flex items-center justify-center w-10 h-10 border border-black/20 bg-transparent rounded-full"
          type="button"
        >
          <svg className="fill-black rotate-270" width={20} height={20}>
            <use href={sprite + "#icon-chevron-down"}></use>
          </svg>
        </button>
        <button
          className="relative flex items-center justify-center w-10 h-10 border border-black/20 bg-transparent rounded-full"
          type="button"
        >
          <svg
            className="absolute left-[13px] fill-black rotate-270"
            width={20}
            height={20}
          >
            <use href={sprite + "#icon-chevron-down"}></use>
          </svg>
          <svg
            className="absolute right-[13px] fill-black rotate-270"
            width={20}
            height={20}
          >
            <use href={sprite + "#icon-chevron-down"}></use>
          </svg>
        </button>
      </div>
    </div>
  );
};
export default Pagination;
