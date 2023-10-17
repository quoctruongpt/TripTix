import httpClient from ".";
import { routes } from "./routes";

const baseURL = "http://btbs.ap-southeast-1.elasticbeanstalk.com";

const getTrips = (params: any) => {
  const url = `${baseURL}/trips`;
  return httpClient.get(url, { params });
};

const getRouteInfo = (departurePoint: string, destination: string) =>
  httpClient.get(
    `${routes.trip.getRouteInfo}?departurePoint=${departurePoint}&destination=${destination}`
  );

export { getTrips, getRouteInfo };
