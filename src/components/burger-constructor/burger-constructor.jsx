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

const BurgerConstructor = () => {
  const [modal, setModal] = useState(false);
  const [orderNumber, setOrderNumber] = useState(0);

  const { orderIngredients, bun } = useSelector((store) => store.ingredients);
  const dispatch = useDispatch();
  const totalOrder = useMemo(() => [...orderIngredients, bun, bun]);
  
  const totalPrice = useMemo(() => {
    return totalOrder.reduce(
      (accumulator, item) => accumulator + item?.price || 0,
      0,
    );
  });

  const sendOrder = () => {
    // FIXME: сделать асинхронным
    dispatch({ type: SHOW_PRELOADER });
    dispatch(setOrder(totalOrder.map((item) => item._id)));
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
