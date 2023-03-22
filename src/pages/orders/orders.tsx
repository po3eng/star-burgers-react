import { FC, useEffect } from "react";
import FeedItems from "../../components/feed-items/feed-items";
import classes from "./orders.module.css";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { wsOrdersConnectionStart, wsOrdersConnectionClose } from "../../services/actions/orders-web-socket";
import { getLocalStorage } from "../../utils/local-storage";
const Orders: FC = () => {
  const dispatch = useAppDispatch();
  const orders = useAppSelector(store => store.wsOrders.orders);
  useEffect(() => {
    dispatch(wsOrdersConnectionStart(`?token=${getLocalStorage("accessToken")}`));
    return () => {
      dispatch(wsOrdersConnectionClose());
    };
  }, [dispatch]);
  return <div className={classes.container}>{orders && <FeedItems orders={orders} type="profile/orders" />}</div>;
};

export default Orders;
