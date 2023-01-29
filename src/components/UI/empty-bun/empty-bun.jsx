import styles from "./empty-bun.module.css";
import PropTypes from "prop-types";

const EmptyBun = ({ type }) => {
  const bun =
    type == "top"
      ? `${styles.empty_text} ml-6 mb-2 constructor-element constructor-element_pos_top`
      : `${styles.empty_text} ml-6 mt-2 constructor-element constructor-element_pos_bottom `;
  return (
    <div className={bun}>
      <p className="text text_type_main-default text_color_inactive">
        Выберите булку
      </p>
    </div>
  );
};

EmptyBun.propTypes = {
  type: PropTypes.string.isRequired,
};
export default EmptyBun;
