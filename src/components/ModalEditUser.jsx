import sprite from "../assets/sprite.svg";

const ModalEditUser = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black/30 flex justify-center items-center">
      <div className="relative flex flex-col w-[335px] px-5 py-10 bg-white rounded-[30px]">
        <button
          className="absolute top-5 right-5"
          type="button"
          onClick={onClose}
        >
          <svg className=" fill-black" width={24} height={24}>
            <use href={sprite + "#icon-close"}></use>
          </svg>
        </button>
        <h2 className="text-xl font-bold leading-5 mb-5">Edit information</h2>
        <div className="w-20 h-20 bg-orange rounded-full mt-0 mr-auto mb-3 ml-auto"></div>
        <form className="flex flex-col items-center justify-center gap-[21px] w-[295px]">
          <div className="flex flex-col items-center gap-2.5">
            <div className="flex items-center justify-between gap-2">
              <label htmlFor="imgUrl">
                <input
                  className="w-[161px] h-10.5 pr-[39px] py-[13px] pl-3 border border-orange rounded-[30px] outline-0 text-xs font-medium leading-4 tracking-[-0.24px] overflow-hidden text-ellipsis whitespace-nowrap"
                  type="url"
                  id="imgUrl"
                  placeholder="https://ftp.goit.study/img/pets/5.webp"
                />
              </label>
              <button
                className="flex items-center justify-between w-31.5 h-10.5 p-3 bg-brown-light rounded-[30px] border-0 outline-0 cursor-pointer text-black text-xs font-medium leading-4 tracking-[-0.24px]"
                type="button"
              >
                Upload photo
                <svg width={16} height={16} className="fill-orange">
                  <use href={sprite + "#icon-upload-cloud"}></use>
                </svg>
              </button>
            </div>
            <label className="w-full" htmlFor="name">
              <input
                className="w-full h-10.5 p-3 border border-orange rounded-[30px] outline-0 text-sm font-medium leading-4.5 tracking-[-0.42px]"
                type="text"
                id="name"
                placeholder="Anna"
              />
            </label>
            <label className="w-full" htmlFor="email">
              <input
                className="w-full h-10.5 p-3 border border-orange rounded-[30px] outline-0 text-sm font-medium leading-4.5 tracking-[-0.42px]"
                type="email"
                id="email"
                placeholder="anna00@gmail.com|"
              />
            </label>
            <label className="w-full" htmlFor="phone">
              <input
                className="w-full h-10.5 p-3 border border-orange rounded-[30px] outline-0 text-sm font-medium leading-4.5 tracking-[-0.42px]"
                type="tel"
                id="phone"
                placeholder="+380 65 669 12 24"
              />
            </label>
          </div>
          <button
            className="w-full h-10.5 bg-orange rounded-[30px] text-sm text-white font-bold leading-4.5 tracking-[-0.42px] border-0 outline-0 cursor-pointer"
            type="submit"
          >
            Go to profile
          </button>
        </form>
      </div>
    </div>
  );
};
export default ModalEditUser;
