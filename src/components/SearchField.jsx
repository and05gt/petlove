import sprite from "../assets/sprite.svg";

const SearchField = ({ mb }) => {
  return (
    <label
      style={{ marginBottom: mb }}
      className="relative w-full inline-block"
    >
      <input
        className="peer w-full h-10.5 border border-black/15 rounded-[30px] px-3 py-3 outline-0 text-black placeholder:text-black/50 focus:border-orange"
        type="text"
        placeholder="Search"
      />
      <button
        className="absolute top-3 right-3 border-0 outline-0 cursor-pointer"
        type="button"
      >
        <svg className="fill-black" width={18} height={18}>
          <use href={sprite + "#icon-search"}></use>
        </svg>
      </button>
      <button
        className="hidden peer-focus:block absolute top-3 right-8.5 border-0 outline-0 cursor-pointer"
        type="button"
      >
        <svg className="fill-black" width={18} height={18}>
          <use href={sprite + "#icon-close"}></use>
        </svg>
      </button>
    </label>
  );
};
export default SearchField;
