import { FC, useEffect } from "react";
import FeedItems from "../../components/feed-items/feed-items";
import classes from "./orders.module.css";
import { useAppDispatch } from "../../hooks/redux";
import { wsOrdersConnectionStart, wsOrdersConnectionClose } from "../../services/actions/orders-web-socket";
const Orders: FC = () => {
  const dispatch = useAppDispatch();

  useEffect((): any => {
    dispatch(wsOrdersConnectionStart());
    return () => dispatch(wsOrdersConnectionClose());
  }, [dispatch]);
  return (
    <div className={classes.container}>
      <FeedItems type="profile/orders" />
    </div>
  );
};

export default Orders;
