import classes from "./app.module.css";
import AppHeader from "../app-header/app-header";
import BurgerConstructor from "../burger-constructor/burger-constructor";
import BurgerIngredients from "../burger-ingredients/burger-ingredients";
import totalIngredients from "../../utils/totalIngredients";
import { useState, useEffect } from "react";

function App() {
  const HOST = "https://norma.nomoreparties.space";

  const [ingredients, setIngredients] = useState([]);

  useEffect(() => {
    fetch(`${HOST}/api/ingredients`)
      .then((res) => res.json())
      .then((json) => setIngredients(json.data))
      .catch(() => console.log("Ошибка запроса данных"));
  }, []);

  const bun = {
    _id: "60666c42cc7b410027a1a9b1",
    name: "Краторная булка N-200i",
    type: "bun",
    proteins: 80,
    fat: 24,
    carbohydrates: 53,
    calories: 420,
    price: 1255,
    image: "https://code.s3.yandex.net/react/code/bun-02.png",
    image_mobile: "https://code.s3.yandex.net/react/code/bun-02-mobile.png",
    image_large: "https://code.s3.yandex.net/react/code/bun-02-large.png",
    __v: 0,
  };

  return (
    <div className={classes.app}>
      <AppHeader />
      <main className={classes.content}>
        <div className={classes.col2}>
          <BurgerIngredients ingredients={ingredients} />
        </div>
        <div className={`${classes.col2} pt-25`}>
          <BurgerConstructor ingredients={totalIngredients} bun={bun} />
        </div>
      </main>
    </div>
  );
}

export default App;
