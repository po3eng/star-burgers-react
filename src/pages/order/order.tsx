import { FC, useCallback, useEffect, useMemo, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { getOrderThunk } from "../../services/actions/order";
import { useParams } from "react-router-dom";
import classes from "./order.module.css";
import Status from "../../components/UI/status";
import { FormattedDate } from "@ya.praktikum/react-developer-burger-ui-components";
import { TIngredient } from "../../components/UI/ingredient-details/ingredient-details";
import Price from "../../components/UI/price/price";
import OrderItem from "../../components/UI/order-item/order-item";

const Order: FC = () => {
  const dispatch = useAppDispatch();
  const currentOrder = useAppSelector(store => store.order.currentOrder);
  const ingredients = useAppSelector(store => store.ingredients.ingredients);
  const orderNumber = useParams();

  useEffect(() => {
    dispatch(getOrderThunk(orderNumber.id));
  }, []);

  const [totalPrice, setTotalPrice] = useState(0);
  const [filteredIngredients, setFilteredIngredients] = useState<TIngredient[]>([]);

  const getTotalPrice = useCallback((ingredients: TIngredient[]) => {
    return ingredients.reduce((accumulator, item) => {
      if (!item) {
        return accumulator;
      }
      if (item.type === "bun") {
        return accumulator + item.price * 2;
      }
      return accumulator + item.price;
    }, 0);
  }, []);

  const ingredientCounters = useMemo(() => {
    const countersSet: { [x: string]: number } = {};
    if (currentOrder) {
      currentOrder.ingredients.forEach(item_b => {
        if (typeof item_b === "string") {
          const findedIngredient = ingredients.find(item_a => item_a._id === item_b);

          if (!countersSet[item_b]) {
            countersSet[item_b] = 0;
          }
          countersSet[item_b]++;
          if (findedIngredient?.type === "bun") {
            countersSet[item_b] = 2;
          }
        }
      });
    }
    return countersSet;
  }, [currentOrder, ingredients]);

  useEffect(() => {
    if (currentOrder) {
      const orderIgredients = ingredients.filter(item_a =>
        currentOrder.ingredients.some(item_b => item_a._id === item_b),
      );
      setFilteredIngredients(orderIgredients);
      setTotalPrice(getTotalPrice(orderIgredients));
    }
  }, [currentOrder, ingredients, getTotalPrice]);

  return (
    currentOrder && (
      <div className={classes.warpper}>
        <div className={classes.container}>
          <div className={classes.order_number}>
            <p className="text text_type_digits-default">{`#${currentOrder.number}`}</p>
          </div>
          <p className="text text_type_main-medium pt-10">{currentOrder.name}</p>
          <div className="pt-3">
            <Status status={currentOrder.status}></Status>
          </div>
          <div className={classes.ingredients}>
            <p className="text text_type_main-medium">Состав:</p>
            <div className={classes.ingredients_container}>
              {filteredIngredients.map(ingredient => (
                <OrderItem ingredient={ingredient} key={ingredient._id} count={ingredientCounters[ingredient._id]} />
              ))}
            </div>
          </div>
          <div className={classes.price}>
            <FormattedDate
              className=" text text_type_main-default text_color_inactive"
              date={new Date(currentOrder.createdAt)}
            />
            <Price price={totalPrice} size="default" />
          </div>
        </div>
      </div>
    )
  );
};

export default Order;
