import { data } from "@screens/SelectRoute/constant";
import httpClient from ".";
import { routes } from "./routes";

const baseURL = "http://btbs.ap-southeast-1.elasticbeanstalk.com";

const getTrips = (params: any) => {
  const url = `${baseURL}/trips`;
  return data;
  httpClient.get(url, { params });
};

const getRouteInfo = (departurePoint: string, destination: string) =>
  httpClient.get(
    `${routes.trip.getRouteInfo}?codeDeparturePoint=${departurePoint}&codeDestination=${destination}`
  );
export { getTrips, getRouteInfo };
