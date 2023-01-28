import { useState, useCallback, useEffect, useRef } from "react";
import classes from "./burger-ingredients.module.css";
import IngredientsTab from "../UI/tab/tab";
import ListBurgerIngredients from "../UI/list-burger-ingredients/list-burger-ingredients";
import IngredientDetails from "../UI/ingredient-details/ingredient-details";
import Modal from "../UI/modal/modal";
import { TYPES_OF_INGREDIENTS } from "../../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import {
  CLEAR_CURRENT_INGREDIENT,
  SET_CURRENT_INGREDIENT,
} from "../../services/actions/ingredients";

const BurgerIngredients = () => {
  const { ingredients } = useSelector((store) => store.ingredients);
  const dispatch = useDispatch();

  const sectionRef = useRef({});
  const [modal, setModal] = useState(false);
  const [current, setCurrent] = useState("bun");

  const hideInfoIngredient = useCallback(() => {
    setModal(false);
    dispatch({ type: CLEAR_CURRENT_INGREDIENT });
  }, [setModal, dispatch]);

  const showInfoIngredient = useCallback(
    (ingredient) => {
      dispatch({ type: SET_CURRENT_INGREDIENT, ingredient });
      setModal(true);
    },
    [setModal, dispatch],
  );

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

  return (
    <>
      {modal && (
        <Modal
          header="Детали ингредиента"
          handleCloseModal={() => hideInfoIngredient()}
        >
          <IngredientDetails />
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
