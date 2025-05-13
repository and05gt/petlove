import sprite from "../assets/sprite.svg";
import catImg from "../assets/img/cat@1x.webp";
import catImg2x from "../assets/img/cat@2x.webp";
import { useDispatch } from "react-redux";
import { logOut } from "../redux/users/operations.js";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const ModalApproveAction = ({ isOpen, onClose, handleCloseModal }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    document.addEventListener("keydown", handleCloseModal);

    return () => {
      document.removeEventListener("keydown", handleCloseModal);
    };
  }, [handleCloseModal]);

  const handleLogout = () => {
    dispatch(logOut());
    toast.success("Sign out success");
    navigate("/home");
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed top-0 left-0 z-50 flex h-full w-full items-center justify-center bg-black/30"
      onClick={handleCloseModal}
    >
      <div className="relative flex w-[335px] flex-col items-center rounded-[30px] bg-white px-7 py-10 md:w-112 md:p-20">
        <button
          className="absolute top-5 right-5"
          type="button"
          onClick={onClose}
        >
          <svg className="fill-black" width={24} height={24}>
            <use href={sprite + "#icon-close"}></use>
          </svg>
        </button>
        <div className="bg-brown-light mb-5 flex h-20 w-20 items-center justify-center rounded-full">
          <img
            src={catImg}
            alt="Cat Image"
            srcSet={`${catImg} 1x, ${catImg2x} 2x`}
            width={44}
            height={44}
          />
        </div>
        <h2 className="mb-7 text-xl leading-5 font-bold tracking-[-0.6px] md:text-2xl md:leading-7 md:tracking-[-0.03em]">
          Already leaving?
        </h2>
        <div className="flex items-center justify-center gap-2">
          <button
            className="bg-orange h-10.5 w-[137px] cursor-pointer rounded-[30px] border-0 text-sm leading-4.5 font-bold tracking-[-0.42px] text-white outline-0 md:h-12 md:w-35 md:text-base md:leading-5"
            type="button"
            onClick={handleLogout}
          >
            Yes
          </button>
          <button
            className="h-10.5 w-[134px] cursor-pointer rounded-[30px] border-0 bg-black/5 text-sm leading-4.5 font-bold tracking-[-0.42px] text-black outline-0 md:h-12 md:w-35 md:text-base md:leading-5"
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
