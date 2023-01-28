import { useEffect } from "react";
import Preloader from "../UI/preloader/preloader";
import classes from "./app.module.css";
import AppHeader from "../app-header/app-header";
import BurgerConstructor from "../burger-constructor/burger-constructor";
import BurgerIngredients from "../burger-ingredients/burger-ingredients";

import { useDispatch, useSelector } from "react-redux";
import {
  HIDE_PRELOADER,
  SHOW_PRELOADER,
} from "../../services/actions/preloader";
import { getIngredients } from "../../services/actions/ingredients";

function App() {
  const preloaderShow = useSelector((store) => store.preloader.preloaderShow);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: SHOW_PRELOADER });
    dispatch(getIngredients());
    dispatch({ type: HIDE_PRELOADER });
  }, []);

  return (
    <>
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
    </>
  );
}

export default App;
