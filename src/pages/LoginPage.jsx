import { Link } from "react-router-dom";
import PetBlock from "../components/PetBlock.jsx";
import Title from "../components/Title.jsx";
import LoginForm from "../components/LoginForm.jsx";
import loginMobImg from "../assets/img/login-mob@1x.webp";
import loginMobImg2x from "../assets/img/login-mob@2x.webp";
import loginTabImg from "../assets/img/login-tab@1x.webp";
import loginTabImg2x from "../assets/img/login-tab@2x.webp";
import loginDeskImg from "../assets/img/login-desk@1x.webp";
import loginDeskImg2x from "../assets/img/login-desk@2x.webp";

const LoginPage = () => {
  return (
    <section className="flex flex-col gap-2.5">
      <PetBlock
        mob={`${loginMobImg} 1x, ${loginMobImg2x} 2x`}
        tab={`${loginTabImg} 1x, ${loginTabImg2x} 2x`}
        desk={`${loginDeskImg} 1x, ${loginDeskImg2x} 2x`}
        src={loginDeskImg}
      />
      <div className="pt-15 pr-5 pb-15 pl-5 rounded-[30px] bg-white">
        <Title mb={"12px"} tracking={"-1.12px"}>
          Log In
        </Title>
        <p className="mb-6">
          Welcome! Please enter your credentials to login to the platform:
        </p>
        <LoginForm />
        <p className="text-xs text-black/50 leading-3.5 tracking-[-0.36px] text-center">
          Don’t have an account?{" "}
          <Link
            className="text-orange font-bold underline underline-offset-auto decoration-solid decoration-auto"
            to="/register"
          >
            Register
          </Link>
        </p>
      </div>
    </section>
  );
};

export default LoginPage;
