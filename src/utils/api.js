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
}

const api = new API();
export default api;
