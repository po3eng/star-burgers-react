import { useMemo } from "react";
import Bun from "../bun/bun";
import ListConstructorIngredients from "../list-constructor-ingredients/list-constructor-ingredients";
import { useSelector } from "react-redux";
const Burger = () => {
  const ingredients = useSelector((store) => store.ingredients.ingredients);
  const bun = useMemo(() => ingredients.find((i) => i.type === "bun"));
  const orederIngredients = useMemo(() =>
    ingredients.filter((i) => i.type !== "bun"),
  );
  return (
    <>
      <Bun type="top" bun={bun} />
      <ListConstructorIngredients ingredients={orederIngredients} />
      <Bun type="bottom" bun={bun} />
    </>
  );
};

export default Burger;
