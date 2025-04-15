import Title from "../components/Title.jsx";
import NoticesFilters from "../components/NoticesFilters.jsx";
import NoticesList from "../components/NoticesList.jsx";
import Pagination from "../components/Pagination.jsx";

const NoticesPage = () => {
  return (
    <section>
      <Title mb={"40px"} tracking={"-0.84px"}>
        Find your favorite pet
      </Title>
      <NoticesFilters />
      <NoticesList />
      <Pagination />
    </section>
  );
};
export default NoticesPage;
