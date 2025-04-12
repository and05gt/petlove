import EditUserBtn from "./EditUserBtn.jsx";
import UserBlock from "./UserBlock.jsx";
import PetsBlock from "./PetsBlock.jsx";
import LogOutBtn from "./LogOutBtn.jsx";

const UserCard = () => {
  return (
    <div className="flex flex-col px-5 pt-4.5 pb-10 bg-white rounded-[30px]">
      <EditUserBtn />
      <UserBlock />
      <PetsBlock />
      <LogOutBtn width={"114px"} />
    </div>
  );
};
export default UserCard;
