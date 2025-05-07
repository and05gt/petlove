import { useLocation } from "react-router-dom";
import sprite from "../assets/sprite.svg";

const SearchField = ({
  inputValue,
  handleInputChange,
  handleClearQuery,
  onBlur,
}) => {
  const location = useLocation();

  return (
    <label className="relative inline-block">
      <input
        className={
          location.pathname === "/news"
            ? "peer w-full h-10.5 border border-black/15 rounded-[30px] p-3 outline-0 text-black placeholder:text-black/50 focus:border-orange md:w-[230px] md:h-12 md:p-3.5 md:placeholder:text-base md:text-base md:leading-5 md:tracking-[-0.03em]"
            : "peer w-full h-10.5 rounded-[30px] p-3 bg-white border border-transparent outline-0 text-black placeholder:text-black focus:border-orange md:w-[265px] md:h-12 md:p-3.5 md:placeholder:text-base md:text-base md:leading-5 md:tracking-[-0.03em]"
        }
        type="text"
        name="search"
        placeholder="Search"
        value={inputValue}
        onChange={handleInputChange}
        onBlur={onBlur}
      />
      <button
        className="absolute top-3 right-3 border-0 outline-0 cursor-pointer md:top-[15px] md:right-3.5"
        type="submit"
      >
        <svg className="fill-black" width={18} height={18}>
          <use href={sprite + "#icon-search"}></use>
        </svg>
      </button>
      {inputValue && (
        <button
          className="peer-focus:block absolute top-3 right-8.5 border-0 outline-0 cursor-pointer md:top-[15px] md:right-9"
          type="button"
          onClick={handleClearQuery}
        >
          <svg className="fill-black" width={18} height={18}>
            <use href={sprite + "#icon-close"}></use>
          </svg>
        </button>
      )}
    </label>
  );
};
export default SearchField;
