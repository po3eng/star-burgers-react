import Nutrient from "../nutrient/nutrient";
import styles from "./list-nutrients.module.css";
import PropTypes from "prop-types";

const ListNutrients = ({ ingredient }) => {
  return (
    <div className={styles.nutrients}>
      <Nutrient
        nameNutrient="Калории,ккал"
        valueNutrient={ingredient.calories}
      ></Nutrient>
      <Nutrient
        nameNutrient=" Белки, г"
        valueNutrient={ingredient.proteins}
      ></Nutrient>
      <Nutrient
        nameNutrient="Жиры, г"
        valueNutrient={ingredient.fat}
      ></Nutrient>
      <Nutrient
        nameNutrient="Углеводы, г"
        valueNutrient={ingredient.carbohydrates}
      ></Nutrient>
    </div>
  );
};

ListNutrients.propTypes = {
  ingredient: PropTypes.object,
};

export default ListNutrients;
