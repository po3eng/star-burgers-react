import { FC } from "react";
import ListOrderBoard from "../UI/list-orders-board/list-orders-board";
import classes from "./orders-board.module.css";
import { TOrder } from "../UI/feed-item/feed-item";

type TOrdersBoardProps = {
  orders?: TOrder[];
};

const OrdersBoard: FC<TOrdersBoardProps> = ({ orders }) => {
  return (
    <div className={classes.container}>
      <div className={classes.boards_container}>
        <ListOrderBoard type="done" orders={["1234", "123123", "12312123", "12312313", "12123123", "999999"]} />
        <ListOrderBoard type="pending" orders={["1234", "123123", "12312123", "12312313", "12123123", "999999"]} />
      </div>
      <p className={`text text_type_main-medium pt-15 `}>Выполнено за все время:</p>
      <p className={` ${classes.glow} text text_type_digits-large`}>
        {" "}
        {"123450".replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, "$1 ")}
      </p>
      <p className="text text_type_main-medium pt-15">Выполнено за сегодня:</p>
      <p className={` ${classes.glow} text text_type_digits-large`}>
        {"1890".replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, "$1 ")}
      </p>
    </div>
  );
};
export default OrdersBoard;
