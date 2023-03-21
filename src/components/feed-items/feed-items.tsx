import { FC } from "react";
import classes from "./feed-items.module.css";
import FeedItem, { TOrder } from "../UI/feed-item/feed-item";
import { feedsList } from "./feeds";
const FeedItems: FC = () => {
  return (
    <div>
      <p className="text text_type_main-large mt-10 mb-5">Лента заказов</p>
      <section className={`${classes.scrollSection} custom-scroll`}>
        {feedsList.orders.map(order => (
          <FeedItem key={order._id} order={order as TOrder} />
        ))}
      </section>
    </div>
  );
};

export default FeedItems;
