import { FC } from "react";
import styles from "./empty-bun.module.css";
import { TBunProps } from "../bun/bun";

const EmptyBun: FC<TBunProps> = ({ type }) => {
  const bun =
    type === "top"
      ? `${styles.empty_text} ml-6 mb-2 constructor-element constructor-element_pos_top`
      : `${styles.empty_text} ml-6 mt-2 constructor-element constructor-element_pos_bottom `;
  return (
    <div className={bun}>
      <p className="text text_type_main-default text_color_inactive">Выберите булку</p>
    </div>
  );
};

export default EmptyBun;
