import clsx from "clsx";
import { NavLink } from "react-router-dom";

const buildLinkClass = ({ isActive }) => {
  return clsx(
    "w-[119px] h-12 block p-[15px] border border-solid border-black/15 rounded-[30px] text-center outline-none tracking-[-0.42px] ",
    isActive && "border-orange "
  );
};

const Nav = () => {
  return (
    <nav className="flex flex-col gap-2.5">
      <NavLink to="/news" className={buildLinkClass}>
        News
      </NavLink>
      <NavLink to="/notices" className={buildLinkClass}>
        Find pet
      </NavLink>
      <NavLink to="/friends" className={buildLinkClass}>
        Our friends
      </NavLink>
    </nav>
  );
};
export default Nav;
