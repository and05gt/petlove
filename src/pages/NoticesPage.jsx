import Title from "../components/Title.jsx";
import NoticesFilters from "../components/NoticesFilters.jsx";
import NoticesList from "../components/NoticesList.jsx";
import Pagination from "../components/Pagination.jsx";
import { useDispatch } from "react-redux";
import { getCitiesByKeyword } from "../redux/cities/operations.js";
import { useEffect } from "react";

const NoticesPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCitiesByKeyword());
  }, [dispatch]);

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
