import { Avatar, Button, Divider, Text } from "@rneui/themed";
import React from "react";
import { View, ScrollView, StyleSheet } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Icon from "react-native-vector-icons/FontAwesome5";
import { WalletItem } from "./components/WalletItem";
import { PayBox } from "./components/PayBox";
import { UserInfoBox } from "./components/UserInfoBox";
import { Banner } from "./components/Banner";

export const Home: React.FC = () => {
  const { top } = useSafeAreaInsets();
  return (
    <View style={styles.container}>
      <UserInfoBox />
      <PayBox />
      <ScrollView style={{ flex: 1, padding: 16 }}>
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
