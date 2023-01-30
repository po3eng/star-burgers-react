import { useEffect } from "react";
import Preloader from "../UI/preloader/preloader";
import classes from "./app.module.css";
import AppHeader from "../app-header/app-header";
import BurgerConstructor from "../burger-constructor/burger-constructor";
import BurgerIngredients from "../burger-ingredients/burger-ingredients";

import { HTML5Backend } from "react-dnd-html5-backend";
import { DndProvider } from "react-dnd";

import { useDispatch, useSelector } from "react-redux";
import { getIngredients } from "../../services/actions/ingredients";

function App() {
  
  const preloaderShow = useSelector((store) => store.preloader.preloaderShow);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getIngredients());
  }, []);

  return (
    <>
      {preloaderShow && <Preloader />}
      <div className={classes.app}>
        <AppHeader />
        <main className={classes.content}>
          <DndProvider backend={HTML5Backend}>
            <div className={classes.col2}>
              <BurgerIngredients />
            </div>
            <div className={`${classes.col2} pt-25`}>
              <BurgerConstructor />
            </div>
          </DndProvider>
        </main>
      </div>
    </>
  );
}

export default App;
