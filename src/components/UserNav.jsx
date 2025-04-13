import { useState } from "react";
import LogOutBtn from "./LogOutBtn.jsx";
import ModalApproveAction from "./ModalApproveAction.jsx";
import UserBar from "./UserBar.jsx";

const UserNav = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);

  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      {/* <UserBar /> */}
      <LogOutBtn width={"178px"} onClick={openModal} />

      <ModalApproveAction isOpen={isModalOpen} onClose={closeModal} />
    </>
  );
};
export default UserNav;
