import BurgerMenu from "./BurgerMenu.jsx";
import Logo from "./Logo.jsx";
import UserBar from "./UserBar.jsx";
// import Nav from "./Nav.jsx";

const Header = () => {
  return (
    <header className=" flex justify-between items-center pt-6 pb-4.5">
      <Logo />
      {/* <Nav /> */}
      <div className="flex items-center gap-3">
        <UserBar />
        <BurgerMenu />
      </div>
    </header>
  );
};
export default Header;
