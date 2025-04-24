import { useState } from "react";

const MyNotices = () => {
  const [activeTab, setActiveTab] = useState("my-favorite-pets");

  const handleChangeTab = (tab) => {
    setActiveTab(tab);
  };

  return (
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
  );
};
export default MyNotices;
