import { useState } from "react";

const useForm = (inputValues) => {
  const [values, setValue] = useState(inputValues);
  const onChange = (event) => {
    const { value, name } = event.target;
    setValue({ ...values, [name]: value });
  };
  return [values, onChange, setValue];
};

export default useForm;
