import { RouteProp } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

type TAppStackParamList = {
  BottomTabNavigator: undefined;
};

type TAppNavigation<T extends keyof TAppStackParamList> =
  NativeStackNavigationProp<TAppStackParamList, T>;

type TAppRoute<T extends keyof TAppStackParamList> = RouteProp<
  TAppStackParamList,
  T
>;

export type { TAppStackParamList, TAppNavigation, TAppRoute };
