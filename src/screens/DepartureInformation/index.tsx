import { ChooseProvince } from "@components/ChooseProvince";
import { Steps } from "@components/Steps";
import { TAppNavigation } from "@navigation/AppNavigator.type";
import { useNavigation } from "@react-navigation/native";
import { Chip, Input, Text } from "@rneui/themed";
import { formatPrice } from "@utils/price";
import React from "react";
import { SafeAreaView, View, StyleSheet, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/Feather";
import Icon1 from "react-native-vector-icons/FontAwesome5";

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
  const finalPrice = 285000;
  const type = "Bed";
  const routeDetail = {
    timeStart: 1234,
    timeEnd: 1234,
    from: "Bến xe An Nhơn",
    to: "Bến xe Bình Định",
    distance: 720,
    note: "Quý khách đang chọn tuyến đường...",
  };
  const seats = ["A1", "A2"];
  const pickupLocations = [
    { id: 1, title: "Bến xe" },
    { id: 2, title: "Bến xe" },
  ];
  const users = { name: "Quoc Truong", phone: "09654841" };

  const handleConfirm = () => {
    navigation.navigate("TicketInformation");
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#f7f7f7" }}>
      <View style={styles.box}>
        <Chip
          title={`${formatPrice(finalPrice)} - ${type}`}
          containerStyle={{ flexDirection: "row" }}
          buttonStyle={{ backgroundColor: "#ccc" }}
          titleStyle={{ fontWeight: "700", color: "#000" }}
        />

        <Steps data={HHHH} />
      </View>
      <View style={[styles.box, { flexDirection: "row" }]}>
        <View style={{ flex: 1 }}>
          <Text>Số ghế đã chọn</Text>
          <Text style={styles.value}>{seats.join(", ")}</Text>
        </View>
        <TouchableOpacity onPress={navigation.goBack}>
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
      <Chip
        title="Tiếp tục"
        containerStyle={{ padding: 16 }}
        onPress={handleConfirm}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  box: { padding: 16, backgroundColor: "#fff", marginBottom: 16 },
  value: { fontSize: 16, fontWeight: "700", lineHeight: 24 },
});
