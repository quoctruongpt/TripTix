import { Text } from "@rneui/themed";
import React from "react";
import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Header } from "../../../../common/Header";

export const Settings: React.FC = () => {
  return (
    <SafeAreaView>
      <Header title="Settings" />
    </SafeAreaView>
  );
};
