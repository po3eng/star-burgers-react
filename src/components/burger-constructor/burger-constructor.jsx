import { useState, useMemo, useCallback } from "react";
import classes from "./burger.constructor.module.css";
import PropTypes from "prop-types";
import {
  ConstructorElement,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";

import Price from "../UI/price/price";
import OrderDetails from "../UI/order-details/order-details";
import ListConstructorIngredients from "../UI/list-constructor-ingredients/list-constructor-ingredients";

const BurgerConstructor = ({ ingredients, bun }) => {
  const [modal, setModal] = useState(false);

  const getPrice = useCallback((ingredients) => {
    return ingredients.reduce(
      (accumulator, item) => accumulator + item.price,
      0,
    );
  });

  const totalPrice = useMemo(() => getPrice([...ingredients, bun, bun]));

  return (
    <>
      {modal && <OrderDetails handleCloseModal={() => setModal(false)} />}
      <div className="pl-4 pr-4">
        <div className={classes.totalBurger}>
          <ConstructorElement
            type="top"
            extraClass="mb-2 ml-6"
            isLocked={true}
            text={`${bun.name} (верх)`}
            price={bun.price}
            thumbnail={bun.image}
          />
          <ListConstructorIngredients ingredients={ingredients} />
          <ConstructorElement
            type="bottom"
            extraClass="mt-2 ml-6"
            isLocked={true}
            text={`${bun.name} (низ)`}
            price={bun.price}
            thumbnail={bun.image}
          />
        </div>
        <div className={`${classes.wraper} pt-10`}>
          <Price size="medium" price={totalPrice} />
          <Button
            htmlType="button"
            type="primary"
            size="medium"
            onClick={() => setModal(true)}
          >
            Оформить заказ
          </Button>
        </div>
      </div>
    </>
  );
};

BurgerConstructor.propTypes = {
  ingredients: PropTypes.array.isRequired,
  bun: PropTypes.object.isRequired,
};
export default BurgerConstructor;
