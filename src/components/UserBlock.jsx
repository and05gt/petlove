import sprite from "../assets/sprite.svg";

const UserBlock = () => {
  return (
    <div>
      <div className="flex flex-col items-center gap-2 mb-7">
        <div className="flex items-center justify-center w-23.5 h-23.5 bg-brown-light rounded-full">
          <svg width={40} height={40} className="fill-orange">
            <use href={sprite + "#icon-user"}></use>
          </svg>
        </div>
        <button className="text-xs font-medium leading-4 tracking-[-0.24px] underline decoration-solid decoration-auto underline-offset-auto border-0 outline-0 cursor-pointer" type="button">
          Upload photo
        </button>
      </div>
      <h3 className="text-base font-bold leading-5 mb-5">My information</h3>
      <ul className="flex flex-col gap-2.5 mb-10">
        <li className="w-full p-3 border border-orange rounded-[30px] bg-transparent tracking-[-0.42px]">
          Anna
        </li>
        <li className="w-full p-3 border border-orange rounded-[30px] bg-transparent tracking-[-0.42px]">
          anna00@gmail.com|
        </li>
        <li className="w-full p-3 border border-black/15 rounded-[30px] bg-transparent tracking-[-0.42px]">
          +380
        </li>
      </ul>
    </div>
  );
};
export default UserBlock;
