import classes from "./nutrient.module.css";
import PropTypes from "prop-types";

const Nutrient = ({ nameNutrient, valueNutrient }) => {
  return (
    <div className={classes.item}>
      <p className="text text_type_main-default text_color_inactive">
        {nameNutrient}
      </p>
      <p className="text ttext text_type_digits-default text_color_inactive ">
        {valueNutrient}
      </p>
    </div>
  );
};

Nutrient.propTypes = {
  nameNutrient: PropTypes.string,
  valueNutrient: PropTypes.number,
};

export default Nutrient;
