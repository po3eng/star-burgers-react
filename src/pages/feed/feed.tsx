import { FC, useEffect } from "react";
import classes from "./feed.module.css";
import FeedItems from "../../components/feed-items/feed-items";
import OrdersBoard from "../../components/orders-board/orders-board";

import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { wsConnectionClose, wsConnectionStart } from "../../services/actions/feed-web-socket";

const Feed: FC = () => {
  const orders = useAppSelector(store => store.wsFeed.orders);

  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(wsConnectionStart());
    return () => {
      dispatch(wsConnectionClose());
    };
  }, []);

  return (
    <div className={classes.container}>
      <div className={`${classes.col2}`}>
        <p className="text text_type_main-large mt-10 mb-5">Лента заказов</p>
        {orders && <FeedItems orders={orders} type="feed" />}
      </div>
      <div className={`${classes.col2} pt-25`}>
        <OrdersBoard />
      </div>
    </div>
  );
};

export default Feed;
