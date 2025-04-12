import { Link } from "react-router-dom";
import sprite from "../assets/sprite.svg";

const AddPet = () => {
  return (
    <div className="flex items-center justify-between mb-5">
      <h3 className="text-base font-bold leading-5">My pets</h3>
      <Link
        className="flex items-center justify-center gap-1 w-[103px] h-9.5 bg-orange rounded-[30px] text-sm text-white font-medium leading-4.5 tracking-[-0.42px] border-0 outline-0 cursor-pointer"
        to="/add-pet"
      >
        Add pet
        <svg width={18} height={18} className="fill-white">
          <use href={sprite + "#icon-plus"}></use>
        </svg>
      </Link>
    </div>
  );
};
export default AddPet;
