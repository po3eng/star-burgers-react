import BurgerIngredient from "../burger-ingredient/burger-ingredient";
import classes from "./list-burger-ingredients.module.css";
import PropTypes from "prop-types";

const ListBurgerIngredients = ({ type, ingredients, onClick }) => {
  return (
    <>
      <p id={type.id} className="text text_type_main-medium">
        {type.name}
      </p>
      <div className={` ${classes.wraper} pt-6 ml-4`}>
        {ingredients.map((item, idx) => (
          <BurgerIngredient
            ingredient={item}
            key={item._id}
            onClick={() => {
              onClick(item);
            }}
          />
        ))}
      </div>
    </>
  );
};

ListBurgerIngredients.propTypes = {
  type: PropTypes.object.isRequired,
  ingredients: PropTypes.array.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default ListBurgerIngredients;
