import { FC } from "react";
import classes from "./preloader.module.css";
import { createPortal } from "react-dom";

const Preloader: FC = () => {
  return createPortal(
    <div className={classes.lds_dual_ring}></div>,
    document.getElementById("modal-root") as Element,
  );
};

export default Preloader;
