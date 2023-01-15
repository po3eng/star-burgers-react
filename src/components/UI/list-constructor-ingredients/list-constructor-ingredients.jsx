import Ingredient from "../constructor-ingredient/constructor-ingredient";
import classes from "./list-constructor-ingredients.module.css";
import PropTypes from "prop-types";

const ListConstructorIngredients = ({ ingredients }) => {
  return (
    <div className={`${classes.scrollWraper} custom-scroll`}>
      {ingredients.length > 0 &&
        ingredients.map((ingredient, idx) => (
          <Ingredient drag ingredient={ingredient} key={ingredient._id} />
        ))}
    </div>
  );
};
ListConstructorIngredients.propTypes = {
  ingredient: PropTypes.array,
};
export default ListConstructorIngredients;
