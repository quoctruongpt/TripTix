import { ButtonApp } from "@components/Button";
import { ChooseProvince } from "@components/ChooseProvince";
import { Steps } from "@components/Steps";
import { TAppNavigation } from "@navigation/AppNavigator.type";
import { KeyboardAwareScrollView } from "@pietile-native-kit/keyboard-aware-scrollview";
import { useNavigation } from "@react-navigation/native";
import { Chip, Input, Text } from "@rneui/themed";
import { useStore } from "@store/index";
import { formatPrice } from "@utils/price";
import React from "react";
import {
  SafeAreaView,
  View,
  StyleSheet,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import Icon from "react-native-vector-icons/Feather";
import { useForm, Controller } from "react-hook-form";

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
  const {
    authentication: { userInfo },
  } = useStore();
  const pickupLocations = [
    { id: "1", title: "Bến xe" },
    { id: "2", title: "Bến xe" },
  ];
  const { control } = useForm({
    defaultValues: {
      pickUpId: pickupLocations[0]?.id,
      name: userInfo.fullName,
      phone: userInfo.phone,
    },
  });
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
  console.log(userInfo);

  const handleConfirm = () => {
    navigation.navigate("TicketInformation");
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <SafeAreaView style={{ flex: 1, backgroundColor: "#f7f7f7" }}>
        <KeyboardAwareScrollView style={{ flex: 1 }}>
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
            <Controller
              control={control}
              name="pickUpId"
              render={({ field: { value, onChange } }) => (
                <ChooseProvince
                  title="Chọn điểm đón"
                  data={pickupLocations}
                  onChange={onChange}
                  value={value}
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
              )}
            />
          </View>
          <View style={styles.box}>
            <Controller
              control={control}
              name="name"
              render={({ field: { value, onChange } }) => (
                <Input
                  label="Thông tin khách"
                  value={value}
                  onChangeText={onChange}
                  inputStyle={{ fontSize: 16, fontWeight: "700" }}
                />
              )}
            />
            <Controller
              control={control}
              name="phone"
              render={({ field: { value, onChange } }) => (
                <Input
                  value={value}
                  onChangeText={onChange}
                  inputStyle={{ fontSize: 16 }}
                />
              )}
            />
          </View>
          <View style={[styles.box, { flex: 1 }]} />
        </KeyboardAwareScrollView>
        <ButtonApp
          title="Continue"
          onPress={handleConfirm}
          buttonStyle={{
            backgroundColor: "red",
            margin: 10,
          }}
        />
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  box: { padding: 16, backgroundColor: "#fff", marginBottom: 16 },
  value: { fontSize: 16, fontWeight: "700", lineHeight: 24 },
});
