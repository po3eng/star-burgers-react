import { TIngredient } from "../components/UI/ingredient-details/ingredient-details";
import { HOST } from "./constants";
import { getCookie } from "./cookies";
import { getLocalStorage } from "./local-storage";
import { fetchWithRefresh, request } from "./request";

//TODO: типизировать формы
class API {
  getIngredients() {
    return request(`${HOST}/api/ingredients`);
  }

  setOrder(ingredients: Array<TIngredient>) {
    const payload = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${getLocalStorage("accessToken")}`,
      },
      body: JSON.stringify({ ingredients }),
    };
    return fetchWithRefresh(`${HOST}/api/orders`, payload);
  }

  registrationUser<T>(form: T) {
    const payload = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    };
    return fetchWithRefresh(`${HOST}/api/auth/register`, payload);
  }

  login<T>(form: T) {
    const payload = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    };
    return fetchWithRefresh(`${HOST}/api/auth/login`, payload);
  }

  logout() {
    const payload = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ token: getCookie("refreshToken") }),
    };
    return fetchWithRefresh(`${HOST}/api/auth/logout`, payload);
  }

  refreshUserToken() {
    const payload = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ token: getCookie("refreshToken") }),
    };
    return fetchWithRefresh(`${HOST}/api/auth/token `, payload);
  }

  forgotPassword<T>(from: T) {
    const payload = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(from),
    };
    return fetchWithRefresh(`${HOST}/api/password-reset`, payload);
  }
  resetPassword<T>(form: T) {
    const payload = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    };
    return fetchWithRefresh(`${HOST}/api/password-reset/reset`, payload);
  }

  getUserData() {
    const payload = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${getLocalStorage("accessToken")}`,
      },
    };

    return fetchWithRefresh(`${HOST}/api/auth/user`, payload);
  }

  upadateUserData<T>(form: T) {
    const payload = {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${getLocalStorage("accessToken")}`,
      },
      body: JSON.stringify(form),
    };
    return fetchWithRefresh(`${HOST}/api/auth/user`, payload);
  }
}

const api = new API();
export default api;
