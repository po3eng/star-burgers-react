import { useState, useCallback, useEffect, useRef } from "react";
import classes from "./burger-ingredients.module.css";
import ListBurgerIngredients from "../UI/list-burger-ingredients/list-burger-ingredients";
import IngredientDetails from "../UI/ingredient-details/ingredient-details";
import Modal from "../UI/modal/modal";
import { useDispatch, useSelector } from "react-redux";
import {
  CLEAR_CURRENT_INGREDIENT,
  SET_CURRENT_INGREDIENT,
} from "../../services/actions/ingredients";
import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import { InView } from "react-intersection-observer";

const BurgerIngredients = () => {
  const ingredients  = useSelector((store) => store.ingredients.ingredients);
  const dispatch = useDispatch();
  const sectionRef = useRef(null);
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

  const setRef = (el) => {
    sectionRef.current["bun"] = el;
  };
  const view = (event, type) => {
    event && setCurrent(type);
  };

  useEffect(() => {
    sectionRef.current.scrollIntoView({
      block: "start",
      inline: "start",
      behavior: "smooth",
    });
  }, [current]);

  return (
    <>
      {modal && (
        <Modal
          header="Детали ингредиента"
          forwardRef
          handleCloseModal={hideInfoIngredient}
        >
          <IngredientDetails />
        </Modal>
      )}

      <p className="text text_type_main-large mt-10 mb-5">Собери бургер</p>
      <section className={classes.tabs}>
        <Tab value="bun" active={current === "bun"} onClick={setCurrent}>
          Булки
        </Tab>
        <Tab value="sauce" active={current === "sauce"} onClick={setCurrent}>
          Соусы
        </Tab>
        <Tab value="main" active={current === "main"} onClick={setCurrent}>
          Начинки
        </Tab>
      </section>
      <section className={`${classes.scrollSection} custom-scroll`}>
        <section ref={sectionRef}>
          <InView threshold="0.8" onChange={(e) => view(e, "bun")}>
            <ListBurgerIngredients
              type="bun"
              title="Булки"
              onClick={showInfoIngredient}
              ingredients={getIngredients("bun")}
            />
          </InView>
        </section>
        <InView threshold="0.8" onChange={(e) => view(e, "sauce")}>
          <ListBurgerIngredients
            type="sauce"
            title="Соусы"
            onClick={showInfoIngredient}
            ingredients={getIngredients("sauce")}
          />
        </InView>
        <InView threshold="0.2" onChange={(e) => view(e, "main")}>
          <ListBurgerIngredients
            type="main"
            title="Начинки"
            onClick={showInfoIngredient}
            ingredients={getIngredients("main")}
          />
        </InView>
      </section>
    </>
  );
};

export default BurgerIngredients;
