import { useState, useContext, useMemo } from "react";
import { BurgerContext } from "../services/burgers-context";
import { PreloaderContext } from "../services/preloader-context";
import classes from "./burger.constructor.module.css";
import { Button } from "@ya.praktikum/react-developer-burger-ui-components";
import Modal from "../UI/modal/modal";
import Price from "../UI/price/price";
import OrderDetails from "../UI/order-details/order-details";
import Burger from "../UI/burger/burger";
import api from "../../utils/api";

const BurgerConstructor = () => {
  const [modal, setModal] = useState(false);
  const [orderNumber, setOrderNumber] = useState(0);

  const ingredients = useContext(BurgerContext);
  const dispatch = useContext(PreloaderContext);

  const totalPrice = useMemo(() => {
    return ingredients.reduce(
      (accumulator, item) => accumulator + item.price,
      0,
    );
  });

  const sendOrder = () => {
    dispatch({ type: "show" });
    const resonse = api.setOrder(ingredients.map((item) => item._id));
    resonse
      .then((json) => {
        if (json.success) {
          setOrderNumber(json.order.number);
          setModal(true);
        }
      })
      .catch(console.error)
      .finally(dispatch({ type: "hide" }));
  };

  return (
    <>
      {modal && (
        <Modal handleCloseModal={() => setModal(false)}>
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
