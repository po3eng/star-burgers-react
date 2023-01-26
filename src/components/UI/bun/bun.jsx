import PropTypes from "prop-types";
import { ConstructorElement } from "@ya.praktikum/react-developer-burger-ui-components";
const Bun = ({ type, bun }) => {
  const position = type === "top" ? "(верх)" : "(низ)";
  return (
    bun && (
      <ConstructorElement
        type={type}
        extraClass="mb-2 mt-2 ml-6"
        isLocked={true}
        text={`${bun.name} ${position}`}
        price={bun.price}
        thumbnail={bun.image}
      />
    )
  );
};

Bun.propTypes = {
  type: PropTypes.string,
  bun: PropTypes.object,
};

Bun.defaultProps = {
  isTop: "top",
};
export default Bun;
