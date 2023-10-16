import { ButtonApp } from "@components/Button";
import { ChooseProvince } from "@components/ChooseProvince";
import { Steps } from "@components/Steps";
import { TAppNavigation } from "@navigation/AppNavigator.type";
import { useNavigation } from "@react-navigation/native";
import { Chip, Input, Text } from "@rneui/themed";
import React from "react";
import { SafeAreaView, View, StyleSheet, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/Feather";

const HHHH = [
  {
    time: "18:00",
    title: "Bến xe An Nhơn",
    desc: "Route: 720km",
    icon: { name: "my-location", color: "green" },
  },
  {
    time: "18:00",
    title: "Bến xe An Nhơn",
    desc: "Route: 720km",
    icon: { name: "location-on", color: "red" },
  },
];

export const DepartureInformation: React.FC = () => {
  const navigation = useNavigation<TAppNavigation<"DepartureInformation">>();

  const handleConfirm = () => {
    navigation.navigate("TicketInformation");
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#f7f7f7" }}>
      <View style={styles.box}>
        <Chip
          title={"285,000d - Bed"}
          containerStyle={{ flexDirection: "row" }}
          buttonStyle={{ backgroundColor: "#ccc" }}
          titleStyle={{ fontWeight: "700", color: "#000" }}
        />

        <Steps data={HHHH} />
      </View>
      <View style={[styles.box, { flexDirection: "row" }]}>
        <View style={{ flex: 1 }}>
          <Text>Số ghế đã chọn</Text>
          <Text style={styles.value}>A14</Text>
        </View>
        <TouchableOpacity>
          <Text style={{ color: "#f6a288" }}>Chọn lại</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.box}>
        <Text>Vui lòng chọn điểm đón:</Text>
        <ChooseProvince
          title="Chọn điểm đón"
          renderButton={(title, onPress) => (
            <TouchableOpacity
              onPress={onPress}
              style={{
                borderWidth: 1,
                borderColor: "#ccc",
                borderRadius: 4,
                padding: 12,
                marginTop: 16,
                flexDirection: "row",
              }}
            >
              <Text style={{ flex: 1 }}>{title}</Text>
              <Icon name="chevron-down" size={20} />
            </TouchableOpacity>
          )}
        />
      </View>
      <View style={styles.box}>
        <Text>Thông tin khách</Text>
        <Input
          value="Hai Hung"
          inputStyle={{ fontSize: 16, fontWeight: "700" }}
        />
        <Input value="0964878794" inputStyle={{ fontSize: 16 }} />
      </View>
      <View style={[styles.box, { flex: 1 }]} />
      <ButtonApp
        title="Continue"
        onPress={handleConfirm}
        buttonStyle={{
          backgroundColor: "red",
          margin: 10,
        }}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  box: { padding: 16, backgroundColor: "#fff", marginBottom: 16 },
  value: { fontSize: 16, fontWeight: "700", lineHeight: 24 },
});
