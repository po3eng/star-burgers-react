import {
  ConstructorElement,
  DragIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import classes from "./constructor-ingredient.module.css";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import {
  MOVE_CONSTRUCTOR_INGREDIENT,
  deleteConstructorIngredient,
} from "../../../services/actions/ingredients";
import { useDrag, useDrop } from "react-dnd";
import { useRef } from "react";
const ConstructorIngredient = ({ ingredient, index, drag }) => {
  const dispatch = useDispatch();

  const ref = useRef(null);
  const [{ handlerId }, dropRef] = useDrop({
    accept: ["drag"],
    collect(monitor) {
      return {
        handlerId: monitor.getHandlerId(),
      };
    },
    hover(item, monitor) {
      if (!ref.current) {
        return;
      }
      const dragIndex = item.index;
      const hoverIndex = index;
      if (dragIndex === hoverIndex) {
        return;
      }
      const hoverBoundingRect = ref.current?.getBoundingClientRect();
      const hoverMiddleY =
        (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
      const clientOffset = monitor.getClientOffset();
      const hoverClientY = clientOffset.y - hoverBoundingRect.top;

      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
        return;
      }
      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
        return;
      }
      dispatch({ type: MOVE_CONSTRUCTOR_INGREDIENT,dragIndex, hoverIndex });
      item.index = hoverIndex;
    },
  });
  const [{ isDragging }, dragRef] = useDrag({
    type: "drag",
    item: () => {
      return { _id: ingredient._id, index };
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });
  const opacity = isDragging ? 0 : 1;
  dragRef(dropRef(ref));

  const handleDelete = (ingredient) => {
    dispatch(deleteConstructorIngredient(ingredient));
  };

  return (
    <div
      ref={ref}
      style={{ opacity }}
      className={`${classes.wraper} pt-2 pb-2`}
    >
      {drag && <DragIcon type="primary" />}
      <ConstructorElement
        text={ingredient.name}
        price={ingredient.price}
        thumbnail={ingredient.image}
        extraClass="pl-2"
        handleClose={() => handleDelete(ingredient)}
      />
    </div>
  );
};
ConstructorIngredient.defaultProps = {
  drag: false,
};
ConstructorIngredient.propTypes = {
  drag: PropTypes.bool,
  ingredient: PropTypes.object.isRequired,
};

export default ConstructorIngredient;
