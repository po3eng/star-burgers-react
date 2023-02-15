import { useState } from "react";
// TODO: [ ] сменить все вызовы на хук
// TODO: [ ] сделать хук для куки

export const useLocalStorage = (key, initialValue) => {
  const [value, setValue] = useState(() => {
    try {
      const json = window.localStorage.getItem(key);
      return json ? JSON.parse(json) : initialValue;
    } catch (error) {
      console.error(error);
      return initialValue;
    }
  });

  const onChange = (value) => {
    try {
      setValue(value);
      window.localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error(error);
    }
  };

  return [value, onChange];
};
