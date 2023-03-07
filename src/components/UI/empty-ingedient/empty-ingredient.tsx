import { FC } from "react";
import styles from "./empty-ingredient.module.css";

const EmptyIngredient:FC = () => {
  return (
    <div className={`${styles.empty_text} mt-2 mb-2  ml-6 constructor-element`}>
      <p className="text text_type_main-default text_color_inactive">Выберите начинку</p>
    </div>
  );
};

export default EmptyIngredient;
