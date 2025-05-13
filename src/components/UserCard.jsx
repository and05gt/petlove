import sprite from "../assets/sprite.svg";
import EditUserBtn from "./EditUserBtn.jsx";
import UserBlock from "./UserBlock.jsx";
import PetsBlock from "./PetsBlock.jsx";
import LogOutBtn from "./LogOutBtn.jsx";
import ModalEditUser from "./ModalEditUser.jsx";
import { useState } from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../redux/users/selectors.js";
import useResponsive from "../hooks/useResponsive.js";

const UserCard = () => {
  const user = useSelector(selectUser);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { avatar } = user;
  const windowWidth = useResponsive();

  const styles = {
    backgroundColor: "#fff4df",
    color: "#f6b83d",
    width: windowWidth < 768 ? "114px" : "136px",
  };

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div
      className={
        avatar
          ? "relative mb-10 flex flex-col rounded-[30px] bg-white px-5 pt-19 pb-10 md:mb-8 md:p-10 xl:mb-0 xl:w-130 xl:rounded-[60px]"
          : "relative mb-10 flex flex-col rounded-[30px] bg-white px-5 pt-13.5 pb-10 md:mb-8 md:p-10 xl:mb-0 xl:w-130 xl:rounded-[60px]"
      }
    >
      <div className="bg-orange absolute top-4.5 left-5 flex h-9.5 w-20 items-center justify-center gap-1 rounded-[30px] md:top-10 md:left-10">
        <p className="tracking-[-0.28px] text-white">User</p>
        <svg width={18} height={18} className="fill-white">
          <use href={sprite + "#icon-user"}></use>
        </svg>
      </div>
      <EditUserBtn openModalEdit={openModal} />
      <UserBlock openModalEdit={openModal} />
      <PetsBlock />
      <LogOutBtn styles={styles} />
      {isModalOpen && (
        <ModalEditUser isOpen={isModalOpen} onClose={closeModal} />
      )}
    </div>
  );
};
export default UserCard;
