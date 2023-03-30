import { useState, useCallback, useEffect, useRef, FC } from "react";
import classes from "./burger-ingredients.module.css";
import ListBurgerIngredients from "../UI/list-burger-ingredients/list-burger-ingredients";
import { TIngredient } from "../UI/ingredient-details/ingredient-details";
import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import { InView } from "react-intersection-observer";
import { useLocation, useNavigate } from "react-router-dom";
import { useAppSelector } from "../../hooks/redux";

const BurgerIngredients: FC = () => {
  const location = useLocation();

  const { ingredients } = useAppSelector(store => store.ingredients);
  const navigate = useNavigate();
  const bunRef = useRef<HTMLDivElement>(null);
  const sauceRef = useRef<HTMLDivElement>(null);
  const mainRef = useRef<HTMLDivElement>(null);

  const [current, setCurrent] = useState("bun");

  const showInfoIngredient = useCallback(
    (ingredient: TIngredient) => {
      navigate(`/ingredients/${ingredient._id}`, {
        state: { background: location },
      });
    },
    [navigate,location],
  );

  const getIngredients = useCallback(
    (type: string) => {
      return ingredients.filter((c: TIngredient) => c.type === type);
    },
    [ingredients],
  );

  const view = (event: boolean, type: string) => {
    event && setCurrent(type);
  };

  useEffect(() => {
    switch (current) {
      case "bun":
        bunRef.current?.scrollIntoView({
          block: "start",
          inline: "start",
          behavior: "smooth",
        });
        break;
      case "sauce":
        sauceRef.current?.scrollIntoView({
          block: "start",
          inline: "start",
          behavior: "smooth",
        });
        break;
      case "main":
        mainRef.current?.scrollIntoView({
          block: "start",
          inline: "start",
          behavior: "smooth",
        });
        break;
      default:
        break;
    }
  }, [current]);

  return (
    <>
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
          <InView threshold={0.8} onChange={e => view(e, "bun")}>
            <ListBurgerIngredients
              type="bun"
              title="Булки"
              onClick={showInfoIngredient}
              ingredients={getIngredients("bun")}
            />
          </InView>
        </section>
        <section ref={sauceRef}>
          <InView threshold={0.8} onChange={e => view(e, "sauce")}>
            <ListBurgerIngredients
              type="sauce"
              title="Соусы"
              onClick={showInfoIngredient}
              ingredients={getIngredients("sauce")}
            />
          </InView>
        </section>
        <section ref={mainRef}>
          <InView threshold={0.2} onChange={e => view(e, "main")}>
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
