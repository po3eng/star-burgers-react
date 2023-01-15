import classes from "./ingredient-details.module.css";
import ListNutrients from "../list-nutrients/list-nutrients";
import PropTypes from "prop-types";
import ModalPortal from "../modal/modal";

const IngredientDetails = ({ ingredient, handleCloseModal }) => {
  return (
    <ModalPortal
      header="Детали ингредиента"
      handleCloseModal={handleCloseModal}
    >
      <div className={classes.content}>
        <img
          className={classes.image}
          src={ingredient.image}
          alt={ingredient.name}
        />
        <p className="text text_type_main-medium pt-4">{ingredient.name}</p>
        <ListNutrients ingredient={ingredient}></ListNutrients>
      </div>
    </ModalPortal>
  );
};

IngredientDetails.propTypes = {
  ingredient: PropTypes.object.isRequired,
  handleCloseModal: PropTypes.func,
};
export default IngredientDetails;
