import { useMemo } from "react";
import Bun from "../bun/bun";
import ListConstructorIngredients from "../list-constructor-ingredients/list-constructor-ingredients";

const Burger = () => {
  return (
    <>
      <Bun type="top" />
      <ListConstructorIngredients />
      <Bun type="bottom" />
    </>
  );
};

export default Burger;
