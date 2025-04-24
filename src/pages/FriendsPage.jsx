import Title from "../components/Title.jsx";
import FriendsList from "../components/FriendsList.jsx";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchFriends } from "../redux/friends/operations.js";

const FriendsPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchFriends());
  }, [dispatch]);

  return (
    <section className="pb-20">
      <Title mb={"40px"} tracking={"-0.84px"}>
        Our friends
      </Title>
      <FriendsList />
    </section>
  );
};

export default FriendsPage;
