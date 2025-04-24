import { useSelector } from "react-redux";
import BurgerMenu from "./BurgerMenu.jsx";
import Logo from "./Logo.jsx";
import UserBar from "./UserBar.jsx";
import { selectIsLoggedIn } from "../redux/users/selectors.js";
// import Nav from "./Nav.jsx";

const Header = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <header className=" flex justify-between items-center pt-6 pb-4.5">
      <Logo />
      {/* <Nav /> */}
      <div className="flex items-center gap-3">
        {isLoggedIn && <UserBar />}
        <BurgerMenu />
      </div>
    </header>
  );
};
export default Header;
