import { ChangeEvent, useState } from "react";

const useForm = (inputValues: any) => {
  const [values, setValue] = useState(inputValues);
  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = event.target;
    setValue({ ...values, [name]: value });
  };
  return [values, onChange, setValue];
};

export default useForm;
