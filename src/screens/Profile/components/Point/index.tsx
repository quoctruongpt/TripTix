import { Header } from "@components/Header";
import { Text } from "@rneui/themed";
import React from "react";
import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export const Point: React.FC = () => {
  return (
    <SafeAreaView>
      <Header title="Point" />
    </SafeAreaView>
  );
};
