import { TIngredient } from "../components/UI/ingredient-details/ingredient-details";
import { HOST } from "./constants";
import { getCookie } from "./cookies";
import { getLocalStorage } from "./local-storage";
import { fetchWithRefresh, request } from "./request";

import { TUser } from "../services/actions/auth";
import { TServerResponse } from "./request";
import { TOrder } from "../components/UI/feed-item/feed-item";

type TUserResponse = TServerResponse<{ user: TUser }>;
type TOrderResponse = TServerResponse<{ orders: TOrder[] }>;

type TIngredientsResponse = TServerResponse<{ data: Array<TIngredient> }>;
type TMessageResponse = TServerResponse<{ message: string }>;

export type TTokens = {
  accessToken: string;
  refreshToken: string;
};
export type TResetPassword = {
  password: string;
  token: string;
};
type TLoginResponse = TServerResponse<{ user: TUser } & TTokens>;

type TSetOrder = { name: string; order: { number: number } };
type TSetOrderResponce = TServerResponse<TSetOrder>;
class API {
  getIngredients(): Promise<TIngredientsResponse> {
    return request(`${HOST}/api/ingredients`);
  }

  setOrder(ingredients: Array<string>): Promise<TSetOrderResponce> {
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

  registrationUser(form: TUser): Promise<TLoginResponse> {
    const payload = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    };
    return fetchWithRefresh(`${HOST}/api/auth/register`, payload);
  }

  login(form: Omit<TUser, "name">): Promise<TLoginResponse> {
    const payload = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    };
    return fetchWithRefresh(`${HOST}/api/auth/login`, payload);
  }

  logout(): Promise<TServerResponse<unknown>> {
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

  forgotPassword(from: { email: string }): Promise<TMessageResponse> {
    const payload = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(from),
    };
    return fetchWithRefresh(`${HOST}/api/password-reset`, payload);
  }

  resetPassword(form: TResetPassword): Promise<TMessageResponse> {
    const payload = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    };
    return fetchWithRefresh(`${HOST}/api/password-reset/reset`, payload);
  }

  getUserData(): Promise<TUserResponse> {
    const payload = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${getLocalStorage("accessTOrderResponseToken")}`,
      },
    };

    return fetchWithRefresh(`${HOST}/api/auth/user`, payload);
  }

  getOrderData(order: number): Promise<TOrderResponse> {
    return request(`${HOST}/api/orders/${order} `);
  }

  upadateUserData(form: Omit<TUser, "token">): Promise<TUserResponse> {
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
