import { FC } from "react";
import classes from "./nutrient.module.css";
type TNutrient = {
  nameNutrient: string;
  valueNutrient: number;
};

const Nutrient: FC<TNutrient> = ({ nameNutrient, valueNutrient }) => {
  return (
    <div className={classes.item}>
      <p className="text text_type_main-default text_color_inactive">{nameNutrient}</p>
      <p className="text ttext text_type_digits-default text_color_inactive ">{valueNutrient}</p>
    </div>
  );
};

export default Nutrient;
