import { useEffect } from "react";
import Preloader from "../UI/preloader/preloader";
import classes from "./app.module.css";

import AppHeader from "../app-header/app-header";
import { HTML5Backend } from "react-dnd-html5-backend";
import { DndProvider } from "react-dnd";

import { useDispatch, useSelector } from "react-redux";
import { getIngredients } from "../../services/actions/ingredients";
import { BrowserRouter } from "react-router-dom";
import BurgerRouter from "../burger-router/burger-router";
function App() {
  const preloaderShow = useSelector((store) => store.preloader.preloaderShow);
  const dispatch = useDispatch();

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
}

export default App;
