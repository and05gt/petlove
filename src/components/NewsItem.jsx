import { Link } from "react-router-dom";

const NewsItem = ({ item }) => {
  const { imgUrl, title, text, date, url } = item;

  const formattedDate = new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  });
  const formattedDateString = formattedDate.replace(/\//g, "/");

  return (
    <div className="flex flex-col">
      <img
        className="bg-black/30 rounded-[15px] mb-5"
        src={imgUrl}
        alt="News Image"
      />
      <h3 className="text-base font-bold leading-5 tracking-[-0.48px] mb-3">
        {title}
      </h3>
      <p className="tracking-[-0.28px] mb-[19px]">{text}</p>
      <div className="flex items-center justify-between">
        <p className="text-black/50 tracking-[-0.28px]">
          {formattedDateString}
        </p>
        <Link
          className="text-sm text-orange font-medium leading-3.5 tracking-[-0.28px] underline decoration-solid decoration-auto underline-offset-auto border-0 outline-0 cursor-pointer"
          type="button"
          to={url}
        >
          Read more
        </Link>
      </div>
    </div>
  );
};
export default NewsItem;
