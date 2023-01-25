import classes from "./preloader.module.css";
import { createPortal } from "react-dom";

const Preloader = () => {
  return createPortal(
    <div className={classes.lds_dual_ring}></div>,
    document.getElementById("modal-root"),
  );
};

export default Preloader;
