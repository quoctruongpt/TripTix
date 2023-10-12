import { storage } from "@storage/index";
import axios from "axios";
import { authInterceptor, errorInterceptor, onFulfill } from "./config";
import { url } from "./url";

const httpClient = axios.create({
  baseURL: url.baseUrl,
  timeout: 10000,
  headers: { "Content-Type": "application/json" },
});

httpClient.interceptors.request.use(authInterceptor);
httpClient.interceptors.response.use(onFulfill, errorInterceptor);

export default httpClient;
