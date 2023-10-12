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
      console.warn("Server Error");
  }

  return Promise.reject(error);
};

const getAuthToken = async () => storage.getItem("token");

const authInterceptor = (config: any) => {
  config.headers["Authorization"] = getAuthToken();
  return config;
};

export { errorInterceptor, authInterceptor, onFulfill };
