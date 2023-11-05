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

const putUpdateUserInfo = (data: {
  idUserSystem: number;
  phone: string;
  fullName: string;
  address: string;
  birthdayTimeStamp: number;
  gender: string;
  email: string;
  citizenIdentityCard?: string;
  assignedRegions?: string;
}) => httpClient.put(routes.authentication.updateUserInfo, data);

const putExchangeCoins = (idCustomer: number, voucherCoins: number) => {
  return httpClient.put(routes.authentication.changeCoin, {
    idCustomer,
    voucherCoins,
  });
};

export {
  postLogin,
  postRegister,
  getUserInfo,
  postSendOtp,
  postConfirmOtp,
  putUpdateUserInfo,
  putExchangeCoins,
};
