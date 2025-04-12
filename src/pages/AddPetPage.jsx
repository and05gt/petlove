import AddPetForm from "../components/AddPetForm.jsx";
import PetBlock from "../components/PetBlock.jsx";

const AddPetPage = () => {
  return (
    <div className="flex flex-col gap-2.5">
      <PetBlock
        mob={
          "../assets/img/add-pet-mob@1x.webp 1x, ../assets/img/add-pet-mob@2x.webp 2x"
        }
        tab={
          "../assets/img/add-pet-tab@1x.webp 1x, ../assets/img/add-pet-tab@2x.webp 2x"
        }
        desk={
          "../assets/img/add-pet-desk@1x.webp 1x, ../assets/img/add-pet-desk@2x.webp 2x"
        }
        src={"../assets/img/add-pet-desk@1x.webp"}
      />
      <AddPetForm />
    </div>
  );
};
export default AddPetPage;
