import { Link } from "react-router-dom";
import PetBlock from "../components/PetBlock.jsx";
import Title from "../components/Title.jsx";
import RegistrationForm from "../components/RegistrationForm.jsx";
import registerMobImg from "../assets/img/register-mob@1x.webp";
import registerMobImg2x from "../assets/img/register-mob@2x.webp";
import registerTabImg from "../assets/img/register-tab@1x.webp";
import registerTabImg2x from "../assets/img/register-tab@2x.webp";
import registerDeskImg from "../assets/img/register-desk@1x.webp";
import registerDeskImg2x from "../assets/img/register-desk@2x.webp";

const RegistrationPage = () => {
  return (
    <section className="flex flex-col gap-2.5">
      <PetBlock
        mob={`${registerMobImg} 1x, ${registerMobImg2x} 2x`}
        tab={`${registerTabImg} 1x, ${registerTabImg2x} 2x`}
        desk={`${registerDeskImg} 1x, ${registerDeskImg2x} 2x`}
        src={registerDeskImg}
      />
      <div className="pt-[27px] pr-5 pb-[27px] pl-5 rounded-[30px] bg-white">
        <Title mb={"12px"} tracking={"-1.12px"}>
          Registration
        </Title>
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
    </section>
  );
};

export default RegistrationPage;
