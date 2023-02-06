import { useEffect, useMemo } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const IngredientPage = () => {
  const { id } = useParams();
  const { ingredients } = useSelector((store) => store.ingredients);
  const ingredient = useMemo(() => {
    return ingredients.find((i) => i._id === id);
  }, [id, ingredients]);

  useEffect(() => {});
  console.log(ingredient);
  return (
    <>
      <p className="text text_type_main-medium">{ingredient.name}</p>
    </>
  );
};

export default IngredientPage;
