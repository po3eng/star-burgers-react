import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import calsses from "./price.module.css";
import { FC } from "react";

type TPrice = {
  price: number;
  size: string;
  type?: "primary" | "secondary";
};
const Price: FC<TPrice> = ({ price, size, type }) => {
  return (
    <div className={`${calsses.row} pr-10 ${calsses[size]}`}>
      <span className={calsses.price}>
        <p className={`text pr-2 text_type_digits-${size}`}>{price}</p>
      </span>
      <CurrencyIcon type="primary" />
    </div>
  );
};

export default Price;
