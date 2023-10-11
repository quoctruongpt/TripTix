import { Avatar, Button, Divider, Text } from "@rneui/themed";
import React from "react";
import { View, ScrollView, StyleSheet, TouchableOpacity } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { PayBox } from "./components/PayBox";
import { UserInfoBox } from "./components/UserInfoBox";
import { Banner } from "./components/Banner";
import { ListActions } from "./components/ListActions";

export const Home: React.FC = () => {
  const { top } = useSafeAreaInsets();
  return (
    <View style={styles.container}>
      <UserInfoBox />
      <PayBox />
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
