import classes from "./modal-overlay.module.css";
import PropTypes from "prop-types";

const ModalOverlay = ({ children, handleCloseModal }) => {
  return (
    <div className={classes.Modal} onClick={handleCloseModal}>
      <div onClick={(e) => e.stopPropagation()}>{children}</div>
    </div>
  );
};

ModalOverlay.propTypes = {
  children: PropTypes.element,
  handleCloseModal: PropTypes.func,
};
export default ModalOverlay;
