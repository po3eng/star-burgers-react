import { HOST } from "./constants.js";

class API {
  async get(url = "") {
    return fetch(`${HOST}${url}`)
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(`Ошибка ${res.status}`);
      })
      .then((json) => json.data)
      .catch((e) => {
        console.log("Ошибка запроса данных");
        return [];
      });
  }

  async post(url = "", data = {}) {
    const payload = {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: JSON.stringify(data),
    };

    return fetch(`${HOST}${url}`, payload)
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(`Ошибка ${res.status}`);
      })
      .then((json) => json.data)
      .catch((e) => {
        console.log("Ошибка отправки данных");
        return [];
      });
  }

  getIngredients() {
    return this.get("/api/ingredients");
  }

  setOrder(ingredients) {
    return this.post("/api/orders", ingredients);
  }
  
}
const api = new API();
export default api;
