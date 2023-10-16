import httpClient from ".";
import { routes } from "./routes";
import { TRegisterParams } from "src/types";
import { url } from "./url";

const postLogin = (username: string, password: string) =>
  httpClient.post(routes.authentication.login, { username, password });

const postRegister = (data: TRegisterParams) =>
  httpClient.post(routes.authentication.register, data);

export { postLogin, postRegister };
