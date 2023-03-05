export const setLocalStorage = <T>(key: string, value: T) => {
  window.localStorage.setItem(key, JSON.stringify(value));
};

export const removeLocalStorage = (key: string) => {
  window.localStorage.removeItem(key);
};

export const getLocalStorage = (key: string) => {
  const value = window.localStorage.getItem(key);
  if (typeof value === "string") {
    return JSON.parse(value);
  }
  return null;
};
