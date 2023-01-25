import { useState, useEffect, useReducer } from "react";
import Preloader from "../UI/preloader/preloader";
import classes from "./app.module.css";
import AppHeader from "../app-header/app-header";
import BurgerConstructor from "../burger-constructor/burger-constructor";
import BurgerIngredients from "../burger-ingredients/burger-ingredients";
import { BurgerContext } from "../services/burgers-context";
import { PreloaderContext } from "../services/preloader-context";
import {
  PreloaderProvider,
  usePreloader,
  usePreloaderState,
  usePreloaderDispatch,
} from "../services/preloader-provider";
import api from "../../utils/api";

function App() {
  const [ingredients, setIngredients] = useState([]);

  const dispatch = usePreloaderDispatch();
  const preloader = usePreloaderState();
  console.log(preloader);
  useEffect(() => {
    dispatch({ type: "show" });
    const resonse = api.getIngredients();
    resonse
      .then((json) => {
        json.success && setIngredients(json.data);
      })
      .catch((e) => {
        console.error(e);
      })
      .finally(() => {
        dispatch({ type: "hide" });
      });
  }, []);

  return (
    <BurgerContext.Provider value={ingredients}>
      {preloader.isShow && <Preloader></Preloader>}
      <PreloaderProvider>
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
      </PreloaderProvider>
    </BurgerContext.Provider>
  );
}

export default App;
