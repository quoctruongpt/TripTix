import { storage } from "@storage/index";

const HttpCodes = {
  Auth: 401,
};

const onFulfill = (response: any) => {
  return response;
};

const errorInterceptor = async (error: any) => {
  if (!error.response) {
    return Promise.reject("Network/Server error " + error);
  }

  switch (error.response.status) {
    case HttpCodes.Auth:
      await storage.removeItem("token");
      break;

    default:
      break;
  }

  return Promise.reject(error);
};

export { errorInterceptor, onFulfill };
