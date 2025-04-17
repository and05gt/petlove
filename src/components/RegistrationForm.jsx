import { useState } from "react";
import sprite from "../assets/sprite.svg";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useDispatch } from "react-redux";
import { registerUser } from "../redux/auth/operations.js";
import toast from "react-hot-toast";

const schema = yup.object().shape({
  name: yup.string().required("Name is required!"),
  email: yup
    .string()
    .email("Email must be a valid!")
    .required("Email is required!"),
  password: yup
    .string()
    .min(7, "Minimum 7 characters")
    .required("Password is required!"),
});

const RegistrationForm = () => {
  const [isVisiblePassword, setIsVisiblePassword] = useState(false);
  const [isVisibleConfirmPassword, setIsVisibleConfirmPassword] =
    useState(false);
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    getValues,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    const { confirmPassword, ...userData } = data;
    if (data.password !== data.confirmPassword) {
      toast.error("Passwords do not match!");
      return;
    }
    dispatch(registerUser(userData));
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-[295px] mb-3">
      <label className="w-full inline-block mb-2.5">
        <input
          {...register("name")}
          type="text"
          placeholder="Name"
          className="w-full h-10.5 border border-black/15 rounded-[30px] p-3 text-black outline-0 focus:border-orange invalid:border-red"
        />
        {errors.name && (
          <p className="text-xs text-red leading-3.5 tracking-[-0.36px] pl-3 mt-1">
            {errors.name?.message}
          </p>
        )}
      </label>
      <label className="w-full inline-block mb-2.5">
        <input
          {...register("email", {
            pattern: /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/,
          })}
          type="text"
          placeholder="Email"
          className="w-full h-10.5 border border-black/15 rounded-[30px] p-3 text-black outline-0 focus:border-orange invalid:border-red"
        />
        {errors.email && (
          <p className="text-xs text-red leading-3.5 tracking-[-0.36px] pl-3 mt-1">
            {errors.email?.message}
          </p>
        )}
      </label>
      <label className="relative w-full inline-block mb-2.5">
        <input
          {...register("password")}
          type={isVisiblePassword ? "text" : "password"}
          placeholder="Password"
          className="w-full h-10.5 border border-black/15 rounded-[30px] p-3 text-black outline-0 focus:border-orange invalid:border-red"
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
      <label className="relative w-full inline-block mb-6">
        <input
          {...register("confirmPassword")}
          type={isVisibleConfirmPassword ? "text" : "password"}
          placeholder="Confirm password"
          className="w-full h-10.5 border border-black/15 rounded-[30px] p-3 text-black outline-0 focus:border-orange"
        />
        <button
          className="absolute top-3 right-3 border-0 outline-0 cursor-pointer"
          type="button"
          onClick={() => setIsVisibleConfirmPassword(!isVisibleConfirmPassword)}
        >
          {isVisibleConfirmPassword ? (
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
        className="block w-[295px] h-10.5 bg-orange text-sm text-white font-bold rounded-[30px] p-3 uppercase tracking-[-0.42px] leading-4.5 border-0 outline-0 cursor-pointer"
        type="submit"
      >
        Registration
      </button>
    </form>
  );
};
export default RegistrationForm;
