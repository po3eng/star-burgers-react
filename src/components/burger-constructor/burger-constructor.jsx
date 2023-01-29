import { useState, useMemo } from "react";
import classes from "./burger.constructor.module.css";
import { Button } from "@ya.praktikum/react-developer-burger-ui-components";
import Modal from "../UI/modal/modal";
import Price from "../UI/price/price";
import OrderDetails from "../UI/order-details/order-details";
import Burger from "../UI/burger/burger";
import { useDispatch, useSelector } from "react-redux";
import {
  HIDE_PRELOADER,
  SHOW_PRELOADER,
} from "../../services/actions/preloader";
import { CLEAR_ORDER, setOrder } from "../../services/actions/ingredients";
import EmptyIngredient from "../UI/empty-ingedient/empty-ingredient";
import EmptyBun from "../UI/empty-bun/empty-bun";

const BurgerConstructor = () => {
  const [modal, setModal] = useState(false);
  const [orderNumber, setOrderNumber] = useState(0);

  const ingredients = useSelector(
    (store) => store.ingredients.orderIngredients,
  );
  const dispatch = useDispatch();

  const totalPrice = useMemo(() => {
    return ingredients.reduce(
      (accumulator, item) => accumulator + item.price,
      0,
    );
  });

  const sendOrder = () => {
    dispatch({ type: SHOW_PRELOADER });
    dispatch(setOrder(ingredients.map((item) => item._id)));
    setModal(true);
    dispatch({ type: HIDE_PRELOADER });
  };

  const hideOrderInfo = () => {
    dispatch({ type: CLEAR_ORDER });
    setModal(false);
  };

  return (
    <>
      {modal && (
        <Modal handleCloseModal={() => hideOrderInfo()}>
          <OrderDetails orderNumber={orderNumber} />
        </Modal>
      )}
      <div className="pl-4 pr-4">
        <EmptyBun type="top"></EmptyBun>
        <EmptyIngredient />
        <EmptyBun type="bottom"></EmptyBun>

        <Burger />
        <div className={`${classes.wraper} pt-10`}>
          <Price size="medium" price={totalPrice} />
          <Button
            htmlType="button"
            type="primary"
            size="medium"
            onClick={() => sendOrder()}
          >
            Оформить заказ
          </Button>
        </div>
      </div>
    </>
  );
};

export default BurgerConstructor;
