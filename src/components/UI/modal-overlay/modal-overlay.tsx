import { FC, ReactNode } from "react";
import classes from "./modal-overlay.module.css";

type TModelOverlay = {
  children: ReactNode;
  handleCloseModal: () => void;
};

const ModalOverlay: FC<TModelOverlay> = ({ children, handleCloseModal }) => {
  return (
    <div className={classes.Modal} onClick={handleCloseModal}>
      <div onClick={(e) => e.stopPropagation()}>{children}</div>
    </div>
  );
};

export default ModalOverlay;
