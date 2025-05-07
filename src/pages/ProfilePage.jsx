import UserCard from "../components/UserCard.jsx";
import MyNotices from "../components/MyNotices.jsx";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getCurrentUser } from "../redux/users/operations.js";

const ProfilePage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCurrentUser());
  }, [dispatch]);

  return (
    <section className="flex flex-col gap-10">
      <UserCard />
      <MyNotices />
    </section>
  );
};

export default ProfilePage;
