import { RouteProp } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

type TRootStackParamList = {
  Welcome: undefined;
  Home: undefined;
  Role: undefined;
  LoginOrRegisterForm: undefined;
  SignIn: undefined;
  OTP: undefined;
};

type TNavigation<T extends keyof TRootStackParamList> =
  NativeStackNavigationProp<TRootStackParamList, T>;

type TRoute<T extends keyof TRootStackParamList> = RouteProp<
  TRootStackParamList,
  T
>;

export type { TRootStackParamList, TNavigation, TRoute };
