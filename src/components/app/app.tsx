import { FC, useEffect } from "react";
import Preloader from "../UI/preloader/preloader";
import classes from "./app.module.css";

import AppHeader from "../app-header/app-header";
import { HTML5Backend } from "react-dnd-html5-backend";
import { DndProvider } from "react-dnd";
import { getIngredientsThunk } from "../../services/actions/ingredients";
import { HashRouter } from "react-router-dom";
import BurgerRouter from "../burger-router/burger-router";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";

const App: FC = () => {
  const preloaderShow = useAppSelector(store => store.preloader.preloaderShow);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getIngredientsThunk());
  }, []);

  return (
    <>
      {preloaderShow && <Preloader />}
      <HashRouter>
        <div className={classes.app}>
          <AppHeader />
          <main className={classes.content}>
            <DndProvider backend={HTML5Backend}>
              <BurgerRouter />
            </DndProvider>
          </main>
        </div>
      </HashRouter>
    </>
  );
};

export default App;
