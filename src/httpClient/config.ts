import { StorageKeys } from "@constants/global";
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

  return Promise.reject(error.response);
};

// Lưu token
const saveTokenToAsyncStorage = async (token: string) => {
  try {
    await storage.setItem(StorageKeys.Token, token);
  } catch (error) {
    console.error("Lỗi khi lưu token:", error);
  }
};

// Lấy token
const getTokenFromAsyncStorage = async () => {
  try {
    const token = await storage.getItem(StorageKeys.Token);
    return token;
  } catch (error) {
    console.error("Lỗi khi lấy token:", error);
  }
};

export {
  errorInterceptor,
  onFulfill,
  saveTokenToAsyncStorage,
  getTokenFromAsyncStorage,
};
