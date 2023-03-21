import { FC } from "react";
import BurgerConstructor from "../../components/burger-constructor/burger-constructor";
import classes from "../../components/app/app.module.css";
import FeedItems from "../../components/feed-items/feed-items";
import OrdersBoard from "../../components/orders-board/orders-board";
const Feed: FC = () => {
  return (
    <div className={classes.home}>

      <div className={classes.col2}>
        <FeedItems />
      </div>
      <div className={`${classes.col2} pt-25`}>
        <OrdersBoard />
      </div>
    </div>
  );
};

export default Feed;
