import { FC, useCallback, useMemo } from "react";
import classes from "./feed-item.module.css";
import { FormattedDate } from "@ya.praktikum/react-developer-burger-ui-components";
import ListOrderIngredients from "../list-order-ingredients/list-order-ingredients";
import { useAppSelector } from "../../../hooks/redux";
import { TIngredient } from "../ingredient-details/ingredient-details";
import { useLocation, useNavigate } from "react-router-dom";
import Status from "../status";
export type TOrder = {
  _id: string;
  ingredients: TIngredient[] | string[];
  status?: "done" | "pending" | "created";
  owner?: string;
  name: string;
  createdAt: string;
  updatedAt: string;
  number: number;
  price?: number;
};

type TFeedItemProps = {
  order: TOrder;
  type: "feed" | "profile/orders";
};

const FeedItem: FC<TFeedItemProps> = ({ type, order }) => {
  const ingredients = useAppSelector(store => store.ingredients.ingredients);
  const navigate = useNavigate();
  const location = useLocation();

  const filteredIngredients = useMemo(() => {
    return ingredients.filter(item_a => order.ingredients.some(item_b => item_a._id === item_b));
  }, [ingredients, order]);

  const totalPrice = useMemo(() => {
    return filteredIngredients.reduce((accumulator, item) => {
      if (!item) {
        return accumulator;
      }
      if (item.type === "bun") {
        return accumulator + item.price * 2;
      }
      return accumulator + item.price;
    }, 0);
  }, [filteredIngredients]);

  const showInfoIngredient = useCallback(() => {
    navigate(`/${type}/${order.number}`, {
      state: { background: location },
    });
  }, [navigate, order,location,type]);

  return (
    <div className={classes.card} onClick={showInfoIngredient}>
      <div className={classes.title}>
        <p className="text text_type_digits-default"> #{order.number}</p>
        <FormattedDate className="text text_type_main-default text_color_inactive" date={new Date(order.createdAt)} />
      </div>
      <div className={classes.name}>
        <p className="text text_type_main-default"> {order.name}</p>
        {order.status && (
          <div className="pt-2">
            <Status status={order.status}></Status>
          </div>
        )}
      </div>

      <ListOrderIngredients price={totalPrice} orderIngredients={filteredIngredients} />
    </div>
  );
};
export default FeedItem;
