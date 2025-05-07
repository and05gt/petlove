import { useSelector } from "react-redux";
import sprite from "../assets/sprite.svg";
import { Link, useLocation } from "react-router-dom";
import { selectUser } from "../redux/users/selectors.js";
import useResponsive from "../hooks/useResponsive.js";

const UserBar = () => {
  const user = useSelector(selectUser);
  const { windowWidth } = useResponsive();
  const location = useLocation();
  const isHomePage = location.pathname === "/home";

  return (
    <div className="flex items-center gap-2">
      <Link
        className="w-10 h-10 rounded-full bg-brown-light flex items-center justify-center md:w-12.5 md:h-12.5"
        to="/profile"
      >
        <svg className="fill-orange" width={20} height={20}>
          <use href={sprite + "#icon-user"}></use>
        </svg>
      </Link>
      {windowWidth >= 768 && (
        <p
          className={
            isHomePage
              ? "text-xl font-bold leading-5 tracking-[-0.03em] text-white"
              : "text-xl font-bold leading-5 tracking-[-0.03em]"
          }
        >
          {user.name}
        </p>
      )}
    </div>
  );
};
export default UserBar;
