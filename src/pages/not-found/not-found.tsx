import { Link } from "react-router-dom";

import styles from "./not-found.module.css";
import { FC } from "react";

export const NotFound404: FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1 className="text text_type_main-large">Oops! 404 Error</h1>
        <p className="text text_type_main-medium">Запрашиваемая вами страница не существует</p>
        <br />
        <br />
        <p className="text text_type_main-small">
          проверьте адрес или вернитесь на
          <Link className={`${styles.link} ml-2`} to="/">
            Главную
          </Link>
        </p>
      </div>
    </div>
  );
};
