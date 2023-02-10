import classes from "./app-header-item.module.css";
import PropTypes from "prop-types";

import { Link, useLocation } from "react-router-dom";

const HeaderItem = ({ Element, text, to }) => {
  const { pathname } = useLocation();
  const classActive = pathname === to ? "" : "text_color_inactive";
  return (
    <Link to={to}>
      <div className={`${classes.appHeaderItemButton}`}>
        <Element type={pathname === to ? "primary" : "secondary"}></Element>
        <p className={`text text_type_main-default  ${classActive}`}>{text}</p>
      </div>
    </Link>
  );
};

HeaderItem.propTypes = {
  text: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
  Element: PropTypes.func.isRequired,
};
export default HeaderItem;
