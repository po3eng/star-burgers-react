import { useState, useEffect } from "react";

import classes from "./app.module.css";
import AppHeader from "../app-header/app-header";
import BurgerConstructor from "../burger-constructor/burger-constructor";
import BurgerIngredients from "../burger-ingredients/burger-ingredients";
import { OrederContex } from "../services/BurgersContext";
import api from "../../utils/api";
import { ORDER_INGREDIENTS } from "../../utils/constants";

function App() {
  const [ingredients, setIngredients] = useState([]);
  const orderState = useState(ORDER_INGREDIENTS);

  useEffect(() => {
    const res = api.getIngredients();
    res.then((json) => {
      setIngredients(json);
    });
  }, []);
  
  return (
    <div className={classes.app}>
      <AppHeader />
      <main className={classes.content}>
        <div className={classes.col2}>
          <BurgerIngredients ingredients={ingredients} />
        </div>
        <div className={`${classes.col2} pt-25`}>
          <OrederContex.Provider value={orderState}>
            <BurgerConstructor />
          </OrederContex.Provider>
        </div>
      </main>
    </div>
  );
}

export default App;
