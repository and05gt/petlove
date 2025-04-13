import sprite from "../assets/sprite.svg";
import catImg from "../assets/img/cat@1x.webp";
import catImg2x from "../assets/img/cat@2x.webp";

const ModalApproveAction = ({ isOpen, onClose }) => {
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
        <div className="flex items-center justify-center w-20 h-20 rounded-full bg-brown-light mb-5">
          <img
            src={catImg}
            alt="Cat Image"
            srcSet={`${catImg} 1x, ${catImg2x} 2x`}
            width={44}
            height={44}
          />
        </div>
        <p className="text-xl font-bold leading-5 tracking-[-0.6px] mb-7">
          Already leaving?
        </p>
        <div className="flex items-center justify-center gap-2">
          <button
            className="w-[137px] h-10.5 bg-orange rounded-[30px] text-sm text-white font-bold leading-4.5 tracking-[-0.42px] border-0 outline-0 cursor-pointer"
            type="button"
          >
            Yes
          </button>
          <button
            className="w-[134px] h-10.5 bg-black/5 rounded-[30px] text-sm text-black font-bold leading-4.5 tracking-[-0.42px] border-0 outline-0 cursor-pointer"
            type="button"
            onClick={onClose}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};
export default ModalApproveAction;
