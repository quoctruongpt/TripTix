import { url } from "./url";

const routes = {
  global: {
    getProvinces: url.provinces + "/api/p/",
  },
  authentication: {
    login: url.baseUrl + "/usersystem/login",
    register: url.baseUrl + "/usersystem/register",
    getUserInfo: url.baseUrl + "/usersystem/detail",
    sendOtp: url.baseUrl + "/otp/email/send",
    confirmOtp: url.baseUrl + "/otp/valid",
  },
  trip: {
    getRouteInfo: url.baseUrl + "/route",
    getTrip: url.baseUrl + "/trips",
    postBookTicket: url.baseUrl + "/bookings",
    getBooking: url.baseUrl + "/bookings",
    cancelBooking: url.baseUrl + "/bookings/cancel",
  },
};

export { routes };
