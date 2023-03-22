import classes from "./app-header-item.module.css";
import { FC } from "react";
import { Link, useMatch } from "react-router-dom";
import { TIconProps } from "@ya.praktikum/react-developer-burger-ui-components/dist/ui/icons/utils";

type THeaderProps = {
  Element?: FC<TIconProps>;
  text?: string;
  to: string;
  textClass?: string;
};
const HeaderItem: FC<THeaderProps> = ({ Element, text, to, textClass }) => {
  const match = useMatch({ path: to, end: to.length === 1 });
  const classActive = match ? "" : "text_color_inactive";
  return (
    <Link to={to}>
      <div className={`${classes.appHeaderItemButton}`}>
        {Element && <Element type={match ? "primary" : "secondary"}></Element>}
        <p className={`${textClass || "text text_type_main-default"}  ${classActive}`}>{text}</p>
      </div>
    </Link>
  );
};

export default HeaderItem;
