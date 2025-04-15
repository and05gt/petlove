const MyNotices = () => {
  return (
    <div className="flex items-center justify-start gap-2.5 mb-5">
      <button
        className="w-[123px] h-10.5 bg-orange rounded-[30px] text-sm text-white font-medium leading-4.5 tracking-[-0.42px] border-0 outline-0 cursor-pointer"
        type="button"
      >
        My favorite pets
      </button>
      <button
        className="w-[123px] h-10.5 bg-white rounded-[30px] text-sm text-black font-medium leading-4.5 tracking-[-0.42px] border-0 outline-0 cursor-pointer"
        type="button"
      >
        Viewed
      </button>
    </div>
  );
};
export default MyNotices;
