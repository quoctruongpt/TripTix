import httpClient from ".";
import { routes } from "./routes";

const topUp = (idCustomer: number, coin: number) => {
  httpClient.post(routes.payment.topUp, { idCustomer, amount: coin });
};

export { topUp };
