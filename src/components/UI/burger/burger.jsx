import { useContext, useCallback, useMemo } from "react";
import Bun from "../bun/bun";
import ListConstructorIngredients from "../list-constructor-ingredients/list-constructor-ingredients";
import { OrederContex } from "../../services/BurgersContext";
const Burger = () => {
  const [ingredients] = useContext(OrederContex);


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
