import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import classes from "./tab.module.css";
import PropTypes from "prop-types";

const IngredientsTab = ({ types, current, change }) => {
  return (
    <div className={classes.tab}>
      {types.map((type) => (
        <Tab
          key={type.id}
          value={type.name}
          active={current === type.name}
          onClick={change}
        >
          {type.name}
        </Tab>
      ))}
    </div>
  );
};
IngredientsTab.propTypes = {
  types: PropTypes.array.isRequired,
  current: PropTypes.string.isRequired,
  change: PropTypes.func.isRequired,
};

export default IngredientsTab;
