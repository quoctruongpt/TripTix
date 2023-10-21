import httpClient from ".";
import { routes } from "./routes";
import { TRegisterParams } from "src/types";
import { url } from "./url";

const postLogin = (username: string, password: string) =>
  httpClient.post(routes.authentication.login, { username, password });

const postRegister = (data: TRegisterParams) =>
  httpClient.post(routes.authentication.register, data);

const getUserInfo = (id: number) => {
  return httpClient.get(`${routes.authentication.getUserInfo}?id=${id}`);
};

const postSendOtp = (email: string) => {
  return httpClient.post(`${routes.authentication.sendOtp}?email=${email}`);
};

const postConfirmOtp = (email: string, otp: string) => {
  return httpClient.get(
    `${routes.authentication.confirmOtp}?key=${email}&otp=${otp}`
  );
};

export { postLogin, postRegister, getUserInfo, postSendOtp, postConfirmOtp };
