import Title from "../components/Title.jsx";
import NoticesFilters from "../components/NoticesFilters.jsx";
import NoticesList from "../components/NoticesList.jsx";
import Pagination from "../components/Pagination.jsx";

const NoticesPage = () => {
  return (
    <div>
      <Title>Find your favorite pet</Title>
      <NoticesFilters />
      <NoticesList />
      <Pagination />
    </div>
  );
};
export default NoticesPage;
