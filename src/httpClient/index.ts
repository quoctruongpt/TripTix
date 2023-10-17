import { storage } from "@storage/index";
import axios from "axios";
import { errorInterceptor, onFulfill } from "./config";
import { url } from "./url";

const httpClient = axios.create({
  baseURL: url.baseUrl,
  timeout: 10000,
  headers: { "Content-Type": "application/json" },
});

const setAuthorization = (token: string) => {
  httpClient.interceptors.request.use((config: any) => {
    config.headers["Authorization"] = token ? "Bearer " + token : null;
    return config;
  });
};

httpClient.interceptors.response.use(onFulfill, errorInterceptor);

export { setAuthorization };
export default httpClient;
