import { useState } from "react";
import sprite from "../assets/sprite.svg";
import SearchField from "./SearchField.jsx";
import Select, { components } from "react-select";

const NoticesFilters = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedGender, setSelectedGender] = useState(null);
  const [selectedType, setSelectedType] = useState(null);
  const [selectedLocation, setSelectedLocation] = useState(null);

  const customSelectStyles = {
    control: (base) => ({
      ...base,
      height: "42px",
      borderRadius: "30px",
      border: "none",
      boxShadow: "none",
    }),
    menu: (base) => ({
      ...base,
      borderRadius: "30px",
      border: "none",
      overflow: "hidden",
    }),
    indicatorSeparator: (base) => ({
      ...base,
      display: "none",
    }),
    placeholder: (base) => ({
      ...base,
      color: "#262626",
    }),
  };

  const DropdownIndicatorChevron = (props) => (
    <components.DropdownIndicator {...props}>
      <svg width={18} height={18} className="fill-black">
        <use href={sprite + "#icon-chevron-down"}></use>
      </svg>
    </components.DropdownIndicator>
  );

  const DropdownIndicatorSearch = (props) => (
    <components.DropdownIndicator {...props}>
      <svg width={18} height={18} className="fill-black">
        <use href={sprite + "#icon-search"}></use>
      </svg>
    </components.DropdownIndicator>
  );

  return (
    <form className="w-[335px] px-5 py-5 bg-brown-light rounded-[30px]">
      <div className="flex flex-col gap-3 pb-5 mb-5 border-b-[1px] border-black/10">
        <SearchField />
        <div className="flex gap-2">
          <Select
            styles={customSelectStyles}
            components={{ DropdownIndicator: DropdownIndicatorChevron }}
            className="w-[143px]"
            placeholder="Category"
            defaultValue={selectedCategory}
            onChange={setSelectedCategory}
          />
          <Select
            styles={customSelectStyles}
            components={{ DropdownIndicator: DropdownIndicatorChevron }}
            className="w-36"
            placeholder="By gender"
            defaultValue={selectedGender}
            onChange={setSelectedGender}
          />
        </div>
        <Select
          styles={customSelectStyles}
          components={{ DropdownIndicator: DropdownIndicatorChevron }}
          className="w-full"
          placeholder="By type"
          defaultValue={selectedType}
          onChange={setSelectedType}
        />
        <Select
          styles={customSelectStyles}
          components={{ DropdownIndicator: DropdownIndicatorSearch }}
          className="w-full"
          placeholder="Location"
          defaultValue={selectedLocation}
          onChange={setSelectedLocation}
        />
      </div>
      <div className="flex flex-wrap gap-x-2.5 gap-y-2.5">
        <label
          className="h-10.5 bg-white rounded-[30px] p-3 has-checked:bg-orange has-checked:text-white"
          htmlFor="popular"
        >
          Popular
          <input className="hidden" type="radio" name="sorting" id="popular" />
        </label>

        <label
          className="h-10.5 bg-white rounded-[30px] p-3 has-checked:bg-orange has-checked:text-white"
          htmlFor="unpopular"
        >
          Unpopular
          <input
            className="hidden"
            type="radio"
            name="sorting"
            id="unpopular"
          />
        </label>

        <label
          className="h-10.5 bg-white rounded-[30px] p-3 has-checked:bg-orange has-checked:text-white"
          htmlFor="cheap"
        >
          Cheap
          <input className="hidden" type="radio" name="sorting" id="cheap" />
        </label>

        <label
          className="h-10.5 bg-white rounded-[30px] p-3 has-checked:bg-orange has-checked:text-white"
          htmlFor="expensive"
        >
          Expensive
          <input
            className="hidden"
            type="radio"
            name="sorting"
            id="expensive"
          />
        </label>
      </div>
    </form>
  );
};
export default NoticesFilters;
