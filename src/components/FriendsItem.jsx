import { Link } from "react-router-dom";
import { getWorkHours } from "../utils/getWorkHours.js";

const FriendsItem = ({ friend }) => {
  const { title, email, address, phone, imageUrl, addressUrl, workDays } =
    friend;
  const workingHours = getWorkHours(workDays);

  return (
    <div className="relative flex gap-3.5 px-5 py-10 bg-white rounded-[15px] md:gap-4 xl:gap-5">
      <div className="w-20 h-20 rounded-full md:w-22.5 md:h-22.5">
        <img src={imageUrl} alt="Friend Image" />
      </div>
      <div className="flex flex-col gap-3.5 w-49 md:gap-5 xl:w-[220px]">
        <h2 className="text-base font-bold leading-5 tracking-[-0.64px] md:text-xl md:leading-6.5 md:tracking-[-0.04em]">
          {title}
        </h2>
        <ul className="flex flex-col gap-2">
          <li className="flex items-center gap-0.5">
            <p className="text-black/50">Email:</p>
            <Link
              className="text-black text-sm font-medium leading-4.5 tracking-[-0.28px] truncate"
              to={`mailto:${email}`}
            >
              {email}
            </Link>
          </li>
          <li className="flex items-center gap-0.5">
            <p className="text-black/50">Address:</p>
            <Link
              className="text-black text-sm font-medium leading-4.5 tracking-[-0.28px] truncate"
              to={addressUrl}
            >
              {address}
            </Link>
          </li>
          <li className="flex items-center gap-0.5">
            <p className="text-black/50">Phone:</p>
            <Link
              className="text-black text-sm font-medium leading-4.5 tracking-[-0.28px] truncate"
              to={`tel:${phone}`}
            >
              {phone}
            </Link>
          </li>
        </ul>
      </div>
      <span className="absolute top-3 right-3 p-2 bg-brown-light rounded-[30px] text-xs text-orange leading-4 tracking-[-0.24px] md:text-sm md:leading-4.5 md:tracking-[-0.02em]">
        {workingHours || "Day and night"}
      </span>
    </div>
  );
};
export default FriendsItem;
