import { useSelector } from "react-redux";
import NewsItem from "./NewsItem.jsx";
import {
  selectError,
  selectIsLoading,
  selectNews,
} from "../redux/news/selectors.js";
import Loader from "./Loader.jsx";

const NewsList = () => {
  const news = useSelector(selectNews);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  return (
    <ul className="flex flex-col gap-6 mb-11">
      {isLoading && <Loader />}
      {error && <h3>{error}</h3>}
      {news?.map((item) => (
        <li key={item._id}>
          <NewsItem item={item} />
        </li>
      ))}
    </ul>
  );
};
export default NewsList;
