import { Link } from "react-router-dom";

const NewsItem = () => {
  return (
    <div className="flex flex-col">
      <div className="w-full h-47.5 bg-black/30 rounded-[15px] mb-5"></div>
      <h3 className="text-base font-bold leading-5 tracking-[-0.48px] mb-3">
        On Pets, Moral Logic and Love
      </h3>
      <p className="tracking-[-0.28px] mb-[19px]">
        In January, I fell in love with someone. It was the last thing I’d
        expect and caught me completely off guard. He has sandy blond hair with
        flecks of gray and gorgeous, sad eyes.
      </p>
      <div className="flex items-center justify-between">
        <p className="text-black/50 tracking-[-0.28px]">15/03/2023</p>
        <Link
          className="text-sm text-orange font-medium leading-3.5 tracking-[-0.28px] underline decoration-solid decoration-auto underline-offset-auto border-0 outline-0 cursor-pointer"
          type="button"
        >
          Read more
        </Link>
      </div>
    </div>
  );
};
export default NewsItem;
