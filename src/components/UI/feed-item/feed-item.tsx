import { FC } from "react";
import classes from "./feed-item.module.css";
import { FormattedDate } from "@ya.praktikum/react-developer-burger-ui-components";
import ListOrderIngredients from "../list-order-ingredients/list-order-ingredients";
type TOrder = {
  _id: string;
  ingredients: string[];
  status: string;
  name: string;
  createdAt: string;
  updatedAt: string;
  number: number;
};

type TFeedItemProps = {
  order: TOrder;
};

const FeedItem: FC<TFeedItemProps> = ({ order }) => {
  return (
    <div className={classes.card}>
      <div className={classes.title}>
        <p className="text text_type_digits-default"> #{order.number}</p>
        <FormattedDate className="text text_type_main-default text_color_inactive" date={new Date(order.createdAt)} />
      </div>
      <div className={classes.name}>
        <p className="text text_type_main-default"> {order.name}</p>
      </div>
      <ListOrderIngredients orderIngredients={order.ingredients} />
    </div>
  );
};
export default FeedItem;
