import sprite from "../assets/sprite.svg";

const EditUserBtn = ({ openModalEdit }) => {
  return (
    <button
      className="absolute top-4.5 right-5 flex items-center justify-center w-9.5 h-9.5 bg-brown-light rounded-full border-0 outline-0 cursor-pointer md:top-10 md:right-10"
      type="button"
      onClick={openModalEdit}
    >
      <svg width={18} height={18} className="fill-orange">
        <use href={sprite + "#icon-edit"}></use>
      </svg>
    </button>
  );
};
export default EditUserBtn;
