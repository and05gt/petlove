import Title from "../components/Title.jsx";
import FriendsList from "../components/FriendsList.jsx";

const FriendsPage = () => {
  return (
    <section>
      <Title mb={"40px"} tracking={"-0.84px"}>
        Our friends
      </Title>
      <FriendsList />
    </section>
  );
};
export default FriendsPage;
