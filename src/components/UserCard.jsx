import EditUserBtn from "./EditUserBtn.jsx";
import UserBlock from "./UserBlock.jsx";
import PetsBlock from "./PetsBlock.jsx";
import LogOutBtn from "./LogOutBtn.jsx";

const UserCard = () => {
  return (
    <div>
      <EditUserBtn />
      <UserBlock />
      <PetsBlock />
      <LogOutBtn />
    </div>
  );
};
export default UserCard;
