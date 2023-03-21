import { FC } from "react";
import classes from "./feed-items.module.css";
import FeedItem, { TOrder } from "../UI/feed-item/feed-item";
import { feedsList } from "./feeds";

type TFeedItemsProps = {
  type: "feed" | "profile/orders";
};
const FeedItems: FC<TFeedItemsProps> = ({ type }) => {
  return (
    <section className={`${classes.scrollSection} custom-scroll`}>
      {feedsList.orders.map(order => (
        <FeedItem type={type} key={order._id} order={order as TOrder} />
      ))}
    </section>
  );
};

export default FeedItems;
