import sprite from "../assets/sprite.svg";
import dogImg from "../assets/img/dog@1x.webp";
import dogImg2x from "../assets/img/dog@2x.webp";
import { useNavigate } from "react-router-dom";

const ModalAttention = ({ isOpen, onClose }) => {
  const navigate = useNavigate();

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
            src={dogImg}
            alt="Cat Image"
            srcSet={`${dogImg} 1x, ${dogImg2x} 2x`}
            width={44}
            height={44}
          />
        </div>
        <h2 className="text-xl text-orange font-bold leading-5 tracking-[-0.6px] mb-5">
          Attention
        </h2>
        <p className="text-center mb-6">
          We would like to remind you that certain functionality is available
          only to authorized users.If you have an account, please log in with
          your credentials. If you do not already have an account, you must
          register to access these features.
        </p>
        <div className="flex items-center justify-center gap-2">
          <button
            className="w-[135px] h-10.5 bg-orange rounded-[30px] text-sm text-white font-bold leading-4.5 tracking-[-0.42px] border-0 outline-0 cursor-pointer"
            type="button"
            onClick={() => navigate("/login")}
          >
            Log In
          </button>
          <button
            className="w-[129px] h-10.5 bg-brown-light rounded-[30px] text-sm text-orange font-bold leading-4.5 tracking-[-0.42px] border-0 outline-0 cursor-pointer"
            type="button"
            onClick={() => navigate("/register")}
          >
            Registration
          </button>
        </div>
      </div>
    </div>
  );
};
export default ModalAttention;
