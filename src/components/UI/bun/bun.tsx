import { ConstructorElement } from "@ya.praktikum/react-developer-burger-ui-components";
import EmptyBun from "../empty-bun/empty-bun";

import { useDrop } from "react-dnd";
import { addBunToConstructor } from "../../../services/actions/constructor";
import { FC } from "react";
import { useAppDispatch, useAppSelector } from "../../../hooks/redux";
import { TIngredient } from "../ingredient-details/ingredient-details";

export type TBunProps = {
  type: "top" | "bottom" | undefined;
};

const Bun: FC<TBunProps> = ({ type }) => {
  const bun = useAppSelector(store => store.constr.bun);
  const dispatch = useAppDispatch();
  const [, drop] = useDrop({
    accept: "bun",
    collect: monitor => ({
      isHover: monitor.isOver(),
    }),
    drop(ingredient) {
      dispatch(addBunToConstructor(ingredient as TIngredient));
    },
  });

  const position = type === "top" ? "(верх)" : "(низ)";
  return (
    <div ref={drop} className="burger-constructor_bun">
      {bun && bun._id ? (
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

export default Bun;
