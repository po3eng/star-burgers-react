import classes from "./app-header-item.module.css";
import PropTypes from "prop-types";

const AppHeaderItem = ({ text, children, active }) => {
  const classActive = active ? "" : "text_color_inactive";
  return (
    <a href="/">
      <div className={`${classes.appHeaderItemButton} ${classActive} `}>
        {children}
        <p className="text text_type_main-default">{text}</p>
      </div>
    </a>
  );
};

AppHeaderItem.propTypes = {
  text: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
  active: PropTypes.bool,
};
export default AppHeaderItem; 
