import { HOST } from "./constants.js";
import { getCookie } from "./cookies.js";
import { getLocalStorage } from "./local-storage.js";
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

  registrationUser(form) {
    const payload = {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
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

  forgotPassword(email) {
    const payload = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(email),
    };
    return request(`${HOST}/api/password-reset`, payload);
  }
  resetPassword(form) {
    const payload = {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    };
    return request(`${HOST}/api/password-reset/reset`, payload);
  }

  getUserData() {
    const payload = {
      method: "GET",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${getLocalStorage("token")}`,
      },
    };

    return request(`${HOST}/api/auth/user`, payload);
  }

  upadateUserData(form) {
    const payload = {
      method: "PATCH",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${getLocalStorage("token")}`,
      },
      body: JSON.stringify(form),
    };
    return request(`${HOST}/api/auth/user`, payload);
  }
}

const api = new API();
export default api;

// GET https://norma.nomoreparties.space/api/auth/user - эндпоинт получения данных о пользователе.
// PATCH https://norma.nomoreparties.space/api/auth/user - эндпоинт обновления данных о пользователе.
