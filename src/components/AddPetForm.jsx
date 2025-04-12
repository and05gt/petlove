import { Link } from "react-router-dom";
import sprite from "../assets/sprite.svg";
import Select, { components } from "react-select";
import { useState } from "react";

const options = [
  { label: "Dog", value: "Dog" },
  { label: "Cat", value: "Cat" },
  { label: "Monkey", value: "Monkey" },
  { label: "Bird", value: "Bird" },
  { label: "Snake", value: "Snake" },
  { label: "Turtle", value: "Turtle" },
  { label: "Lizard", value: "Lizard" },
  { label: "Frog", value: "Frog" },
  { label: "Fish", value: "Fish" },
  { label: "Ants", value: "Ants" },
  { label: "Bees", value: "Bees" },
  { label: "Butterfly", value: "Butterfly" },
  { label: "Spider", value: "Spider" },
  { label: "Scorpion", value: "Scorpion" },
];

const AddPetForm = () => {
  const [selectedType, setSelectedType] = useState(null);

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
      <form className="w-[295px]">
        <div className="flex justify-start gap-2 mb-2">
          <label
            className="flex items-center justify-center w-8 h-8 bg-red-secondary/10 rounded-full cursor-pointer has-checked:bg-red-secondary"
            htmlFor="female"
          >
            <input
              className="hidden peer"
              type="radio"
              name="gender"
              id="female"
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
              className="hidden peer"
              type="radio"
              name="gender"
              id="male"
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
            htmlFor="hetero"
          >
            <input
              className="hidden peer"
              type="radio"
              name="gender"
              id="hetero"
            />
            <svg
              width={20}
              height={20}
              className="fill-orange peer-checked:fill-white"
            >
              <use href={sprite + "#icon-hetero"}></use>
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
            <label htmlFor="imgUrl">
              <input
                className="w-[170px] h-9 pr-5 py-2.5 pl-2.5 border border-black/15 rounded-[30px] outline-0 text-xs font-medium leading-4 tracking-[-0.24px] overflow-hidden text-ellipsis whitespace-nowrap"
                type="url"
                id="imgUrl"
                placeholder="Enter URL"
              />
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
              className="w-full h-10.5 p-3 border border-black/15 rounded-[30px] outline-0 text-sm font-medium leading-4.5 tracking-[-0.42px]"
              type="text"
              id="title"
              placeholder="Title"
            />
          </label>
          <label htmlFor="name">
            <input
              className="w-full h-10.5 p-3 border border-black/15 rounded-[30px] outline-0 text-sm font-medium leading-4.5 tracking-[-0.42px]"
              type="text"
              id="name"
              placeholder="Pet’s Name"
            />
          </label>
          <div className="flex items-center justify-between gap-2">
            <label className="relative inline-block" htmlFor="birthday">
              <input
                className="w-36 h-10.5 p-3 border border-black/15 rounded-[30px] outline-0 text-sm font-medium leading-4.5 tracking-[-0.42px]"
                type="text"
                id="birthday"
                placeholder="00.00.0000"
              />
              <svg
                width={18}
                height={18}
                className="absolute top-3 right-3 fill-black"
              >
                <use href={sprite + "#icon-calendar"}></use>
              </svg>
            </label>
            <Select
              styles={customSelectStyles}
              components={{ DropdownIndicator: DropdownIndicatorChevron }}
              className="w-[143px]"
              placeholder="Type of pet"
              defaultValue={selectedType}
              onChange={setSelectedType}
              options={options}
            />
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
