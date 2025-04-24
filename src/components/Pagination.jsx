import { useDispatch, useSelector } from "react-redux";
import sprite from "../assets/sprite.svg";
import { selectPage, selectTotalPages } from "../redux/news/selectors.js";
import {
  changePageNext,
  changePageBack,
  changePageFirst,
  changePageLast,
} from "../redux/news/slice.js";

const Pagination = ({ updateSearchParams }) => {
  const page = useSelector(selectPage);
  const totalPages = useSelector(selectTotalPages);
  const dispatch = useDispatch();

  const handleChangePageNext = () => {
    dispatch(changePageNext());
    updateSearchParams("page", page + 1);
  };

  const handleChangePageBack = () => {
    dispatch(changePageBack());
    updateSearchParams("page", page - 1);
  };

  const handleChangePageFirst = () => {
    dispatch(changePageFirst());
    updateSearchParams("page", 1);
  };

  const handleChangePageLast = () => {
    dispatch(changePageLast());
    updateSearchParams("page", page);
  };

  return (
    <div className="flex justify-center items-center gap-[11px]">
      <div className="flex gap-1.5">
        <button
          className={
            page === 1
              ? "relative flex items-center justify-center w-10 h-10 border border-black/5 bg-transparent rounded-full"
              : "relative flex items-center justify-center w-10 h-10 border border-black/20 bg-transparent rounded-full"
          }
          type="button"
          onClick={handleChangePageFirst}
        >
          <svg
            className={
              page === 1
                ? "absolute left-[13px] fill-black/50 rotate-90"
                : "absolute left-[13px] fill-black rotate-90"
            }
            width={20}
            height={20}
          >
            <use href={sprite + "#icon-chevron-down"}></use>
          </svg>
          <svg
            className={
              page === 1
                ? "absolute right-[13px] fill-black/50 rotate-90"
                : "absolute right-[13px] fill-black rotate-90"
            }
            width={20}
            height={20}
          >
            <use href={sprite + "#icon-chevron-down"}></use>
          </svg>
        </button>
        <button
          className={
            page === 1
              ? "flex items-center justify-center w-10 h-10 border border-black/5 bg-transparent rounded-full"
              : "flex items-center justify-center w-10 h-10 border border-black/20 bg-transparent rounded-full"
          }
          type="button"
          onClick={handleChangePageBack}
        >
          <svg
            className={
              page === 1 ? "fill-black/50 rotate-90" : "fill-black rotate-90"
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
          className="flex items-center justify-center w-10 h-10 border border-orange bg-orange rounded-full text-sm text-white font-bold leading-4.5"
          type="button"
        >
          {page}
        </button>
        {page < totalPages && (
          <button
            className="flex items-center justify-center w-10 h-10 border border-black/5 bg-transparent rounded-full text-sm text-black font-bold leading-4.5"
            type="button"
          >
            {Number(page) + 1}
          </button>
        )}
        {page < totalPages && (
          <button
            className="flex items-center justify-center w-10 h-10 border border-black/5 bg-transparent rounded-full"
            type="button"
          >
            ...
          </button>
        )}
      </div>
      <div className="flex gap-1.5">
        <button
          className={
            page < totalPages
              ? "flex items-center justify-center w-10 h-10 border border-black/20 bg-transparent rounded-full"
              : "flex items-center justify-center w-10 h-10 border border-black/5 bg-transparent rounded-full"
          }
          type="button"
          onClick={handleChangePageNext}
        >
          <svg
            className={
              page < totalPages
                ? "fill-black rotate-270"
                : "fill-black/50 rotate-270"
            }
            width={20}
            height={20}
          >
            <use href={sprite + "#icon-chevron-down"}></use>
          </svg>
        </button>
        <button
          className={
            page < totalPages
              ? "relative flex items-center justify-center w-10 h-10 border border-black/20 bg-transparent rounded-full"
              : "relative flex items-center justify-center w-10 h-10 border border-black/5 bg-transparent rounded-full"
          }
          type="button"
          onClick={handleChangePageLast}
        >
          <svg
            className={
              page < totalPages
                ? "absolute left-[13px] fill-black rotate-270"
                : "absolute left-[13px] fill-black/50 rotate-270"
            }
            width={20}
            height={20}
          >
            <use href={sprite + "#icon-chevron-down"}></use>
          </svg>
          <svg
            className={
              page < totalPages
                ? "absolute right-[13px] fill-black rotate-270"
                : "absolute right-[13px] fill-black/50 rotate-270"
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
