import { Link } from "react-router-dom";

import styles from "./not-found.module.css";

export function NotFound404() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1 className="text text_type_main-large">Oops! 404 Error</h1>
        <p className="text text_type_main-medium">
          The page you requested does not exist
        </p>
        <br />
        <br />
        <p className="text text_type_main-small">
          check the address or try
          <Link className="link ml-4" to="/" >
            homepage
          </Link>
        </p>
      </div>
    </div>
  );
}
