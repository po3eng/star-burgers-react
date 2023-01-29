import styles from "./empty-ingredient.module.css";

const EmptyIngredient = () => {
  return (
    <div className={`${styles.empty_text} mt-4 mb-4  constructor-element`}>
      <p className="text text_type_main-default text_color_inactive">Выберите начинку</p>
    </div>
  );
};

export default EmptyIngredient;
