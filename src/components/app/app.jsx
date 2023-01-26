import { useState, useEffect, useReducer } from "react";
import Preloader from "../UI/preloader/preloader";
import classes from "./app.module.css";
import AppHeader from "../app-header/app-header";
import BurgerConstructor from "../burger-constructor/burger-constructor";
import BurgerIngredients from "../burger-ingredients/burger-ingredients";
import { BurgerContext } from "../services/burgers-context";
import { PreloaderContext } from "../services/preloader-context";
import api from "../../utils/api";

function App() {
  const [ingredients, setIngredients] = useState([]);

  const preloaderReducer = (state, action) => {
    switch (action.type) {
      case "show": {
        return { isShow: true };
      }
      case "hide": {
        return { isShow: false };
      }
      default: {
        throw new Error(`Unhandled action type: ${action.type}`);
      }
    }
  };

  const [preloader, dispatch] = useReducer(preloaderReducer, { isShow: false });

  useEffect(() => {
    dispatch({ type: "show" });
    const resonse = api.getIngredients();
    resonse
      .then((json) => {
        json.success && setIngredients(json.data);
      })
      .catch(console.error)
      .finally(() => {
        dispatch({ type: "hide" });
      });
  }, []);

  return (
    <BurgerContext.Provider value={ingredients}>
      <PreloaderContext.Provider value={dispatch}>
        {preloader.isShow && <Preloader></Preloader>}
        <div className={classes.app}>
          <AppHeader />
          <main className={classes.content}>
            <div className={classes.col2}>
              <BurgerIngredients />
            </div>
            <div className={`${classes.col2} pt-25`}>
              <BurgerConstructor />
            </div>
          </main>
        </div>
      </PreloaderContext.Provider>
    </BurgerContext.Provider>
  );
}

export default App;
