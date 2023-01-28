import { useState, useEffect, useReducer } from "react";
import Preloader from "../UI/preloader/preloader";
import classes from "./app.module.css";
import AppHeader from "../app-header/app-header";
import BurgerConstructor from "../burger-constructor/burger-constructor";
import BurgerIngredients from "../burger-ingredients/burger-ingredients";
import { BurgerContext } from "../services/burgers-context";
import { PreloaderContext } from "../services/preloader-context";
import api from "../../utils/api";
import { useDispatch, useSelector } from "react-redux";
import {
  HIDE_PRELOADER,
  SHOW_PRELOADER,
} from "../../services/actions/preloader";

function App() {
  const [ingredients, setIngredients] = useState([]);

  const preloaderShow = useSelector((store) => store.preloader.preloaderShow);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: SHOW_PRELOADER });
    const resonse = api.getIngredients();
    resonse
      .then((json) => {
        json.success && setIngredients(json.data);
      })
      .catch(console.error)
      .finally(() => {
        dispatch({ type: HIDE_PRELOADER });
      });
  }, []);

  return (
    <BurgerContext.Provider value={ingredients}>
      <PreloaderContext.Provider value={dispatch}>
        {preloaderShow}
        {preloaderShow && <Preloader></Preloader>}
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
