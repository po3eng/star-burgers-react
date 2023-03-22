import { FC } from "react";
import classes from "./feed-items.module.css";
import FeedItem, { TOrder } from "../UI/feed-item/feed-item";

type TFeedItemsProps = {
  type: "feed" | "profile/orders";
  orders: Exclude<TOrder,'undefined'>[];
};
const FeedItems: FC<TFeedItemsProps> = ({ type, orders }) => {
  return (
    <section className={`${classes.scrollSection} custom-scroll`}>
      {orders.map(order => (
        <FeedItem type={type} key={order._id} order={order as TOrder} />
      ))}
    </section>
  );
};

export default FeedItems;
