const checkResponse = (res) => {
  if (res.ok) {
    return res.json();
  }
  // TODO: сделать проверки статусов

  return Promise.reject(res);
};

export const request = (url, options) => {
  return fetch(url, options).then(checkResponse);
};
