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
      "Enter a valid email address"
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
      }
    ),
  avatar: yup.string().test("is-url", "Enter a valid URL", (value) => {
    if (!value) return true;
    const urlPattern = new RegExp(
      /^https?:\/\/.*\.(?:png|jpg|jpeg|gif|bmp|webp)$/
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
    <div className="fixed top-0 left-0 w-full h-full bg-black/30 flex justify-center items-center">
      <div className="relative flex flex-col w-[335px] px-5 py-10 bg-white rounded-[30px]">
        <button
          className="absolute top-5 right-5"
          type="button"
          onClick={onClose}
        >
          <svg className=" fill-black" width={24} height={24}>
            <use href={sprite + "#icon-close"}></use>
          </svg>
        </button>
        <h2 className="text-xl font-bold leading-5 mb-5">Edit information</h2>
        <div className="flex items-center justify-center mb-3">
          <span className="flex items-center justify-center w-20 h-20 bg-orange rounded-full overflow-hidden">
            <img src={avatar} alt="Avatar" />
          </span>
        </div>
        <form
          className="flex flex-col items-center justify-center gap-[21px] w-[295px]"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="flex flex-col items-center gap-2.5">
            <div className="flex items-center justify-between gap-2">
              <label htmlFor="avatar">
                <input
                  {...register("avatar")}
                  className="w-[161px] h-10.5 pr-[39px] py-[13px] pl-3 border border-orange rounded-[30px] outline-0 text-xs font-medium leading-4 tracking-[-0.24px] overflow-hidden text-ellipsis whitespace-nowrap"
                  type="text"
                  id="avatar"
                  name="avatar"
                  placeholder="https://ftp.goit.study/img/pets/5.webp"
                  value={formValues.avatar}
                  onChange={handleInputChange}
                />
                {errors.avatar && (
                  <p className="text-xs text-red leading-3.5 tracking-[-0.36px] pl-3 mt-1">
                    {errors.avatar?.message}
                  </p>
                )}
              </label>
              <button
                className="flex items-center justify-between w-31.5 h-10.5 p-3 bg-brown-light rounded-[30px] border-0 outline-0 cursor-pointer text-black text-xs font-medium leading-4 tracking-[-0.24px]"
                type="button"
              >
                Upload photo
                <svg width={16} height={16} className="fill-orange">
                  <use href={sprite + "#icon-upload-cloud"}></use>
                </svg>
              </button>
            </div>
            <label className="w-full" htmlFor="name">
              <input
                {...register("name")}
                className="w-full h-10.5 p-3 border border-orange rounded-[30px] outline-0 text-sm font-medium leading-4.5 tracking-[-0.42px]"
                type="text"
                id="name"
                name="name"
                placeholder="Name"
                value={formValues.name}
                onChange={handleInputChange}
              />
              {errors.name && (
                <p className="text-xs text-red leading-3.5 tracking-[-0.36px] pl-3 mt-1">
                  {errors.name?.message}
                </p>
              )}
            </label>
            <label className="w-full" htmlFor="email">
              <input
                {...register("email")}
                className="w-full h-10.5 p-3 border border-orange rounded-[30px] outline-0 text-sm font-medium leading-4.5 tracking-[-0.42px]"
                type="text"
                id="email"
                name="email"
                placeholder="name@gmail.com"
                value={formValues.email}
                onChange={handleInputChange}
              />
              {errors.email && (
                <p className="text-xs text-red leading-3.5 tracking-[-0.36px] pl-3 mt-1">
                  {errors.email?.message}
                </p>
              )}
            </label>
            <label className="w-full" htmlFor="phone">
              <input
                {...register("phone")}
                className="w-full h-10.5 p-3 border border-orange rounded-[30px] outline-0 text-sm font-medium leading-4.5 tracking-[-0.42px]"
                type="text"
                id="phone"
                name="phone"
                placeholder="+380"
                value={formValues.phone}
                onChange={handleInputChange}
              />
              {errors.phone && (
                <p className="text-xs text-red leading-3.5 tracking-[-0.36px] pl-3 mt-1">
                  {errors.phone?.message}
                </p>
              )}
            </label>
          </div>
          <button
            className="w-full h-10.5 bg-orange rounded-[30px] text-sm text-white font-bold leading-4.5 tracking-[-0.42px] border-0 outline-0 cursor-pointer"
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
