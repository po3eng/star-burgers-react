import classes from "./app-header-item.module.css";
import PropTypes from "prop-types";

import { Link, useMatch } from "react-router-dom";

const HeaderItem = ({ Element, text, to, textClass }) => {
  const match = useMatch({ path: to, end: to.length === 1 });
  const classActive = match ? "" : "text_color_inactive";
  return (
    <Link to={to}>
      <div className={`${classes.appHeaderItemButton}`}>
        {Element && <Element type={match ? "primary" : "secondary"}></Element>}
        <p
          className={`${
            textClass || "text text_type_main-default"
          }  ${classActive}`}
        >
          {text}
        </p>
      </div>
    </Link>
  );
};

HeaderItem.propTypes = {
  text: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
  Element: PropTypes.func,
  match: PropTypes.bool,
};
export default HeaderItem;
