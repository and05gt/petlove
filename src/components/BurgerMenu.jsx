import { useState } from "react";
import sprite from "../assets/sprite.svg";
import Nav from "../components/Nav.jsx";
import AuthNav from "./AuthNav.jsx";
import UserNav from "./UserNav.jsx";

const BurgerMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleCloseMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <button
        type="button"
        className="flex items-center"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <svg width={32} height={32}>
          <use href={sprite + "#icon-menu"}></use>
        </svg>
      </button>

      {isMenuOpen && (
        <div className="absolute top-0 right-0 z-10 w-[218px] h-[100vh] bg-white flex flex-col items-center justify-between pt-[236px] pb-[40px]">
          <button
            type="button"
            className="absolute top-[28px] right-[20px]"
            onClick={handleCloseMenu}
          >
            <svg width={32} height={32}>
              <use href={sprite + "#icon-close"}></use>
            </svg>
          </button>
          <Nav />
          <AuthNav />
          <UserNav />
        </div>
      )}
    </>
  );
};
export default BurgerMenu;
