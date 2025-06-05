import AddItem from "../AddItem";

function AddDrink({ refetch }) {
  return <AddItem type="drink" label="drink" refetch={refetch} />;
}

export default AddDrink;
