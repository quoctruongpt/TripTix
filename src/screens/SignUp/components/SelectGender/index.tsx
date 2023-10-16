import { ListGender } from "@constants/user";
import { CheckBox } from "@rneui/themed";
import React from "react";
import { View } from "react-native";

export const SelectGender: React.FC = ({
  value,
  onChange,
}: {
  value: string;
  onChange: (value: string) => void;
}) => {
  return (
    <View style={{ flexDirection: "row" }}>
      {ListGender.map((item, index) => (
        <CheckBox
          key={index}
          checked={value === item.value}
          onPress={() => onChange(item.value)}
          checkedIcon="dot-circle-o"
          uncheckedIcon="circle-o"
          title={item.label}
        />
      ))}
    </View>
  );
};
