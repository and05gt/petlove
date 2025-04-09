import BurgerMenu from "./BurgerMenu.jsx";
import Logo from "./Logo.jsx";
import UserBar from "./UserBar.jsx";
// import Nav from "./Nav.jsx";

const Header = () => {
  return (
    <header className=" flex justify-between items-center pt-[24px] pb-[18px]">
      <Logo />
      {/* <Nav /> */}
      <div className="flex items-center gap-[12px]">
        <UserBar />
        <BurgerMenu />
      </div>
    </header>
  );
};
export default Header;
