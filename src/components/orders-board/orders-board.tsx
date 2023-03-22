import { FC, useCallback } from "react";
import ListOrderBoard from "../UI/list-orders-board/list-orders-board";
import classes from "./orders-board.module.css";
import { useAppSelector } from "../../hooks/redux";

const OrdersBoard: FC = () => {
  const { total, totalToday, orders } = useAppSelector(store => store.wsFeed);
  const getOrders = useCallback(
    (type: string) => {
      return (
        orders
          ?.filter(order => order.status === type)
          .map(order => order.number)
          .slice(0, 5) || []
      );
    },
    [orders],
  );
  return (
    <div className={classes.container}>
      <div className={classes.boards_container}>
        <ListOrderBoard type="done" orders={getOrders("done")} />
        <ListOrderBoard type="pending" orders={getOrders("pending")} />
      </div>
      <p className={`text text_type_main-medium pt-15 `}>Выполнено за все время:</p>
      <p className={` ${classes.glow} text text_type_digits-large`}>
        {`${total}`.replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, "$1 ")}
      </p>
      <p className="text text_type_main-medium pt-15">Выполнено за сегодня:</p>
      <p className={` ${classes.glow} text text_type_digits-large`}>
        {`${totalToday}`.replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, "$1 ")}
      </p>
    </div>
  );
};
export default OrdersBoard;
