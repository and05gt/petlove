import EditUserBtn from "./EditUserBtn.jsx";
import UserBlock from "./UserBlock.jsx";
import PetsBlock from "./PetsBlock.jsx";
import LogOutBtn from "./LogOutBtn.jsx";
import ModalEditUser from "./ModalEditUser.jsx";
import { useState } from "react";

const UserCard = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="flex flex-col px-5 pt-4.5 pb-10 bg-white rounded-[30px]">
      <EditUserBtn openModalEdit={openModal} />
      <UserBlock openModalEdit={openModal} />
      <PetsBlock />
      <LogOutBtn width={"114px"} />
      {isModalOpen && (
        <ModalEditUser isOpen={isModalOpen} onClose={closeModal} />
      )}
    </div>
  );
};
export default UserCard;
