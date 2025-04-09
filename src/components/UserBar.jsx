import sprite from "../assets/sprite.svg";
import { Link } from "react-router-dom";

const UserBar = () => {
  return (
    <>
      <Link
        className="w-[40px] h-[40px] rounded-[50%] bg-brown-light flex items-center justify-center"
        to="/profile"
      >
        <svg className="fill-orange" width={20} height={20}>
          <use href={sprite + "#icon-user"}></use>
        </svg>
      </Link>
    </>
  );
};
export default UserBar;
