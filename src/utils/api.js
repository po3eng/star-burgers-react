import { HOST } from "./constants.js";
import { getCookie } from "./cookies.ts";
import { getLocalStorage } from "./local-storage.ts";
import { fetchWithRefresh } from "./request.ts";
class API {
  getIngredients() {
    return fetchWithRefresh(`${HOST}/api/ingredients`);
  }

  setOrder(ingredients) {
    const payload = {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${getLocalStorage("accessToken")}`,
      },
      body: JSON.stringify({ ingredients }),
    };
    return fetchWithRefresh(`${HOST}/api/orders`, payload);
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
    return fetchWithRefresh(`${HOST}/api/auth/register`, payload);
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
    return fetchWithRefresh(`${HOST}/api/auth/login`, payload);
  }

  logout() {
    const payload = {
      method: "POST",
      mode: "cors",
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
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ token: getCookie("refreshToken") }),
    };
    return fetchWithRefresh(`${HOST}/api/auth/token `, payload);
  }

  forgotPassword(email) {
    const payload = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(email),
    };
    return fetchWithRefresh(`${HOST}/api/password-reset`, payload);
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
    return fetchWithRefresh(`${HOST}/api/password-reset/reset`, payload);
  }

  getUserData() {
    const payload = {
      method: "GET",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${getLocalStorage("accessToken")}`,
      },
    };

    return fetchWithRefresh(`${HOST}/api/auth/user`, payload);
  }

  upadateUserData(form) {
    const payload = {
      method: "PATCH",
      mode: "cors",
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
