import React from "react";
import { StyleSheet, ScrollView, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { Header } from "@components/Header";

export const Notification: React.FC = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Header title="Notification" color="red" colorText="white" />
      <ScrollView style={{ flex: 1, padding: 0 }}>
        <Text>Không có thông báo</Text>
      </ScrollView>
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
