import { FC, useEffect } from "react";
import Preloader from "../UI/preloader/preloader";
import classes from "./app.module.css";

import AppHeader from "../app-header/app-header";
import { HTML5Backend } from "react-dnd-html5-backend";
import { DndProvider } from "react-dnd";
import { getIngredients } from "../../services/actions/ingredients";
import { BrowserRouter } from "react-router-dom";
import BurgerRouter from "../burger-router/burger-router";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";

const App: FC = () => {
  const preloaderShow = useAppSelector(
    (store) => store.preloader.preloaderShow,
  );
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getIngredients());
  }, []);

  return (
    <>
      {preloaderShow && <Preloader />}
      <BrowserRouter>
        <div className={classes.app}>
          <AppHeader />
          <main className={classes.content}>
            <DndProvider backend={HTML5Backend}>
              <BurgerRouter />
            </DndProvider>
          </main>
        </div>
      </BrowserRouter>
    </>
  );
};

export default App;
