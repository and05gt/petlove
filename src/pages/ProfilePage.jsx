import UserCard from "../components/UserCard.jsx";
import MyNotices from "../components/MyNotices.jsx";

const ProfilePage = () => {
  return (
    <section className="flex flex-col gap-10">
      <UserCard />
      <MyNotices />
    </section>
  );
};

export default ProfilePage;
