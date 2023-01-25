import { useState, useCallback, useContext, useEffect, useRef } from "react";
import classes from "./burger-ingredients.module.css";
import IngredientsTab from "../UI/tab/tab";
import ListBurgerIngredients from "../UI/list-burger-ingredients/list-burger-ingredients";
import IngredientDetails from "../UI/ingredient-details/ingredient-details";
import PropsTypes from "prop-types";
import Modal from "../UI/modal/modal";
import { TYPES_OF_INGREDIENTS } from "../../utils/constants";
import { BurgerContext } from "../services/burgers-context";

const BurgerIngredients = () => {
  const sectionRef = useRef({});
  const ingredients = useContext(BurgerContext);
  const [modal, setModal] = useState(false);
  const [ingredient, setIngredient] = useState({});
  const [current, setCurrent] = useState("bun");

  const getIngredients = useCallback(
    (type) => {
      return ingredients.filter((c) => c.type === type);
    },
    [ingredients],
  );

  useEffect(() => {
    sectionRef.current[current].scrollIntoView({
      block: "start",
      behavior: "smooth",
    });
  }, [current]);

  const showInfoIngredient = useCallback(
    (ingredient) => {
      setIngredient(ingredient);
      setModal(true);
    },
    [setModal, setIngredient],
  );

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
        <IngredientsTab
          types={TYPES_OF_INGREDIENTS}
          current={current}
          change={setCurrent}
        />
      </section>
      <section className={`${classes.scrollSection} custom-scroll`}>
        {TYPES_OF_INGREDIENTS.map((type) => (
          <section
            className="mt-10"
            key={type.id}
            ref={(el) => (sectionRef.current[type.id] = el)}
          >
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

export default BurgerIngredients;
