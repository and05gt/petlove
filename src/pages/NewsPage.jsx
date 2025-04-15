import Title from "../components/Title.jsx";
import SearchField from "../components/SearchField.jsx";
import NewsList from "../components/NewsList.jsx";
import Pagination from "../components/Pagination.jsx";

const NewsPage = () => {
  return (
    <section>
      <Title mb={"20px"} tracking={"-0.84px"}>
        News
      </Title>
      <SearchField mb={"24px"} />
      <NewsList />
      <Pagination />
    </section>
  );
};
export default NewsPage;
