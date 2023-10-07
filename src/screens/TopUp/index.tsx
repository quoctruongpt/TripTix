import { Chip, Input, Text } from "@rneui/themed";
import React from "react";
import { Keyboard, TouchableWithoutFeedback, View } from "react-native";

const MoneySuggest = [100000, 200000, 300000];

export const TopUP: React.FC = () => {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={{ flex: 1, backgroundColor: "#fff", padding: 16 }}>
        <Text
          style={{ fontWeight: "600", textAlign: "center", marginBottom: 16 }}
        >
          <Text>Số dư trong ví:&nbsp;</Text>
          <Text style={{ color: "red", marginLeft: 4 }}>0đ</Text>
        </Text>
        <Input
          placeholder="Số tiền muốn nạp"
          style={{ textAlign: "center" }}
          keyboardType="numeric"
        />
        <View style={{ flexDirection: "row" }}>
          {MoneySuggest.map((item) => (
            <Chip
              title={item.toLocaleString("en-US", {
                style: "currency",
                currency: "VND",
              })}
              color={"#eff1f2"}
              titleStyle={{ color: "#4b4b4b" }}
              containerStyle={{ marginRight: 8 }}
            />
          ))}
        </View>
        <View
          style={{
            marginVertical: 16,
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <View
            style={{
              width: 4,
              height: 4,
              backgroundColor: "red",
              marginRight: 4,
            }}
          />
          <Text>Giới hạn giao dịch: trong khoảng 100,000đ đến 5,000,000đ</Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};
