import { Button } from "@ya.praktikum/react-developer-burger-ui-components";
import classes from "./app-header-item.module.css";
import PropTypes from "prop-types";

const AppHeaderItem = ({ text, children }) => {
  return (
    <a href="/">
      <Button htmlType="button" type="secondary" size="medium">
        <div className={classes.appHeaderItemButton}>
          {children}
          <p className="text text_type_main-default text_color_inactive">
            {text}
          </p>
        </div>
      </Button>
    </a>
  );
};

AppHeaderItem.propTypes = {
  text: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
};
export default AppHeaderItem;
