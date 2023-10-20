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
import { CarTypes } from "@constants/route";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const schema = yup.object().shape({
  pickUpId: yup.string().required("Vui lòng chọn điểm đón"),
  name: yup
    .string()
    .required("Vui lòng nhập họ tên")
    .min(4, "Họ tên tối thiểu 4 ký tự"),
  phone: yup
    .string()
    .required("Vui lòng nhập số điệnthoaij")
    .min(10, "Số điện thoại phải chứa 10 ký tự")
    .max(10, "Số điện thoại phải chứa 10 ký tự"),
});

export const DepartureInformation: React.FC = () => {
  const navigation = useNavigation<TAppNavigation<"DepartureInformation">>();
  const {
    authentication: { userInfo },
    route: { routeInfo, seatSelected, setUserInformation },
  } = useStore();
  const {
    control,
    formState: { isValid },
    handleSubmit,
  } = useForm({
    defaultValues: {
      pickUpId: "",
      name: userInfo.fullName,
      phone: userInfo.phone,
    },
    resolver: yupResolver(schema),
  });

  const handleConfirm = (dataForm) => {
    setUserInformation(dataForm);
    navigation.navigate("TicketInformation");
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <SafeAreaView style={{ flex: 1, backgroundColor: "#f7f7f7" }}>
        <KeyboardAwareScrollView style={{ flex: 1 }}>
          <View style={styles.box}>
            <Chip
              title={`${formatPrice(routeInfo.fare)} - ${
                CarTypes[routeInfo.busDTO.type]
              }`}
              containerStyle={{ flexDirection: "row" }}
              buttonStyle={{ backgroundColor: "#ccc" }}
              titleStyle={{ fontWeight: "700", color: "#000" }}
            />

            <Steps data={routeInfo.listtripStopDTO} />
          </View>
          <View style={[styles.box, { flexDirection: "row" }]}>
            <View style={{ flex: 1 }}>
              <Text>Số ghế đã chọn</Text>
              <Text style={styles.value}>{seatSelected.join(", ")}</Text>
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
                  placeholder="Điểm đón"
                  data={routeInfo.listtripStopDTO}
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
                      <Text
                        style={{ flex: 1, color: title ? "black" : "#ccc" }}
                      >
                        {title ?? "Điểm đón"}
                      </Text>
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
                  editable={false}
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
                  editable={false}
                />
              )}
            />
          </View>
          <View style={[styles.box, { flex: 1 }]} />
        </KeyboardAwareScrollView>
        <ButtonApp
          title="Continue"
          onPress={handleSubmit(handleConfirm)}
          buttonStyle={{
            backgroundColor: "red",
            margin: 10,
          }}
          disabled={!isValid}
        />
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  box: { padding: 16, backgroundColor: "#fff", marginBottom: 16 },
  value: { fontSize: 16, fontWeight: "700", lineHeight: 24 },
});
