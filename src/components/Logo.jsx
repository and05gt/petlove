import { Link } from "react-router-dom";
import sprite from "../assets/sprite.svg";

const Logo = () => {
  return (
    <Link
      className="text-xl/5 font-bold tracking-[-0.8px] inline-flex items-center"
      to="/home"
    >
      petl
      <span className="w-[17px] h-[17px]">
        <svg width={17} height={17} className="fill-orange">
          <use href={sprite + "#icon-heart-circle"}></use>
        </svg>
      </span>
      ve
    </Link>
  );
};
export default Logo;
