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
    updateUserInfo: url.baseUrl + "/usersystem",
    changeCoin: url.baseUrl + "/usersystem/exchange-voucher-coins",
  },
  trip: {
    getRouteInfo: url.baseUrl + "/route",
    getTrip: url.baseUrl + "/trips",
    postBookTicket: url.baseUrl + "/bookings",
    getBooking: url.baseUrl + "/bookings",
    cancelBooking: url.baseUrl + "/bookings/cancel",
    feedback: url.baseUrl + "/bookings/vote-star",
    getHistoryDriver: url.baseUrl + "/trips/history-driver",
    putCheckin: url.baseUrl + "/bookings/check-in-by-driver",
    startTrip: url.baseUrl + "/trips/start-trip-by-driver",
    getTripDetail: url.baseUrl + "/trips/detail",
    confirmFinishTrip: url.baseUrl + "/trips/confirm-finish-trip-by-driver",
  },
  payment: {
    topUp: url.baseUrl + "/payment/create_payment-url",
  },
};

export { routes };
