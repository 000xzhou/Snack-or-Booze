import ItemMenu from "../ItemMenu";

function FoodMenu({ snacks }) {
  return <ItemMenu title="Food Menu" items={snacks} basePath="snacks" />;
}

export default FoodMenu;
