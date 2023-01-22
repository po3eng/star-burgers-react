import { useState, useCallback } from "react";
import classes from "./burger-ingredients.module.css";
import IngredientsTab from "../UI/tab/tab";
import ListBurgerIngredients from "../UI/list-burger-ingredients/list-burger-ingredients";
import IngredientDetails from "../UI/ingredient-details/ingredient-details";
import PropsTypes from "prop-types";
import Modal from "../UI/modal/modal";
const BurgerIngredients = ({ ingredients }) => {
  const [modal, setModal] = useState(false);
  const [ingredient, setIngredient] = useState({});
  const [current, setCurrent] = useState("Булки");

  const getIngredients = useCallback(
    (type) => {
      return ingredients.filter((c) => c.type === type);
    },
    [ingredients],
  );

  const showInfoIngredient = useCallback(
    (ingredient) => {
      setIngredient(ingredient);
      setModal(true);
    },
    [setModal, setIngredient],
  );

  const TYPES = [
    { id: "bun", name: "Булки" },
    { id: "sauce", name: "Соусы" },
    { id: "main", name: "Начинки" },
  ];

  return (
    <>
      {modal && (
        <Modal
          header="Детали ингредиента"
          handleCloseModal={() => setModal(false)}
        >
          <IngredientDetails ingredient={ingredient} />
        </Modal>
      )}
      
      <section>
        <p className="text text_type_main-large mt-10 mb-5">Собери бургер</p>
      </section>
      <section>
        <IngredientsTab types={TYPES} current={current} change={setCurrent} />
      </section>
      <section className={`${classes.scrollSection} custom-scroll`}>
        {TYPES.map((type) => (
          <section className="mt-10" key={type.id}>
            <ListBurgerIngredients
              type={type}
              onClick={(i) => {
                showInfoIngredient(i);
              }}
              ingredients={getIngredients(type.id)}
            />
          </section>
        ))}
      </section>
    </>
  );
};

BurgerIngredients.propsTypes = {
  ingredients: PropsTypes.array.isRequired,
};
export default BurgerIngredients;
