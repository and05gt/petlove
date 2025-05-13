import sprite from "../assets/sprite.svg";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../redux/users/selectors.js";
import { useEffect, useState } from "react";
import { updateUser } from "../redux/users/operations.js";
import toast from "react-hot-toast";

const userSchema = yup.object().shape({
  name: yup.string(),
  email: yup
    .string()
    .matches(
      /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/,
      "Enter a valid email address",
    ),
  phone: yup
    .string()
    .test(
      "is-valid-phone",
      "Enter a valid phone number (e.g., +380123456789)",
      (value) => {
        if (!value) return true;
        const phonePattern = /^\+38\d{10}$/;
        return phonePattern.test(value);
      },
    ),
  avatar: yup.string().test("is-url", "Enter a valid URL", (value) => {
    if (!value) return true;
    const urlPattern = new RegExp(
      /^https?:\/\/.*\.(?:png|jpg|jpeg|gif|bmp|webp)$/,
    );
    return urlPattern.test(value);
  }),
});

const ModalEditUser = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  if (!user) return;
  const { name, email, phone, avatar } = user;

  const [formValues, setFormValues] = useState({
    name: name,
    email: email,
    phone: phone,
    avatar: avatar,
  });

  useEffect(() => {
    setFormValues({ name, email, phone, avatar });
  }, [name, email, phone, avatar]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(userSchema),
    mode: "onSubmit",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const onSubmit = (data) => {
    dispatch(updateUser(data));
    toast.success("User information updated successfully!");
    onClose();
  };

  return (
    <div className="fixed top-0 left-0 flex h-full w-full items-center justify-center bg-black/30">
      <div className="relative flex w-[335px] flex-col rounded-[30px] bg-white px-5 py-10 md:w-120 md:p-12.5">
        <button
          className="absolute top-5 right-5"
          type="button"
          onClick={onClose}
        >
          <svg className="fill-black" width={24} height={24}>
            <use href={sprite + "#icon-close"}></use>
          </svg>
        </button>
        <h2 className="text-black-secondary mb-5 text-xl leading-5 font-bold md:text-lg md:leading-6">
          Edit information
        </h2>
        <div className="mb-3 flex items-center justify-center">
          <span className="bg-orange flex h-20 w-20 items-center justify-center overflow-hidden rounded-full md:h-21.5 md:w-21.5">
            <img src={avatar} alt="Avatar" />
          </span>
        </div>
        <form
          className="flex w-[295px] flex-col items-center justify-center gap-[21px] md:w-95 md:gap-10"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="flex flex-col items-center gap-2.5 md:gap-5">
            <div className="flex items-center justify-between gap-2">
              <label htmlFor="avatar">
                <input
                  {...register("avatar")}
                  className="border-orange h-10.5 w-[161px] overflow-hidden rounded-[30px] border py-[13px] pr-[39px] pl-3 text-xs leading-4 font-medium tracking-[-0.24px] text-ellipsis whitespace-nowrap outline-0 md:w-56.5 md:py-3 md:pr-5"
                  type="text"
                  id="avatar"
                  name="avatar"
                  placeholder="https://ftp.goit.study/img/pets/5.webp"
                  value={formValues.avatar}
                  onChange={handleInputChange}
                />
                {errors.avatar && (
                  <p className="text-red mt-1 pl-3 text-xs leading-3.5 tracking-[-0.36px]">
                    {errors.avatar?.message}
                  </p>
                )}
              </label>
              <button
                className="bg-brown-light flex h-10.5 w-31.5 cursor-pointer items-center justify-center gap-2 rounded-[30px] border-0 px-3 py-[13px] text-xs leading-4 font-medium tracking-[-0.24px] text-black outline-0 md:w-36.5 md:px-4 md:py-3 md:text-sm md:leading-4.5 md:tracking-[-0.02em]"
                type="button"
              >
                Upload photo
                <svg width={18} height={18} className="fill-orange">
                  <use href={sprite + "#icon-upload-cloud"}></use>
                </svg>
              </button>
            </div>
            <div className="flex w-full flex-col items-center gap-2.5 md:gap-3.5">
              <label className="w-full" htmlFor="name">
                <input
                  {...register("name")}
                  className="border-orange h-10.5 w-full rounded-[30px] border p-3 text-sm leading-4.5 font-medium tracking-[-0.42px] outline-0 md:h-13 md:p-4 md:text-base md:leading-5 md:tracking-[-0.03em]"
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Name"
                  value={formValues.name}
                  onChange={handleInputChange}
                />
                {errors.name && (
                  <p className="text-red mt-1 pl-3 text-xs leading-3.5 tracking-[-0.36px]">
                    {errors.name?.message}
                  </p>
                )}
              </label>
              <label className="w-full" htmlFor="email">
                <input
                  {...register("email")}
                  className="border-orange h-10.5 w-full rounded-[30px] border p-3 text-sm leading-4.5 font-medium tracking-[-0.42px] outline-0 md:h-13 md:p-4 md:text-base md:leading-5 md:tracking-[-0.03em]"
                  type="text"
                  id="email"
                  name="email"
                  placeholder="name@gmail.com"
                  value={formValues.email}
                  onChange={handleInputChange}
                />
                {errors.email && (
                  <p className="text-red mt-1 pl-3 text-xs leading-3.5 tracking-[-0.36px]">
                    {errors.email?.message}
                  </p>
                )}
              </label>
              <label className="w-full" htmlFor="phone">
                <input
                  {...register("phone")}
                  className="border-orange h-10.5 w-full rounded-[30px] border p-3 text-sm leading-4.5 font-medium tracking-[-0.42px] outline-0 md:h-13 md:p-4 md:text-base md:leading-5 md:tracking-[-0.03em]"
                  type="text"
                  id="phone"
                  name="phone"
                  placeholder="+380"
                  value={formValues.phone}
                  onChange={handleInputChange}
                />
                {errors.phone && (
                  <p className="text-red mt-1 pl-3 text-xs leading-3.5 tracking-[-0.36px]">
                    {errors.phone?.message}
                  </p>
                )}
              </label>
            </div>
          </div>
          <button
            className="bg-orange h-10.5 w-full cursor-pointer rounded-[30px] border-0 text-sm leading-4.5 font-bold tracking-[-0.42px] text-white outline-0 md:h-13 md:text-base md:leading-5 md:tracking-[-0.03em]"
            type="submit"
          >
            Go to profile
          </button>
        </form>
      </div>
    </div>
  );
};
export default ModalEditUser;
