import PropTypes from "prop-types";
import { ConstructorElement } from "@ya.praktikum/react-developer-burger-ui-components";
import EmptyBun from "../empty-bun/empty-bun";

import { useDrop } from "react-dnd";
import { addBunToConstructor } from "../../../services/actions/constructor";
import { useDispatch, useSelector } from "react-redux";

const Bun = ({ type }) => {
  const bun = useSelector((store) => store.constr.bun);
  const dispatch = useDispatch();
  const [{ isHover }, drop] = useDrop({
    accept: "bun",
    collect: (monitor) => ({
      isHover: monitor.isOver(),
    }),
    drop(ingredient) {
      dispatch(addBunToConstructor(ingredient));
    },
  });

  const position = type === "top" ? "(верх)" : "(низ)";
  return (
    <div ref={drop}>
      {bun._id ? (
        <ConstructorElement
          type={type}
          extraClass="mb-2 mt-2 ml-6"
          isLocked={true}
          text={`${bun.name} ${position}`}
          price={bun.price}
          thumbnail={bun.image}
        />
      ) : (
        <EmptyBun type={type}></EmptyBun>
      )}
    </div>
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
