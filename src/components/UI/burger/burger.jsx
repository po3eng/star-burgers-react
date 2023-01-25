import { useContext, useMemo } from "react";
import Bun from "../bun/bun";
import ListConstructorIngredients from "../list-constructor-ingredients/list-constructor-ingredients";
import { BurgerContext } from "../../services/burgers-context";
const Burger = () => {

  const ingredients = useContext(BurgerContext);

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
