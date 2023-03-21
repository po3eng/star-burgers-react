import { FC } from "react";

type TStatusProps = {
  status?: string | undefined;
};

const Status: FC<TStatusProps> = ({ status }) => {
  switch (status) {
    case "done":
      return <p className="text text_type_main-default text_color_success">Выполнен</p>;
    case "pending":
      return <p className="text text_type_main-default">Готовится</p>;
    case "created": // canceled ?
      return <p className="text text_type_main-default text_color_error">Отменен</p>;
    default:
      return <></>;
  }
};
export default Status;
