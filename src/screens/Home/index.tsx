import React from "react";
import { View, ScrollView, StyleSheet } from "react-native";
import { PayBox } from "./components/PayBox";
import { UserInfoBox } from "./components/UserInfoBox";
import { Banner } from "./components/Banner";
import { ListActions } from "./components/ListActions";
import { useStore } from "@store/index";

export const Home: React.FC = () => {
  const {
    authentication: { userInfo },
  } = useStore();
  console.log(userInfo);

  return (
    <View style={styles.container}>
      <UserInfoBox name={userInfo.fullName} />
      <PayBox coins={userInfo.coins} voucherCoins={userInfo.voucherCoins} />
      <ScrollView style={{ flex: 1, padding: 16 }}>
        <ListActions />
        <Banner />
        <Banner />
        <Banner />
      </ScrollView>
    </View>
  );
};

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
