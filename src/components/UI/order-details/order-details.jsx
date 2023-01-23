import classes from "./order-details.module.css";
import doneImg from "../../../images/done.svg";
import PropTypes from "prop-types";

const OrderDetails = ({ orderNumber }) => {
  return (
    <div className={classes.content}>
      <p className={classes.order_number + " text text_type_digits-large"}>
        {orderNumber}
      </p>
      <p className="text text_type_main-medium pt-8 pb-15">
        Идентификатор заказа
      </p>
      <img src={doneImg} alt="Изображение завершенного статуса" />
      <p className="text text_type_main-default pt-15">
        Ваш заказ начали готовить
      </p>
      <p className="text text_type_main-default text_color_inactive pt-2 pb-15">
        Дождитесь готовности на орбитальной станции
      </p>
    </div>
  );
};
OrderDetails.defaultProps = {
  orderNumber: 0,
};
OrderDetails.propTypes = {
  orderNumber: PropTypes.number,
};
export default OrderDetails;
