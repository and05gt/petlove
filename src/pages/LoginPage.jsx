import { Link } from "react-router-dom";
import PetBlock from "../components/PetBlock.jsx";
import Title from "../components/Title.jsx";
import LoginForm from "../components/LoginForm.jsx";

const LoginPage = () => {
  return (
    <div className="flex flex-col gap-2.5">
      <PetBlock
        mob={
          "../../src/assets/img/login-mob@1x.webp 1x, ../../src/assets/img/login-mob@2x.webp 2x"
        }
        tab={
          "../../src/assets/img/login-tab@1x.webp 1x, ../../src/assets/img/login-tab@2x.webp 2x"
        }
        desk={
          "../../src/assets/img/login-desk@1x.webp 1x, ../../src/assets/img/login-desk@2x.webp 2x"
        }
        src={"../assets/img/login-desk@1x.webp"}
      />
      <div className="pt-15 pr-5 pb-15 pl-5 rounded-[30px] bg-white">
        <Title>Log In</Title>
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
    </div>
  );
};
export default LoginPage;
