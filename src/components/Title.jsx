import { useLocation } from "react-router-dom";

const Title = ({ children }) => {
  const Location = useLocation();
  const isNoticesPage = Location.pathname === "/notices";

  return (
    <h2
      className={
        isNoticesPage
          ? "px-8 text-[28px] font-bold leading-7 md:text-[54px] md:leading-13.5 md:tracking-[-0.03em]"
          : "text-[28px] font-bold leading-7 md:text-[54px] md:leading-13.5 md:tracking-[-0.03em]"
      }
    >
      {children}
    </h2>
  );
};
export default Title;
