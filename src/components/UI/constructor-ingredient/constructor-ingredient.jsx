import {
  ConstructorElement,
  DragIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import classes from "./constructor-ingredient.module.css";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { deleteOrderIngredient } from "../../../services/actions/ingredients";

const ConstructorIngredient = ({ ingredient, drag }) => {
  const dispatch = useDispatch();

  const handleDelete = (ingredient) => {
    dispatch(deleteOrderIngredient(ingredient));
  };
  
  return (
    <div className={`${classes.wraper} pt-2 pb-2`}>
      {drag && <DragIcon type="primary" />}
      <ConstructorElement
        text={ingredient.name}
        price={ingredient.price}
        thumbnail={ingredient.image}
        extraClass="pl-2"
        handleClose={() => handleDelete(ingredient)}
      />
    </div>
  );
};
ConstructorIngredient.defaultProps = {
  drag: false,
};
ConstructorIngredient.propTypes = {
  drag: PropTypes.bool,
  ingredient: PropTypes.object.isRequired,
};

export default ConstructorIngredient;
