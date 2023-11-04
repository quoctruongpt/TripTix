import { data } from "@screens/SelectRoute/constant";
import httpClient from ".";
import { routes } from "./routes";

const baseURL = "http://btbs.ap-southeast-1.elasticbeanstalk.com";

const getTrips = ({
  routeId,
  startTime,
}: {
  routeId: string;
  startTime: number;
}) => {
  return httpClient.get(
    `${routes.trip.getTrip}?routeId=${routeId}&startTime=${startTime}&status=READY&adminCheck=ACCEPT`
  );
};

const getRouteInfo = (departurePoint: string, destination: string) =>
  httpClient.get(
    `${routes.trip.getRouteInfo}?codeDeparturePoint=${departurePoint}&codeDestination=${destination}`
  );

const postBookTicket = (data: {
  idTrip: number;
  idCustomer: number;
  codePickUpPoint: number;
  codeDropOffPoint: number;
  seatName: string[];
}) => httpClient.post(routes.trip.postBookTicket, data);

const getBookings = (idCustomer: number) =>
  httpClient.get(`${routes.trip.getBooking}?idCustomer=${idCustomer}`);

const putCancelBooking = (idCustomer: number, codeBooking: string) =>
  httpClient.put(routes.trip.cancelBooking, {
    idCustomer,
    idBooking: codeBooking,
  });

const putFeedback = (idBooking: number, star: number) => {
  return httpClient.put(routes.trip.feedback, {
    idBooking,
    star,
  });
};

export {
  getTrips,
  getRouteInfo,
  postBookTicket,
  getBookings,
  putCancelBooking,
  putFeedback,
};
