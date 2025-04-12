import { useState } from "react";
import sprite from "../assets/sprite.svg";

const LoginForm = () => {
  const [isVisiblePassword, setIsVisiblePassword] = useState(false);

  return (
    <form className="w-[295px] mb-3">
      <label className="w-full inline-block mb-2.5">
        <input
          type="text"
          placeholder="Email"
          className="w-full h-10.5 border border-black/15 rounded-[30px] p-3 text-black outline-0 focus:border-orange"
        />
      </label>
      <label className="relative w-full inline-block mb-10">
        <input
          type={isVisiblePassword ? "text" : "password"}
          placeholder="Password"
          className="w-full h-10.5 border border-black/15 rounded-[30px] p-3 text-black outline-0 focus:border-orange"
        />
        <button
          className="absolute top-3 right-3 border-0 outline-0 cursor-pointer"
          type="button"
          onClick={() => setIsVisiblePassword(!isVisiblePassword)}
        >
          {isVisiblePassword ? (
            <svg className="fill-orange" width={18} height={18}>
              <use href={sprite + "#icon-eye"}></use>
            </svg>
          ) : (
            <svg className="fill-orange" width={18} height={18}>
              <use href={sprite + "#icon-eye-off"}></use>
            </svg>
          )}
        </button>
      </label>
      <button
        className="block w-[295px] h-10.5 bg-orange text-[14px] text-white font-bold rounded-[30px] p-3 uppercase tracking-[-0.42px] leading-[18px] border-0 outline-0 cursor-pointer"
        type="submit"
      >
        Log In
      </button>
    </form>
  );
};
export default LoginForm;
