import { Link, useNavigate } from "react-router-dom";
import sprite from "../assets/sprite.svg";
import Select, { components } from "react-select";
import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useDispatch } from "react-redux";
import { addUserPet } from "../redux/users/operations.js";

const petSchema = yup.object().shape({
  title: yup.string().required("Title is required!"),
  name: yup.string().required("Pet's name is required!"),
  imgURL: yup
    .string()
    .test("is-url", "Enter a valid URL", (value) => {
      if (!value) return true;
      const urlPattern = new RegExp(
        /^https?:\/\/.*\.(?:png|jpg|jpeg|gif|bmp|webp)$/
      );
      return urlPattern.test(value);
    })
    .required("Image URL is required!"),
  species: yup.string().required("Species is required!"),
  birthday: yup
    .string()
    .test(
      "is-date",
      "Enter a valid birthday date (e.g., 2025-01-01)",
      (value) => {
        if (!value) return true;
        const datePattern = /^\d{4}-\d{2}-\d{2}$/;
        return datePattern.test(value);
      }
    )
    .required("Birthday is required!"),
  sex: yup.string().required("Sex of pet is required!"),
});

const options = [
  { label: "Dog", value: "dog" },
  { label: "Cat", value: "cat" },
  { label: "Monkey", value: "monkey" },
  { label: "Bird", value: "bird" },
  { label: "Snake", value: "snake" },
  { label: "Turtle", value: "turtle" },
  { label: "Lizard", value: "lizard" },
  { label: "Frog", value: "frog" },
  { label: "Fish", value: "fish" },
  { label: "Ants", value: "ants" },
  { label: "Bees", value: "bees" },
  { label: "Butterfly", value: "butterfly" },
  { label: "Spider", value: "spider" },
  { label: "Scorpion", value: "scorpion" },
];

