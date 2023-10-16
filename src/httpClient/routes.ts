import { url } from "./url";

const routes = {
  global: {
    getProvinces: url.provinces + "/api/p/",
  },
  authentication: {
    login: url.baseUrl + "/usersystem/login",
    register: url.baseUrl + "/usersystem/register",
  },
};

export { routes };
