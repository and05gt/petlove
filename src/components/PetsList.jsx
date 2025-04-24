import { useSelector } from "react-redux";
import PetsItem from "./PetsItem.jsx";
import { selectUser } from "../redux/users/selectors.js";

const PetsList = () => {
  const user = useSelector(selectUser);
  const pets = user?.pets;

  return (
    <ul className="flex flex-col gap-3.5 mb-5">
      {pets?.map((pet) => (
        <li key={pet._id}>
          <PetsItem pet={pet} />
        </li>
      ))}
    </ul>
  );
};
export default PetsList;
