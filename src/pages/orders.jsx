import { Link } from "react-router-dom";

import styles from "./not-found.module.css";

export function Orders() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1 className="text text_type_main-large">Oops!</h1>
        <p className="text text_type_main-medium">
          Страница находится в разработке
        </p>
        <br />
        <br />
        <p className="text text_type_main-small">
          <Link className={styles.link}  to="/">На главную</Link>
        </p>
      </div>
    </div>
  );
}
