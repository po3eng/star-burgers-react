import {
  ConstructorElement,
  DragIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import classes from "./constructor-ingredient.module.css";
import {
  deleteIngredient,
  moveConstructorIngredient,
} from "../../../services/actions/constructor";
import { useDrag, useDrop, DropTargetMonitor } from "react-dnd";
import { XYCoord } from "dnd-core";

import { FC, useRef } from "react";
import { TIngredient } from "../ingredient-details/ingredient-details";
import { useAppDispatch } from "../../../hooks/redux";

type TConstructorIngredientProps = {
  ingredient: TIngredient;
  index: number;
  drag: boolean;
};
type TDragItem = {
  id: string;
  index: number;
};
const ConstructorIngredient: FC<TConstructorIngredientProps> = ({
  ingredient,
  index,
  drag,
}) => {
  const dispatch = useAppDispatch();
  const ref = useRef<HTMLDivElement>(null);
  const [, dropRef] = useDrop({
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
      const dragItem: TDragItem = item as TDragItem;

      const dragIndex = dragItem.index;
      const hoverIndex = index;
      if (dragIndex === hoverIndex) {
        return;
      }
      const hoverBoundingRect = ref.current?.getBoundingClientRect();
      const hoverMiddleY =
        (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
      const clientOffset = monitor.getClientOffset();
      const hoverClientY = (clientOffset as XYCoord).y - hoverBoundingRect.top;

      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
        return;
      }
      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
        return;
      }
      dispatch(moveConstructorIngredient(dragIndex, hoverIndex));
      dragItem.index = hoverIndex;
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
  const handleDelete = (ingredient: TIngredient) => {
    dispatch(deleteIngredient(ingredient));
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

export default ConstructorIngredient;
