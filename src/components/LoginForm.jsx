import { useState } from "react";
import sprite from "../assets/sprite.svg";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useDispatch } from "react-redux";
import { login } from "../redux/auth/operations.js";

const schema = yup.object().shape({
  email: yup
    .string()
    .email("Email must be a valid!")
    .required("Email is required!"),
  password: yup
    .string()
    .min(7, "Minimum 7 characters")
    .required("Password is required!"),
});

const LoginForm = () => {
  const [isVisiblePassword, setIsVisiblePassword] = useState(false);
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    dispatch(login(data));
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-[295px] mb-3">
      <label className="w-full inline-block mb-2.5">
        <input
          {...register("email", {
            pattern: /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/,
          })}
          type="text"
          placeholder="Email"
          className="w-full h-10.5 border border-black/15 rounded-[30px] p-3 text-black outline-0 focus:border-orange"
        />
        {errors.email && (
          <p className="text-xs text-red leading-3.5 tracking-[-0.36px] pl-3 mt-1">
            {errors.email?.message}
          </p>
        )}
      </label>
      <label className="relative w-full inline-block mb-10">
        <input
          {...register("password")}
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
        {errors.password && (
          <p className="text-xs text-red leading-3.5 tracking-[-0.36px] pl-3 mt-1">
            {errors.password?.message}
          </p>
        )}
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
