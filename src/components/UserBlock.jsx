import { useSelector } from "react-redux";
import sprite from "../assets/sprite.svg";
import { selectUser } from "../redux/users/selectors.js";

const UserBlock = ({ openModalEdit }) => {
  const user = useSelector(selectUser);

  if (!user) {
    return;
  }
  const { name, email, phone, avatar } = user;

  return (
    <>
      <div className="flex flex-col items-center gap-2 mb-7">
        <div className="flex items-center justify-center w-23.5 h-23.5 bg-brown-light rounded-full overflow-hidden">
          {avatar ? (
            <img src={avatar} alt="Avatar" />
          ) : (
            <svg width={40} height={40} className="fill-orange">
              <use href={sprite + "#icon-user"}></use>
            </svg>
          )}
        </div>
        {!avatar && (
          <button
            className="text-xs font-medium leading-4 tracking-[-0.24px] underline decoration-solid decoration-auto underline-offset-auto border-0 outline-0 cursor-pointer"
            type="button"
            onClick={openModalEdit}
          >
            Upload photo
          </button>
        )}
      </div>
      <h3 className="text-base font-bold leading-5 mb-5">My information</h3>
      <ul className="flex flex-col gap-2.5 mb-10">
        <li className="w-full p-3 border border-orange rounded-[30px] bg-transparent tracking-[-0.42px]">
          {name}
        </li>
        <li className="w-full p-3 border border-orange rounded-[30px] bg-transparent tracking-[-0.42px]">
          {email}
        </li>
        {phone ? (
          <li className="w-full p-3 border border-orange rounded-[30px] bg-transparent tracking-[-0.42px]">
            {phone}
          </li>
        ) : (
          <li className="w-full p-3 border border-black/15 rounded-[30px] bg-transparent tracking-[-0.42px]">
            +380
          </li>
        )}
      </ul>
    </>
  );
};
export default UserBlock;
