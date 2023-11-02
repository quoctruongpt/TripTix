import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Home } from "@screens/Home";
import { History } from "@screens/History";
import { Notification } from "@screens/Notification";
import { Profile } from "@screens/Profile";
import { RouteProp, ParamListBase } from "@react-navigation/native";
import Icon from "react-native-vector-icons/AntDesign";
import { useStore } from "@store/index";
import { HomeDriver } from "@screens/Modules/Driver/Home";

const Tab = createBottomTabNavigator();

const IconsBottomTab = {
  Home: "home",
  History: "stopwatch",
  Notification: "notifications-sharp",
  Profile: "person-sharp",
};

const Colors = {
  Active: "#f2754f",
  Inactive: "#637280",
};

export const BottomTabNavigator: React.FC = () => {
  const {
    authentication: { userInfo },
  } = useStore();

  console.log("userInfo bottom", userInfo.role);
  if (userInfo.role == "ROLE_CUSTOMER") {
    return (
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarIcon: ({ focused }) => tabBarIcon(focused, route),
          tabBarActiveTintColor: Colors.Active,
          tabBarInactiveTintColor: Colors.Inactive,
        })}
      >
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="History" component={History} />
        <Tab.Screen name="Notification" component={Notification} />
        <Tab.Screen name="Profile" component={Profile} />
      </Tab.Navigator>
    );
  } else {
    return <HomeDriver />;
  }
};

const tabBarIcon = (
  focused: boolean,
  route: RouteProp<ParamListBase, string>
) => {
  return (
    <Icon
      name={IconsBottomTab[route.name]}
      size={22}
      color={focused ? Colors.Active : Colors.Inactive}
    />
  );
};
