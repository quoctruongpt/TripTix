import { ERules } from "@constants/user";
import { RouteProp } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

type TAuthStackParamList = {
  Welcome: undefined;
  Home: undefined;
  Role: undefined;
  LoginOrRegisterForm: { rule: ERules };
  SignIn: { rule: ERules };
  OTP: undefined;
  SignUp: undefined;
};

type TAuthNavigation<T extends keyof TAuthStackParamList> =
  NativeStackNavigationProp<TAuthStackParamList, T>;

type TAuthRoute<T extends keyof TAuthStackParamList> = RouteProp<
  TAuthStackParamList,
  T
>;

export type { TAuthStackParamList, TAuthNavigation, TAuthRoute };
