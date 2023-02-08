import { HOST } from "./constants.js";
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
        email,
      },
      body: JSON.stringify({ name, email, password }),
    };
    return request(`${HOST}/api/auth/register `, payload);
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
    return request(`${HOST}/api/auth/login `, payload);
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
    return request(`${HOST}/api/auth/login `, payload);
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
    return request(`${HOST}/api/auth/logout `, payload);
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
}

const api = new API();
export default api;

// POST https://norma.nomoreparties.space/api/auth/logout - эндпоинт для выхода из системы.

// GET https://norma.nomoreparties.space/api/auth/user - эндпоинт получения данных о пользователе.
// PATCH https://norma.nomoreparties.space/api/auth/user - эндпоинт обновления данных о пользователе.
