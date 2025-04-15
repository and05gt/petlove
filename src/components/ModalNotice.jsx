import sprite from "../assets/sprite.svg";

const ModalNotice = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black/30 flex justify-center items-center">
      <div className="relative flex flex-col items-center w-[335px] px-7 py-10 bg-white rounded-[30px]">
        <button
          className="absolute top-5 right-5"
          type="button"
          onClick={onClose}
        >
          <svg className=" fill-black" width={24} height={24}>
            <use href={sprite + "#icon-close"}></use>
          </svg>
        </button>
        <div className="relative w-30 h-30 rounded-full bg-orange mb-5">
          <span className="absolute top-0 left-0 w-11.5 px-3.5 py-2 rounded-[30px] bg-brown-light text-xs text-orange leading-4 tracking-[-0.24px]">
            Sell
          </span>
        </div>
        <h3 className="text-base font-bold leading-5 mb-3">
          Golden Retriever Puppies
        </h3>
        <div className="flex items-center justify-center gap-1 mb-6.5">
          <ul className="flex items-center justify-center gap-1">
            <li>
              <svg width={16} height={16} className="fill-orange">
                <use href={sprite + "#icon-star"}></use>
              </svg>
            </li>
            <li>
              <svg width={16} height={16} className="fill-gray-light">
                <use href={sprite + "#icon-star"}></use>
              </svg>
            </li>
            <li>
              <svg width={16} height={16} className="fill-gray-light">
                <use href={sprite + "#icon-star"}></use>
              </svg>
            </li>
            <li>
              <svg width={16} height={16} className="fill-gray-light">
                <use href={sprite + "#icon-star"}></use>
              </svg>
            </li>
            <li>
              <svg width={16} height={16} className="fill-gray-light">
                <use href={sprite + "#icon-star"}></use>
              </svg>
            </li>
          </ul>
          <p className="leading-5">1</p>
        </div>
        <ul className="flex items-center justify-between gap-[27px] mb-4">
          <li className="flex flex-col items-center justify-center gap-1">
            <p className="text-black/50 text-[10px] leading-3.5 tracking-[-0.2px]">
              Name
            </p>
            <p className="text-xs leading-3.5 tracking-[-0.24px]">Daisy</p>
          </li>
          <li className="flex flex-col items-center justify-center gap-1">
            <p className="text-black/50 text-[10px] leading-3.5 tracking-[-0.2px]">
              Birthday
            </p>
            <p className="text-xs leading-3.5 tracking-[-0.24px]">01.10.2022</p>
          </li>
          <li className="flex flex-col items-center justify-center gap-1">
            <p className="text-black/50 text-[10px] leading-3.5 tracking-[-0.2px]">
              Sex
            </p>
            <p className="text-xs leading-3.5 tracking-[-0.24px]">Female</p>
          </li>
          <li className="flex flex-col items-center justify-center gap-1">
            <p className="text-black/50 text-[10px] leading-3.5 tracking-[-0.2px]">
              Species
            </p>
            <p className="text-xs leading-3.5 tracking-[-0.24px]">Dog</p>
          </li>
        </ul>
        <p className="mb-8">Adorable puppy looking for a loving home.</p>
        <p className="text-base font-bold leading-5 mb-5">$257.99</p>
        <div className="flex items-center justify-center gap-2">
          <button
            className="flex items-center justify-center gap-2 w-[135px] h-11 bg-orange rounded-[30px] text-base text-white font-medium leading-5 tracking-[-0.48px] border-0 outline-0 cursor-pointer"
            type="button"
          >
            Add to{" "}
            <svg width={18} height={18} className="fill-white">
              <use href={sprite + "#icon-heart"}></use>
            </svg>
          </button>
          <button
            className="w-33.5 h-11 bg-brown-light rounded-[30px] text-base text-orange font-medium leading-5 tracking-[-0.48px] border-0 outline-0 cursor-pointer"
            type="button"
          >
            Contact
          </button>
        </div>
      </div>
    </div>
  );
};
export default ModalNotice;
