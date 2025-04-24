import { useDispatch } from "react-redux";
import sprite from "../assets/sprite.svg";
import { deleteUserPet } from "../redux/users/operations.js";

const PetsItem = ({ pet }) => {
  const dispatch = useDispatch();

  const { _id, name, title, imgURL, species, birthday, sex } = pet;
  const birthdayDate = new Date(birthday).toLocaleDateString("en-US", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  });
  const formattedBirthdayDate = birthdayDate.replace(/\//g, ".");

  return (
    <div className="relative flex gap-3.5 p-4 border border-black/10 rounded-[20px]">
      <div className="flex items-center justify-center w-16.5 h-16.5 bg-brown-light rounded-full overflow-hidden">
        <img src={imgURL} alt="User Pet Image" />
      </div>
      <div className="flex flex-col justify-between gap-2">
        <p className="w-[145px] truncate capitalize">{title}</p>
        <ul className="flex flex-wrap gap-2.5 w-[173px]">
          <li className="flex flex-col justify-start gap-1">
            <p className="text-black/50 text-[10px] leading-3.5 tracking-[-0.2px]">
              Name
            </p>
            <p className="text-xs leading-3.5 tracking-[-0.24px] capitalize">
              {name}
            </p>
          </li>
          <li className="flex flex-col justify-start gap-1">
            <p className="text-black/50 text-[10px] leading-3.5 tracking-[-0.2px]">
              Birthday
            </p>
            <p className="text-xs leading-3.5 tracking-[-0.24px]">
              {formattedBirthdayDate}
            </p>
          </li>
          <li className="flex flex-col justify-start gap-1">
            <p className="text-black/50 text-[10px] leading-3.5 tracking-[-0.2px]">
              Sex
            </p>
            <p className="text-xs leading-3.5 tracking-[-0.24px] capitalize">
              {sex}
            </p>
          </li>
          <li className="flex flex-col justify-start gap-1">
            <p className="text-black/50 text-[10px] leading-3.5 tracking-[-0.2px]">
              Species
            </p>
            <p className="text-xs leading-3.5 tracking-[-0.24px] capitalize">
              {species}
            </p>
          </li>
        </ul>
      </div>
      <button
        className="absolute top-3 right-3 w-8.5 h-8.5 rounded-full bg-brown-light flex items-center justify-center"
        type="button"
        onClick={() => dispatch(deleteUserPet(_id))}
      >
        <svg width={16} height={16} className="fill-orange">
          <use href={sprite + "#icon-trash"}></use>
        </svg>
      </button>
    </div>
  );
};
export default PetsItem;
