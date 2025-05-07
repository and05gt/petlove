import sprite from "../assets/sprite.svg";
import useResponsive from "../hooks/useResponsive";

const Pagination = ({ currentPage, totalPages, setPageNumber }) => {
  const { windowWidth } = useResponsive();

  const handleChangePageNext = () => {
    setPageNumber((prev) => prev + 1);
  };

  const handleChangePageBack = () => {
    setPageNumber((prev) => prev - 1);
  };

  const handleChangePageFirst = () => {
    setPageNumber(1);
  };

  const handleChangePageLast = () => {
    setPageNumber(totalPages);
  };

  return (
    <div className="flex justify-center items-center gap-[11px] md:gap-6">
      <div className="flex gap-1.5 md:gap-2">
        <button
          className={
            currentPage === 1
              ? "relative flex items-center justify-center w-10 h-10 border border-black/5 bg-transparent rounded-full md:w-11 md:h-11"
              : "relative flex items-center justify-center w-10 h-10 border border-black/20 bg-transparent rounded-full md:w-11 md:h-11"
          }
          type="button"
          onClick={handleChangePageFirst}
        >
          <svg
            className={
              currentPage === 1
                ? "absolute left-[13px] fill-black/50 rotate-90 md:left-[15px] md:w-6 md:h-6"
                : "absolute left-[13px] fill-black rotate-90 md:left-[15px] md:w-6 md:h-6"
            }
            width={20}
            height={20}
          >
            <use href={sprite + "#icon-chevron-down"}></use>
          </svg>
          <svg
            className={
              currentPage === 1
                ? "absolute right-[13px] fill-black/50 rotate-90 md:right-[15px] md:w-6 md:h-6"
                : "absolute right-[13px] fill-black rotate-90 md:right-[15px] md:w-6 md:h-6"
            }
            width={20}
            height={20}
          >
            <use href={sprite + "#icon-chevron-down"}></use>
          </svg>
        </button>
        <button
          className={
            currentPage === 1
              ? "flex items-center justify-center w-10 h-10 border border-black/5 bg-transparent rounded-full md:w-11 md:h-11"
              : "flex items-center justify-center w-10 h-10 border border-black/20 bg-transparent rounded-full md:w-11 md:h-11"
          }
          type="button"
          onClick={handleChangePageBack}
        >
          <svg
            className={
              currentPage === 1
                ? "fill-black/50 rotate-90 md:w-6 md:h-6"
                : "fill-black rotate-90 md:w-6 md:h-6"
            }
            width={20}
            height={20}
          >
            <use href={sprite + "#icon-chevron-down"}></use>
          </svg>
        </button>
      </div>
      <div className="flex gap-2.5">
        <button
          className="flex items-center justify-center w-10 h-10 border border-orange bg-orange rounded-full text-sm text-white font-bold leading-4.5 md:w-11 md:h-11 md:text-lg md:leading-5.5"
          type="button"
        >
          {currentPage}
        </button>
        {currentPage < totalPages && (
          <button
            className="flex items-center justify-center w-10 h-10 border border-black/5 bg-transparent rounded-full text-sm text-black font-bold leading-4.5 md:w-11 md:h-11 md:text-lg md:leading-5.5"
            type="button"
          >
            {Number(currentPage) + 1}
          </button>
        )}
        {windowWidth >= 768 && currentPage < totalPages && (
          <button
            className="flex items-center justify-center w-10 h-10 border border-black/5 bg-transparent rounded-full text-sm text-black font-bold leading-4.5 md:w-11 md:h-11 md:text-lg md:leading-5.5"
            type="button"
          >
            {Number(currentPage) + 2}
          </button>
        )}
        {currentPage < totalPages && (
          <button
            className="flex items-center justify-center w-10 h-10 text-base leading-5 border border-black/5 bg-transparent rounded-full md:w-11 md:h-11 md:text-xl md:leading-5.5"
            type="button"
          >
            ...
          </button>
        )}
      </div>
      <div className="flex gap-1.5 md:gap-2">
        <button
          className={
            currentPage < totalPages
              ? "flex items-center justify-center w-10 h-10 border border-black/20 bg-transparent rounded-full md:w-11 md:h-11"
              : "flex items-center justify-center w-10 h-10 border border-black/5 bg-transparent rounded-full md:w-11 md:h-11"
          }
          type="button"
          onClick={handleChangePageNext}
        >
          <svg
            className={
              currentPage < totalPages
                ? "fill-black rotate-270 md:w-6 md:h-6"
                : "fill-black/50 rotate-270 md:w-6 md:h-6"
            }
            width={20}
            height={20}
          >
            <use href={sprite + "#icon-chevron-down"}></use>
          </svg>
        </button>
        <button
          className={
            currentPage < totalPages
              ? "relative flex items-center justify-center w-10 h-10 border border-black/20 bg-transparent rounded-full md:w-11 md:h-11"
              : "relative flex items-center justify-center w-10 h-10 border border-black/5 bg-transparent rounded-full md:w-11 md:h-11"
          }
          type="button"
          onClick={handleChangePageLast}
        >
          <svg
            className={
              currentPage < totalPages
                ? "absolute left-[13px] fill-black rotate-270 md:left-[14px] md:w-6 md:h-6"
                : "absolute left-[13px] fill-black/50 rotate-270 md:left-[14px] md:w-6 md:h-6"
            }
            width={20}
            height={20}
          >
            <use href={sprite + "#icon-chevron-down"}></use>
          </svg>
          <svg
            className={
              currentPage < totalPages
                ? "absolute right-[14px] fill-black rotate-270 md:right-[13px] md:w-6 md:h-6"
                : "absolute right-[14px] fill-black/50 rotate-270 md:right-[13px] md:w-6 md:h-6"
            }
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
