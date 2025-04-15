import { Link } from "react-router-dom";

const FriendsItem = () => {
  return (
    <div className="relative flex gap-3.5 px-5 py-10 bg-white rounded-[15px]">
      <div className="w-20 h-20 bg-orange rounded-full"></div>
      <div className="flex flex-col gap-3.5">
        <p className="text-base font-bold leading-5 tracking-[-0.64px]">
          LKP “Lion”
        </p>
        <ul className="flex flex-col gap-2">
          <li className="flex items-center gap-0.5">
            <p className="text-black/50">Email:</p>
            <Link className="text-black text-sm font-medium leading-4.5 tracking-[-0.28px]">
              Ikplev@gmail.com
            </Link>
          </li>
          <li className="flex items-center gap-0.5">
            <p className="text-black/50">Address:</p>
            <Link className="text-black text-sm font-medium leading-4.5 tracking-[-0.28px]">
              Promuslova Street,56
            </Link>
          </li>
          <li className="flex items-center gap-0.5">
            <p className="text-black/50">Phone:</p>
            <Link className="text-black text-sm font-medium leading-4.5 tracking-[-0.28px]">
              (032) 293-30-41
            </Link>
          </li>
        </ul>
      </div>
      <span className="absolute top-3 right-3 p-2 bg-brown-light rounded-[30px] text-xs text-orange leading-4 tracking-[-0.24px]">
        08:00 - 19:00
      </span>
    </div>
  );
};
export default FriendsItem;
