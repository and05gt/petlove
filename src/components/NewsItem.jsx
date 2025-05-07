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
    <div className="flex flex-col md:w-[340px] xl:w-[361px]">
      <div className="flex items-center w-full h-[190px] bg-white rounded-[15px] mb-5 overflow-hidden md:mb-7 md:w-[340px] md:h-[226px] xl:w-[361px]">
        <img
          className="object-cover"
          src={imgUrl}
          alt={title || "News Image"}
        />
      </div>
      <h3 className="text-base font-bold leading-5 tracking-[-0.48px] mb-3 md:h-13 md:mb-3.5 md:text-xl md:leading-6.5 md:tracking-[-0.03em] md:line-clamp-2">
        {title}
      </h3>
      <p className="max-h-19.5 mb-[19px] tracking-[-0.02em] line-clamp-4 md:h-19.5 md:mb-7 md:text-base md:leading-5 md:tracking-[-0.02em]">
        {text}
      </p>
      <div className="flex items-center justify-between md:mb-7">
        <p className="text-black/50 tracking-[-0.28px] md:text-base md:leading-5 md:tracking-[-0.02em]">
          {formattedDateString}
        </p>
        <Link
          className="text-sm text-orange font-medium leading-3.5 tracking-[-0.28px] underline decoration-solid decoration-auto underline-offset-auto border-0 outline-0 cursor-pointer md:text-base md:leading-5 md:tracking-[-0.02em]"
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
