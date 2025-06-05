import ItemMenu from "../ItemMenu";

function DrinkMenu({ drinks }) {
  return <ItemMenu title="Drink Menu" items={drinks} basePath="drinks" />;
}

export default DrinkMenu;