const AddPetForm = () => {
  const [selectedType, setSelectedType] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(petSchema),
    mode: "onSubmit",
  });

  const onSubmit = (data) => {
    dispatch(addUserPet(data));
    reset();
    navigate("/profile");
  };

  const customSelectStyles = {
    control: (base) => ({
      ...base,
      height: "42px",
      borderRadius: "30px",
      border: "1px solid rgba(38, 38, 38, 0.15)",
      boxShadow: "none",
    }),
    menu: (base) => ({
      ...base,
      borderRadius: "15px",
      border: "1px solid rgba(38, 38, 38, 0.15)",
      overflow: "hidden",
    }),
    indicatorSeparator: (base) => ({
      ...base,
      display: "none",
    }),
    placeholder: (base) => ({
      ...base,
      color: "rgba(38, 38, 38, 0.50)",
    }),
  };

  const DropdownIndicatorChevron = (props) => (
    <components.DropdownIndicator {...props}>
      <svg width={18} height={18} className="fill-black">
        <use href={sprite + "#icon-chevron-down"}></use>
      </svg>
    </components.DropdownIndicator>
  );

  return (
    <div className="pt-7 px-5 pb-5 bg-white rounded-[30px]">
      <div className="flex items-baseline gap-2 mb-6">
        <h2 className="text-[28px] font-bold leading-7 tracking-[-0.84px]">
          Add my pet /
        </h2>
        <p className="text-zinc-800/40 font-bold">Personal details</p>
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className="w-[295px]">
        <div className="flex justify-start gap-2 mb-2">
          <label
            className="flex items-center justify-center w-8 h-8 bg-red-secondary/10 rounded-full cursor-pointer has-checked:bg-red-secondary"
            htmlFor="female"
          >
            <input
              {...register("sex")}
              className="hidden peer"
              type="radio"
              id="female"
              value="female"
            />
            <svg
              width={20}
              height={20}
              className="fill-red-secondary peer-checked:fill-white"
            >
              <use href={sprite + "#icon-female"}></use>
            </svg>
          </label>
          <label
            className="flex items-center justify-center w-8 h-8 bg-blue/10 rounded-full cursor-pointer has-checked:bg-blue"
            htmlFor="male"
          >
            <input
              {...register("sex")}
              className="hidden peer"
              type="radio"
              id="male"
              value="male"
            />
            <svg
              width={20}
              height={20}
              className="fill-blue peer-checked:fill-white"
            >
              <use href={sprite + "#icon-male"}></use>
            </svg>
          </label>
          <label
            className="flex items-center justify-center w-8 h-8 bg-orange/10 rounded-full cursor-pointer has-checked:bg-orange"
            htmlFor="unknown"
          >
            <input
              {...register("sex")}
              className="hidden peer"
              type="radio"
              id="unknown"
              value="unknown"
            />
            <svg
              width={20}
              height={20}
              className="fill-orange peer-checked:fill-white"
            >
              <use href={sprite + "#icon-unknown"}></use>
            </svg>
          </label>
        </div>
        <div className="flex items-center justify-center w-17 h-17 mt-0 mr-auto mb-4 ml-auto bg-brown-light rounded-full cursor-pointer">
          <svg width={34} height={34} className="fill-orange">
            <use href={sprite + "#icon-footprint"}></use>
          </svg>
        </div>

        <div className="flex flex-col gap-2.5 mb-[31px]">
          <div className="flex items-center justify-between gap-[5px]">
            <label htmlFor="imgURL">
              <input
                {...register("imgURL")}
                className="w-[170px] h-9 pr-5 py-2.5 pl-2.5 border border-black/15 rounded-[30px] outline-0 text-xs font-medium leading-4 tracking-[-0.24px] overflow-hidden text-ellipsis whitespace-nowrap"
                type="url"
                id="imgURL"
                placeholder="Enter URL"
              />
              {errors.imgURL && (
                <p className="text-xs text-red leading-3.5 tracking-[-0.36px] pl-3 mt-1">
                  {errors.imgURL?.message}
                </p>
              )}
            </label>
            <button
              className="flex items-center justify-between w-[117px] h-9 p-2.5 bg-brown-light rounded-[30px] border-0 outline-0 cursor-pointer text-black text-xs font-medium leading-4 tracking-[-0.24px]"
              type="button"
            >
              Upload photo
              <svg width={16} height={16} className="fill-orange">
                <use href={sprite + "#icon-upload-cloud"}></use>
              </svg>
            </button>
          </div>
          <label htmlFor="title">
            <input
              {...register("title")}
              className="w-full h-10.5 p-3 border border-black/15 rounded-[30px] outline-0 text-sm font-medium leading-4.5 tracking-[-0.42px]"
              type="text"
              id="title"
              placeholder="Title"
            />
            {errors.title && (
              <p className="text-xs text-red leading-3.5 tracking-[-0.36px] pl-3 mt-1">
                {errors.title?.message}
              </p>
            )}
          </label>
          <label htmlFor="name">
            <input
              {...register("name")}
              className="w-full h-10.5 p-3 border border-black/15 rounded-[30px] outline-0 text-sm font-medium leading-4.5 tracking-[-0.42px]"
              type="text"
              id="name"
              placeholder="Pet’s Name"
            />
            {errors.name && (
              <p className="text-xs text-red leading-3.5 tracking-[-0.36px] pl-3 mt-1">
                {errors.name?.message}
              </p>
            )}
          </label>
          <div className="flex items-center justify-between gap-2">
            <label className="relative inline-block" htmlFor="birthday">
              <input
                {...register("birthday")}
                className="w-36 h-10.5 p-3 border border-black/15 rounded-[30px] outline-0 text-sm font-medium leading-4.5 tracking-[-0.42px]"
                type="text"
                id="birthday"
                placeholder="0000-00-00"
              />
              <svg
                width={18}
                height={18}
                className="absolute top-3 right-3 fill-black"
              >
                <use href={sprite + "#icon-calendar"}></use>
              </svg>
              {errors.birthday && (
                <p className="text-xs text-red leading-3.5 tracking-[-0.36px] pl-3 mt-1">
                  {errors.birthday?.message}
                </p>
              )}
            </label>
            <Controller
              name="species"
              control={control}
              render={({ field }) => (
                <Select
                  {...field}
                  styles={customSelectStyles}
                  components={{ DropdownIndicator: DropdownIndicatorChevron }}
                  className="w-[143px]"
                  placeholder="Type of pet"
                  defaultValue={selectedType}
                  onChange={(option) => {
                    setSelectedType(option);
                    field.onChange(option.value);
                  }}
                  options={options}
                  value={selectedType}
                />
              )}
            />
            {/* <Select
              {...register("species")}
              styles={customSelectStyles}
              components={{ DropdownIndicator: DropdownIndicatorChevron }}
              className="w-[143px]"
              placeholder="Type of pet"
              defaultValue={selectedType}
              onChange={setSelectedType}
              options={options}
              value={selectedType}
            /> */}
          </div>
        </div>
        <div className="flex items-center justify-end gap-2">
          <Link
            className="block w-25 h-10.5 px-8.5 py-3 bg-black/5 text-black text-sm font-bold leading-4.5 tracking-[-0.42px] rounded-[30px] border-0 outline-0 cursor-pointer"
            to="/profile"
          >
            Back
          </Link>
          <button
            className="block w-25 h-10.5 px-6.5 py-3 bg-orange text-white text-sm font-bold leading-4.5 tracking-[-0.42px] rounded-[30px] border-0 outline-0 cursor-pointer"
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};
export default AddPetForm;
