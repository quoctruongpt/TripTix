import { Button } from "@rneui/themed";
import React from "react";
import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { StyleSheet, ScrollView } from "react-native";
import { Header } from "../../common/Header";

export const History: React.FC = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Header title="History" />
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    padding: 0,
  },
});
