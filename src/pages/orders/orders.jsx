import styles from "../not-found/not-found.module.css";
import { getCookie } from "../../utils/cookies";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { Navigate } from "react-router-dom";
import { userData } from "../../services/actions/auth";

const Orders = () => {
  const dispatch = useDispatch();
  const token = getCookie("token");

  useEffect(() => {
    token && dispatch(userData());
  }, []);

  if (!token) {
    return <Navigate to="/login" replace />;
  }

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1 className="text text_type_main-large">Oops!</h1>
        <p className="text text_type_main-medium">
          Страница находится в разработке
        </p>
      </div>
    </div>
  );
};

export default Orders;
