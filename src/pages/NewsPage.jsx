import Title from "../components/Title.jsx";
import SearchField from "../components/SearchField.jsx";
import NewsList from "../components/NewsList.jsx";
import Pagination from "../components/Pagination.jsx";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { fetchNews } from "../redux/news/operations.js";
import { selectPage } from "../redux/news/selectors.js";
import { useSearchParams } from "react-router-dom";

const NewsPage = () => {
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get("keyword") ?? "";
  const page = useSelector(selectPage);

  useEffect(() => {
    dispatch(fetchNews({ query, page }));
  }, [dispatch, query, page]);

  const updateSearchParams = (key, value) => {
    const updatedParams = new URLSearchParams(searchParams);
    if (value !== "") {
      updatedParams.set(key, value);
    } else {
      updatedParams.delete(key);
    }

    setSearchParams(updatedParams);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const query = form.elements.search.value;
    updateSearchParams("keyword", query);
    setInputValue("");
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleClearQuery = () => {
    setInputValue("");
  };

  return (
    <section className="pb-20">
      <Title mb={"20px"} tracking={"-0.84px"}>
        News
      </Title>
      <form onSubmit={handleSubmit}>
        <SearchField
          mb={"24px"}
          inputValue={inputValue}
          handleInputChange={handleInputChange}
          handleClearQuery={handleClearQuery}
        />
      </form>
      <NewsList />
      <Pagination updateSearchParams={updateSearchParams} />
    </section>
  );
};

export default NewsPage;
