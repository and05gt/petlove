import sprite from "../assets/sprite.svg";

const NoticesItem = ({ onClick, onClickHeart }) => {
  return (
    <div className="flex items-center justify-center gap-2.5 mb-11">
      <button
        className="w-[231px] h-11.5 bg-orange rounded-[30px] text-sm text-white font-bold leading-4.5 tracking-[-0.42px] border-0 outline-0 cursor-pointer"
        type="button"
        onClick={onClick}
      >
        Learn more
      </button>
      <button
        className="flex items-center justify-center w-11.5 h-11.5 bg-brown-light rounded-full border-0 outline-0 cursor-pointer"
        type="button"
        onClick={onClickHeart}
      >
        <svg width={18} height={18} className="fill-orange">
          <use href={sprite + "#icon-heart"}></use>
        </svg>
      </button>
    </div>
  );
};
export default NoticesItem;
