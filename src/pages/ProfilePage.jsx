import UserCard from "../components/UserCard.jsx";
import MyNotices from "../components/MyNotices.jsx";

const ProfilePage = () => {
  return (
    <div className="flex flex-col gap-10">
      <UserCard />
      <MyNotices />
    </div>
  );
};
export default ProfilePage;
