import { HOST } from "./constants";
import { setCookie } from "./cookies";

const checkResponse = <T>(res: Response): Promise<T> => {
  return res.ok ? res.json() : res.json().then(err => Promise.reject(err));
};

export type TServerResponse<T> = {
  success: boolean;
} & T;

export const request = async <T>(url: string, options?: RequestInit) => {
  const res = await fetch(url, options);
  return await checkResponse<T>(res);
};

export const fetchWithRefresh = async <T>(url: RequestInfo, options: RequestInit) => {
  try {
    const res = await fetch(url, options);
    return await checkResponse<T>(res);
  } catch (err) {
    if ((err as { message: string }).message === "jwt expired") {
      const refreshData = await refreshToken();
      if (options.headers) {
        (options.headers as { [key: string]: string }).authorization = refreshData.accessToken;
      }
      const res = await fetch(url, options);
      return await checkResponse<T>(res);
    } else {
      return Promise.reject(err);
    }
  }
};

type TRefreshResponse = TServerResponse<{
  refreshToken: string;
  accessToken: string;
}>;

export const refreshToken = (): Promise<TRefreshResponse> => {
  return fetch(`${HOST}/auth/token`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    body: JSON.stringify({
      token: localStorage.getItem("accessToken"),
    }),
  })
    .then(res => checkResponse<TRefreshResponse>(res))
    .then(refreshData => {
      if (!refreshData.success) {
        return Promise.reject(refreshData);
      }
      localStorage.setItem("accessToken", refreshData.accessToken);
      setCookie("refreshToken", refreshData.refreshToken);
      return refreshData;
    });
};
