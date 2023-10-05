import React from "react";
import Icon from "react-native-vector-icons/FontAwesome5";
import { View } from "react-native";
import { Text } from "@rneui/themed";

export const WalletItem: React.FC<{ icon: string; title: string }> = ({
  icon,
  title,
}) => {
  return (
    <View style={{ alignItems: "center", flex: 1 }}>
      <Icon name={icon} size={24} />
      <Text>{title}</Text>
    </View>
  );
};
