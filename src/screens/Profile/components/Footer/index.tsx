import { Text } from "@rneui/themed";
import React from "react";
import { View } from "react-native";

export const Footer: React.FC = () => {
  return (
    <View
      style={{
        flex: 1,
        display: "flex",
        flexDirection: "column",
        width: "100%",
      }}
    >
      <View
        style={{
          backgroundColor: "white",
          flexDirection: "column",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          paddingHorizontal: 40,
          paddingVertical: 20,
        }}
      >
        <Text
          style={{
            width: "100%",
            color: "#000",
            fontSize: 12,
            fontWeight: "bold",
            display: "flex",
            justifyContent: "center",
            textAlign: "center",
          }}
        >
          Công ty TNHH MeiJa JongPin
        </Text>
        <Text
          style={{
            color: "#000",
            fontSize: 12,
            fontWeight: "300",
            textAlign: "center",
          }}
        >
          Tầng 21, tòa nhà Center Building, Hapulico Complex, số 1 Nguyễn Huy
          Tưởng, p. Thanh Xuân Trung, quận Thanh Xuân, Hà Nội. Điện thoại: 024
          7309 5555, máy lẻ 370.
        </Text>
        <Text
          style={{
            width: "100%",
            color: "#000",
            fontSize: 12,
            fontWeight: "bold",
            display: "flex",
            justifyContent: "center",
            textAlign: "center",
          }}
        >
          Hotline:
        </Text>
        <Text
          style={{
            color: "#000",
            fontSize: 12,
            fontWeight: "300",
            textAlign: "center",
          }}
        >
          0979221694
        </Text>
        <Text
          style={{
            width: "100%",
            color: "#000",
            fontSize: 12,
            fontWeight: "bold",
            display: "flex",
            justifyContent: "center",
            textAlign: "center",
          }}
        >
          Website:
        </Text>
        <Text
          style={{
            color: "#000",
            fontSize: 12,
            fontWeight: "300",
            textAlign: "center",
          }}
        >
          bettermad.com
        </Text>
      </View>
    </View>
  );
};
