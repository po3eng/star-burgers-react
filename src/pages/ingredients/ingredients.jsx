import { useCallback, useEffect, useMemo, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const IngredientPage = () => {
  const { id } = useParams();
  const { ingredients } = useSelector((store) => store.ingredients);

  console.log(ingredients);
  const [ingredient, setIngredient] = useState({ name: "" });
  const getIngredient = useCallback(() => {
    return setIngredient(ingredients.find((i) => i._id === id));
  }, [id, ingredients]);

  useEffect(() => {
    if (ingredients) {
      getIngredient();
    }
  }, [id, ingredients]);
  return (
    <>
      <p className="text text_type_main-medium">werwerwer{ingredient.name}</p>
    </>
  );
};

export default IngredientPage;
