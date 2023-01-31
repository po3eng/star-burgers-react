import BurgerIngredient from "../burger-ingredient/burger-ingredient";
import classes from "./list-burger-ingredients.module.css";
import PropTypes from "prop-types";

const ListBurgerIngredients = ({ type, ingredients, title, onClick }) => {
  return (
    <div className="mt-10">
      <p id={type} className="text text_type_main-medium">
        {title}
      </p>
      <div className={` ${classes.wraper} pt-6 ml-4`}>
        {ingredients.map((item) => (
          <BurgerIngredient
            ingredient={item}
            key={item._id}
            onClick={() => {
              onClick(item);
            }}
          />
        ))}
      </div>
    </div>
  );
};

ListBurgerIngredients.propTypes = {
  type: PropTypes.string.isRequired,
  ingredients: PropTypes.array.isRequired,
  onClick: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
};

export default ListBurgerIngredients;
