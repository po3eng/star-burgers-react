import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import calsses from "./price.module.css";
import PropTypes from "prop-types";


const Price = ({ price, size, type }) => {
  return (
    <div className={`${calsses.row} pr-10 ${calsses[size]}`}>
      <span className={calsses.price}>
        <p className={`text pr-2 text_type_digits-${size}`}>{price}</p>
      </span>
      <CurrencyIcon type={type} />
    </div>
  );
};

Price.defaultProps = {
  burgerPrice: 0,
  type: "primary",
  size: "default",
};

Price.typeProps = {
  burgerPrice: PropTypes.number,
  type: PropTypes.string,
  size: PropTypes.string,
};

export default Price;
