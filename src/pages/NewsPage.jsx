import Title from "../components/Title.jsx";
import SearchField from "../components/SearchField.jsx";
import NewsList from "../components/NewsList.jsx";
import Pagination from "../components/Pagination.jsx";

const NewsPage = () => {
  return (
    <div>
      <Title>News</Title>
      <SearchField />
      <NewsList />
      <Pagination />
    </div>
  );
};
export default NewsPage;
