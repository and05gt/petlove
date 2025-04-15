import { useState } from "react";
import ModalAttention from "./ModalAttention.jsx";
import NoticesItem from "./NoticesItem.jsx";
import ModalNotice from "./ModalNotice.jsx";

const NoticesList = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalNoticeOpen, setIsModalNoticeOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const openModalNotice = () => setIsModalNoticeOpen(true);
  const closeModalNotice = () => setIsModalNoticeOpen(false);

  return (
    <>
      <NoticesItem onClick={openModal} onClickHeart={openModalNotice} />
      <ModalAttention isOpen={isModalOpen} onClose={closeModal} />
      <ModalNotice isOpen={isModalNoticeOpen} onClose={closeModalNotice} />
    </>
  );
};
export default NoticesList;
