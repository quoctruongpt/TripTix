import httpClient from ".";
import { routes } from "./routes";

const topUp = (idCustomer: number, coin: number) => {
  return httpClient.post(routes.payment.topUp, { idCustomer, amount: coin });
};

export { topUp };
