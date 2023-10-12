import httpClient from ".";
import { routes } from "./routes";

const getProvinces = () => httpClient.get(routes.global.getProvinces);

export { getProvinces };
