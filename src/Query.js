import { methods } from "./Methods";
import { config } from "./config";

class Query {
  constructor({ baseURL, path, customConfig, params }) {
    this.row = `${baseURL + path}?`;

    this.query = Object.keys(params).map(el => {
      return methods({
        params: params[el],
        method: el,
        config: config(customConfig)
      });
    });
  }

  get() {
    return `${this.row}?${this.query.join("&")}`;
  }
}

export { Query };
