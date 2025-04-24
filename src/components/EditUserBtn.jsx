import sprite from "../assets/sprite.svg";

const EditUserBtn = ({ openModalEdit }) => {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center justify-center gap-1 w-20 h-9.5 bg-orange rounded-[30px]">
        <p className="text-white font-medium tracking-[-0.28px]">User</p>
        <svg width={18} height={18} className="fill-white">
          <use href={sprite + "#icon-user"}></use>
        </svg>
      </div>
      <button
        className="flex items-center justify-center w-9.5 h-9.5 bg-brown-light rounded-full border-0 outline-0 cursor-pointer"
        type="button"
        onClick={openModalEdit}
      >
        <svg width={18} height={18} className="fill-orange">
          <use href={sprite + "#icon-edit"}></use>
        </svg>
      </button>
    </div>
  );
};
export default EditUserBtn;
