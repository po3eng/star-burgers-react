import { HOST } from "./constants.js";
import { getCookie } from "./cookies.js";
import { request } from "./request.js";
class API {
  getIngredients() {
    return request(`${HOST}/api/ingredients`);
  }

  setOrder(ingredients) {
    const payload = {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ingredients }),
    };
    return request(`${HOST}/api/orders`, payload);
  }

  registrationUser({ name, email, password }) {
    const payload = {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, password }),
    };
    return request(`${HOST}/api/auth/register`, payload);
  }

  login({ email, password }) {
    const payload = {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    };
    return request(`${HOST}/api/auth/login`, payload);
  }

  logout({ token }) {
    const payload = {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ token }),
    };
    return request(`${HOST}/api/auth/logout`, payload);
  }

  refreshUserToken({ token }) {
    const payload = {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ token }),
    };
    return request(`${HOST}/api/auth/token `, payload);
  }

  forgotPassword({ email }) {
    const payload = {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email }),
    };
    return request(`${HOST}/api/password-reset`, payload);
  }

  getUserData() {
    const payload = {
      method: "GET",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
        authorization: getCookie("token"),
      },
    };

    return request(`${HOST}/api/auth/user`, payload);
  }

  upadateUserData({ name, email, password }) {
    const payload = {
      method: "PATCH",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
        authorization: getCookie("token"),
      },
      body: JSON.stringify({ name, email, password }),
    };
    return request(`${HOST}/api/auth/user`, payload);
  }
}

const api = new API();
export default api;

// GET https://norma.nomoreparties.space/api/auth/user - эндпоинт получения данных о пользователе.
// PATCH https://norma.nomoreparties.space/api/auth/user - эндпоинт обновления данных о пользователе.
