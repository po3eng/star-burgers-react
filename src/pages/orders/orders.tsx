import { FC } from "react";
import FeedItems from "../../components/feed-items/feed-items";
import classes from "./orders.module.css";
const Orders: FC = () => {
  return (
    <div className={classes.container}>
      <FeedItems type="profile/orders" />
    </div>
  );
};

export default Orders;
