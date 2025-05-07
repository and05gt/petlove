import { useState } from "react";
import sprite from "../assets/sprite.svg";
import ModalAttention from "./ModalAttention.jsx";
import ModalNotice from "./ModalNotice.jsx";
import { selectIsLoggedIn } from "../redux/users/selectors.js";
import { useDispatch, useSelector } from "react-redux";
import {
  addNoticeFavorites,
  deleteNoticeFavorites,
} from "../redux/notices/operations.js";
import { addNoticeViewed } from "../redux/users/slice.js";
import { selectFavorites } from "../redux/notices/selectors.js";
import { getCurrentUser } from "../redux/users/operations.js";

const NoticesItem = ({ notice }) => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalNoticeOpen, setIsModalNoticeOpen] = useState(false);
  const favorites = useSelector(selectFavorites);

  const isFavorite = favorites.includes(notice._id);

  const {
    title,
    imgURL,
    name,
    sex,
    species,
    birthday,
    category,
    comment,
    price,
    popularity,
  } = notice;

  const birthdayDate = new Date(birthday).toLocaleDateString("en-US", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  });
  const formattedBirthdayDate = birthdayDate.replace(/\//g, ".");

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const openModalNotice = () => {
    setIsModalNoticeOpen(true);
    dispatch(addNoticeViewed(notice));
  };
  const closeModalNotice = () => setIsModalNoticeOpen(false);

  const handleAddToFavorites = () => {
    dispatch(addNoticeFavorites(notice._id)).then(() => {
      dispatch(getCurrentUser());
    });
  };

  const handleRemoveFromFavorites = () => {
    dispatch(deleteNoticeFavorites(notice._id)).then(() => {
      dispatch(getCurrentUser());
    });
  };

  return (
    <>
      <div className="flex flex-col items-center justify-start gap-6 p-6 bg-white rounded-2xl md:w-85.5 xl:w-[363px]">
        <div className="flex items-center justify-center w-[287px] h-44.5 bg-gray-200 rounded-2xl overflow-hidden md:w-73.5 xl:w-[315px]">
          <img src={imgURL} alt={title || "Notice Image"} />
        </div>
        <div>
          <div className="flex items-center justify-between mb-2">
            <p className="text-base font-bold leading-5 text-[#2b2b2a] truncate capitalize md:text-lg md:leading-6">
              {title}
            </p>
            <div className="flex items-center gap-1">
              <svg width={16} height={16} className="fill-orange">
                <use href={sprite + "#icon-star"}></use>
              </svg>
              <p className="text-[#2b2b2a] md:leading-5">{popularity}</p>
            </div>
          </div>
          <ul className="flex items-start gap-3.5 w-[287px] mb-4 mb:gap-4 md:w-73.5">
            <li className="flex flex-col gap-0.5">
              <p className="text-[10px] leading-3.5 tracking-[-0.02em] text-black/50">
                Name
              </p>
              <p className="text-xs leading-3.5 tracking-[-0.02em]">{name}</p>
            </li>
            <li className="flex flex-col gap-0.5">
              <p className="text-[10px] leading-3.5 tracking-[-0.02em] text-black/50">
                Birthday
              </p>
              <p className="text-xs leading-3.5 tracking-[-0.02em]">
                {formattedBirthdayDate}
              </p>
            </li>
            <li className="flex flex-col gap-0.5">
              <p className="text-[10px] leading-3.5 tracking-[-0.02em] text-black/50">
                Sex
              </p>
              <p className="text-xs leading-3.5 tracking-[-0.02em] capitalize">
                {sex}
              </p>
            </li>
            <li className="flex flex-col gap-0.5">
              <p className="text-[10px] leading-3.5 tracking-[-0.02em] text-black/50">
                Species
              </p>
              <p className="text-xs leading-3.5 tracking-[-0.02em] capitalize">
                {species}
              </p>
            </li>
            <li className="flex flex-col gap-0.5">
              <p className="text-[10px] leading-3.5 tracking-[-0.02em] text-black/50">
                Category
              </p>
              <p className="text-xs leading-3.5 tracking-[-0.02em] capitalize">
                {category}
              </p>
            </li>
          </ul>
          <p className="tracking-[-0.02em] text-[#2b2b2a] mb-4 md:h-9 md:mb-6">
            {comment}
          </p>
          <p className="text-base font-bold leading-5 text-[#2b2b2a] mb-3 md:text-lg md:leading-6">
            {price ? `$${price}` : "Free"}
          </p>
          <div className="flex items-center justify-center gap-2.5">
            <button
              className="w-[231px] h-11.5 bg-orange rounded-[30px] text-sm text-white font-medium leading-4.5 tracking-[-0.42px] border-0 outline-0 cursor-pointer md:w-59 md:h-12 md:text-base md:leading-5 md:tracking-[-0.03em] xl:w-[257px]"
              type="button"
              onClick={isLoggedIn ? openModalNotice : openModal}
            >
              Learn more
            </button>
            {isFavorite ? (
              <button
                className="flex items-center justify-center w-11.5 h-11.5 bg-brown-light rounded-full border-0 outline-0 cursor-pointer md:w-12 md:h-12"
                type="button"
                onClick={handleRemoveFromFavorites}
              >
                <svg width={18} height={18} className="fill-orange">
                  <use href={sprite + "#icon-trash"}></use>
                </svg>
              </button>
            ) : (
              <button
                className="flex items-center justify-center w-11.5 h-11.5 bg-brown-light rounded-full border-0 outline-0 cursor-pointer"
                type="button"
                onClick={handleAddToFavorites}
              >
                <svg width={18} height={18} className="fill-orange">
                  <use href={sprite + "#icon-heart"}></use>
                </svg>
              </button>
            )}
          </div>
        </div>
      </div>

      {isModalOpen && (
        <ModalAttention isOpen={isModalOpen} onClose={closeModal} />
      )}
      {isModalNoticeOpen && (
        <ModalNotice
          notice={notice}
          isOpen={isModalNoticeOpen}
          onClose={closeModalNotice}
        />
      )}
    </>
  );
};
export default NoticesItem;
