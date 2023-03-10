import { useMemo, FC } from "react";
import { clearOrderNumber, setOrder } from "../../services/actions/order";

import classes from "./burger.constructor.module.css";
import { Button } from "@ya.praktikum/react-developer-burger-ui-components";
import Modal from "../UI/modal/modal";
import Price from "../UI/price/price";
import OrderDetails from "../UI/order-details/order-details";

import Bun from "../UI/bun/bun";
import ListConstructorIngredients from "../UI/list-constructor-ingredients/list-constructor-ingredients";
import { getCookie } from "../../utils/cookies";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";

const BurgerConstructor: FC = () => {
  const order = useAppSelector((store) => store.order.order);
  const { constructorIngredients, bun } = useAppSelector(
    (store) => store.constr,
  );
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const totalOrder = useMemo(
    () => [bun, ...constructorIngredients, bun],
    [bun, constructorIngredients],
  );

  const totalPrice = useMemo(() => {
    return totalOrder.reduce(
      (accumulator, item) => accumulator + item?.price || 0,
      0,
    );
  }, [totalOrder]);

  const sendOrder = () => {
    const token = getCookie("refreshToken");
    if (!token) {
      navigate("/login", { replace: true });
    } else {
      if (totalOrder.length > 2 && bun) {
        dispatch(setOrder(totalOrder));
      }
    }
  };

  const hideOrderInfo = () => {
    dispatch(clearOrderNumber());
  };

  return (
    <>
      {order && (
        <Modal handleCloseModal={hideOrderInfo}>
          <OrderDetails />
        </Modal>
      )}
      <div className="pl-4 pr-4">
        <Bun type="top" />
        <ListConstructorIngredients />
        <Bun type="bottom" />
        <div className={`${classes.wraper} pt-10 pr-10`}>
          <Price size="medium" price={totalPrice} />
          <Button
            htmlType="button"
            type="primary"
            size="medium"
            onClick={sendOrder}
          >
            ???????????????? ??????????
          </Button>
        </div>
      </div>
    </>
  );
};

export default BurgerConstructor;
