import { Link } from "react-router-dom";
import PetBlock from "../components/PetBlock.jsx";
import Title from "../components/Title.jsx";
import RegistrationForm from "../components/RegistrationForm.jsx";

const RegistrationPage = () => {
  return (
    <div className="flex flex-col gap-2.5">
      <PetBlock
        mob={
          "../src/assets/img/register-mob@1x.webp 1x, ../src/assets/img/register-mob@2x.webp 2x"
        }
        tab={
          "../src/assets/img/register-tab@1x.webp 1x, ../src/assets/img/register-tab@2x.webp 2x"
        }
        desk={
          "../src/assets/img/register-desk@1x.webp 1x, ../src/assets/img/register-desk@2x.webp 2x"
        }
        src={"../assets/img/register-desk@1x.webp"}
      />
      <div className="pt-[27px] pr-5 pb-[27px] pl-5 rounded-[30px] bg-white">
        <Title>Registration</Title>
        <p className="mb-5">Thank you for your interest in our platform.</p>
        <RegistrationForm />
        <p className="text-xs text-black/50 leading-3.5 tracking-[-0.36px] text-center">
          Already have an account?{" "}
          <Link
            className="text-orange font-bold underline underline-offset-auto decoration-solid decoration-auto"
            to="/login"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};
export default RegistrationPage;
