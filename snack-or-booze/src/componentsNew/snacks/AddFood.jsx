import AddItem from "../AddItem";

function AddFood({ refetch }) {
  return <AddItem type="snack" label="snack" refetch={refetch} />;
}

export default AddFood;
