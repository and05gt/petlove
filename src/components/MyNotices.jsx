import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import NoticesItem from "./NoticesItem.jsx";
import {
  selectNoticesFavorites,
  selectNoticesViewed,
} from "../redux/users/selectors.js";

const MyNotices = () => {
  const [activeTab, setActiveTab] = useState("my-favorite-pets");
  const noticesFavorites = useSelector(selectNoticesFavorites);
  const noticesViewed = useSelector(selectNoticesViewed);

  const [favorites, setFavorites] = useState([]);
  const [viewed, setViewed] = useState([]);

  useEffect(() => {
    setFavorites(noticesFavorites);
    setViewed(noticesViewed);
  }, [noticesFavorites, noticesViewed]);

  const handleChangeTab = (tab) => {
    setActiveTab(tab);
  };

  return (
    <>
      <div className="flex items-center justify-start gap-2.5">
        <button
          className={
            activeTab === "my-favorite-pets"
              ? "w-[123px] h-10.5 bg-orange rounded-[30px] text-sm text-white font-medium leading-4.5 tracking-[-0.42px] border-0 outline-0 cursor-pointer"
              : "w-[123px] h-10.5 bg-white rounded-[30px] text-sm text-black font-medium leading-4.5 tracking-[-0.42px] border-0 outline-0 cursor-pointer"
          }
          type="button"
          onClick={() => handleChangeTab("my-favorite-pets")}
        >
          My favorite pets
        </button>
        <button
          className={
            activeTab === "viewed"
              ? "w-[123px] h-10.5 bg-orange rounded-[30px] text-sm text-white font-medium leading-4.5 tracking-[-0.42px] border-0 outline-0 cursor-pointer"
              : "w-[123px] h-10.5 bg-white rounded-[30px] text-sm text-black font-medium leading-4.5 tracking-[-0.42px] border-0 outline-0 cursor-pointer"
          }
          type="button"
          onClick={() => handleChangeTab("viewed")}
        >
          Viewed
        </button>
      </div>
      {activeTab === "my-favorite-pets" ? (
        <ul className="flex flex-col gap-5 mb-11">
          {favorites.map((favorite) => (
            <li key={favorite._id}>
              <NoticesItem notice={favorite} />
            </li>
          ))}
        </ul>
      ) : (
        <ul className="flex flex-col gap-5 mb-11">
          {viewed.map((item) => (
            <li key={item._id}>
              <NoticesItem notice={item} />
            </li>
          ))}
        </ul>
      )}
    </>
  );
};
export default MyNotices;
