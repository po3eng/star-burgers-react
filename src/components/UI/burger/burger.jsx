import { useMemo } from "react";
import Bun from "../bun/bun";
import ListConstructorIngredients from "../list-constructor-ingredients/list-constructor-ingredients";

const Burger = () => {
  return (
    <>
      <Bun type="top" board="bun" />
      <ListConstructorIngredients board="ingredients" />
      <Bun type="bottom" board="bun" />
    </>
  );
};

export default Burger;
