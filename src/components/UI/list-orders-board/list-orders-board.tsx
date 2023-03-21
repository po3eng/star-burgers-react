import { FC } from "react";
import classes from "./list-orders-board.module.css";

type ListOrderBoardProps = {
  type: "done" | "pending" | "created";
  orders: string[];
};

const ListOrderBoard: FC<ListOrderBoardProps> = ({ type, orders }) => {
  let text = "В работе:";
  let styleText = "";

  switch (type) {
    case "done":
      styleText = "text_color_success";
      text = "Готовы:";
      break;
  }

  return (
    <div className={classes.container}>
      <p className={`text text_type_main-medium pb-6`}>{text}</p>
      <div>
        {orders.map(order => (
          <p key={order} className={`text text_type_digits-default ${styleText} pb-2`}>
            {order}
          </p>
        ))}
      </div>
    </div>
  );
};

export default ListOrderBoard;
