import { FC } from "react";
import classes from "./feed.module.css";
import FeedItems from "../../components/feed-items/feed-items";
import OrdersBoard from "../../components/orders-board/orders-board";
const Feed: FC = () => {
  return (
    <div className={classes.container}>
      <div className={`${classes.col2}`}>
        <p className="text text_type_main-large mt-10 mb-5">Лента заказов</p>
        <FeedItems type="feed" />
      </div>
      <div className={`${classes.col2} pt-25`}>
        <OrdersBoard />
      </div>
    </div>
  );
};

export default Feed;
