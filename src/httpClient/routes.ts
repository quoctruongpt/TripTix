import { url } from "./url";

const routes = {
  global: {
    getProvinces: url.baseUrl + "/province-city",
    news: url.baseUrl + "/news",
  },
  authentication: {
    login: url.baseUrl + "/usersystem/login",
    register: url.baseUrl + "/usersystem/register",
    getUserInfo: url.baseUrl + "/usersystem/detail",
    sendOtp: url.baseUrl + "/otp/phone/send",
    confirmOtp: url.baseUrl + "/otp/valid",
    updateUserInfo: url.baseUrl + "/usersystem",
    changeCoin: url.baseUrl + "/usersystem/exchange-voucher-coins",
    putNotificationToken: url.baseUrl + "/usersystem/fcm-token-device",
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
    getSearchTrip: url.baseUrl + "/trips/search",
  },
  payment: {
    topUp: url.baseUrl + "/payment/create_payment-url",
    transactionHistory: url.baseUrl + "/payment-transaction",
  },
};

export { routes };
