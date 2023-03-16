import classes from "./modal.module.css";
import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import ModalOverlay from "../modal-overlay/modal-overlay";
import { createPortal } from "react-dom";
import { FC, ReactNode, useEffect } from "react";

type TModal = {
  children?: ReactNode;
  header?: string;
  handleCloseModal: () => void;
};
const Modal: FC<TModal> = ({ children, header, handleCloseModal }) => {
  useEffect(() => {
    const closeModalOnEscape = (e: KeyboardEvent) => (e.key === "Escape" ? handleCloseModal() : null);
    document.body.addEventListener("keydown", closeModalOnEscape);
    return () => {
      document.body.removeEventListener("keydown", closeModalOnEscape);
    };
  }, [handleCloseModal]);

  return createPortal(
    <ModalOverlay handleCloseModal={handleCloseModal}>
      <div className={classes.card}>
        <div className={classes.header}>
          <p className="text text_type_main-large">{header}</p>
          <div className={classes.close}>
            <CloseIcon type="primary" onClick={() => handleCloseModal()} />
          </div>
        </div>
        {children}
      </div>
    </ModalOverlay>,
    document.getElementById("modal-root") as Element,
  );
};
export default Modal;
