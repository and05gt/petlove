const Title = ({ children, mb, tracking }) => {
  return (
    <h2
      style={{ marginBottom: mb, letterSpacing: tracking }}
      className="text-[28px] font-bold leading-7"
    >
      {children}
    </h2>
  );
};
export default Title;
