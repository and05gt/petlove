const LogOutBtn = ({ width }) => {
  return (
    <button
      style={{ width: width }}
      className="h-10.5 block p-3 rounded-[30px] bg-brown-light text-orange font-bold tracking-[-0.42px] uppercase outline-0 border-0 cursor-pointer"
      type="button"
    >
      Log out
    </button>
  );
};
export default LogOutBtn;
