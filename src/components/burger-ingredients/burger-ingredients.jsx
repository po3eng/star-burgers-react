import { useState, useCallback, useEffect, useRef } from "react";
import classes from "./burger-ingredients.module.css";
import ListBurgerIngredients from "../UI/list-burger-ingredients/list-burger-ingredients";
import IngredientDetails from "../UI/ingredient-details/ingredient-details";
import Modal from "../UI/modal/modal";
import { useDispatch, useSelector } from "react-redux";
import {
  CLEAR_CURRENT_INGREDIENT,
  setCurrentIngredient,
} from "../../services/actions/ingredients";
import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import { InView } from "react-intersection-observer";
import { useNavigate } from "react-router-dom";

const BurgerIngredients = () => {
  const { ingredients, currentIngredient } = useSelector(
    (store) => store.ingredients,
  );
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const bunRef = useRef(null);
  const sauceRef = useRef(null);
  const mainRef = useRef(null);

  const [current, setCurrent] = useState("bun");

  const hideInfoIngredient = useCallback(() => {
    dispatch({ type: CLEAR_CURRENT_INGREDIENT });
  }, [dispatch]);

  const showInfoIngredient = useCallback(
    (ingredient) => {
      navigate(`/ingredients/${ingredient._id}`);
    },
    [navigate],
  );

  const getIngredients = useCallback(
    (type) => {
      return ingredients.filter((c) => c.type === type);
    },
    [ingredients],
  );

  const view = (event, type) => {
    event && setCurrent(type);
  };

  useEffect(() => {
    switch (current) {
      case "bun":
        bunRef.current.scrollIntoView({
          block: "start",
          inline: "start",
          behavior: "smooth",
        });

        break;
      case "sauce":
        sauceRef.current.scrollIntoView({
          block: "start",
          inline: "start",
          behavior: "smooth",
        });
        break;
      case "main":
        mainRef.current.scrollIntoView({
          block: "start",
          inline: "start",
          behavior: "smooth",
        });
        break;
    }
  }, [current]);

  return (
    <>
      {currentIngredient && (
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
        <section ref={bunRef}>
          <InView threshold="0.8" onChange={(e) => view(e, "bun")}>
            <ListBurgerIngredients
              type="bun"
              title="Булки"
              onClick={showInfoIngredient}
              ingredients={getIngredients("bun")}
            />
          </InView>
        </section>
        <section ref={sauceRef}>
          <InView threshold="0.8" onChange={(e) => view(e, "sauce")}>
            <ListBurgerIngredients
              type="sauce"
              title="Соусы"
              onClick={showInfoIngredient}
              ingredients={getIngredients("sauce")}
            />
          </InView>
        </section>
        <section ref={mainRef}>
          <InView threshold="0.2" onChange={(e) => view(e, "main")}>
            <ListBurgerIngredients
              type="main"
              title="Начинки"
              onClick={showInfoIngredient}
              ingredients={getIngredients("main")}
            />
          </InView>
        </section>
      </section>
    </>
  );
};

export default BurgerIngredients;
