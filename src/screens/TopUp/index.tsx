import { Button, CheckBox, Chip, Divider, Input, Text } from "@rneui/themed";
import React from "react";
import {
  Keyboard,
  SafeAreaView,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { styles } from "./styles";
import { Controller, useForm } from "react-hook-form";

const MoneySuggest = [100000, 200000, 300000];
const Types = [
  { id: "momo", title: "MoMo", icon: "" },
  { id: "zalo", title: "ZaloPay", icon: "" },
];

export const TopUP: React.FC = () => {
  const {
    control,
    setValue,
    formState: { isValid },
    handleSubmit,
  } = useForm({
    defaultValues: {
      money: "",
      method: "",
    },
  });

  const onChooseSuggest = (value: number) => {
    setValue("money", value.toString());
  };

  const handleTopUp = (data) => {};

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.container}>
          <View style={styles.body}>
            <Text style={styles.walletText}>
              <Text>Số dư trong ví:&nbsp;</Text>
              <Text style={styles.walletNumber}>0đ</Text>
            </Text>
            <Controller
              control={control}
              name="money"
              render={({ field: { value, onChange } }) => (
                <Input
                  placeholder="Số tiền muốn nạp"
                  style={styles.input}
                  keyboardType="numeric"
                  value={value}
                  onChangeText={onChange}
                />
              )}
            />
            <View style={styles.suggestWrap}>
              {MoneySuggest.map((item, index) => (
                <Chip
                  key={index}
                  title={item.toLocaleString("en-US", {
                    style: "currency",
                    currency: "VND",
                  })}
                  color={"#eff1f2"}
                  titleStyle={{ color: "#4b4b4b" }}
                  containerStyle={{ marginRight: 8 }}
                  onPress={() => onChooseSuggest(item)}
                />
              ))}
            </View>
            <View style={styles.noteWrap}>
              <View style={styles.noteDot} />
              <Text>
                Giới hạn giao dịch: trong khoảng 100,000đ đến 5,000,000đ
              </Text>
            </View>
            <View style={styles.methodTitleWrap}>
              <Text style={{ fontWeight: "800" }}>Chọn hình thức nạp</Text>
            </View>
            <Controller
              control={control}
              name="method"
              render={({ field: { value, onChange } }) => (
                <>
                  {Types.map((item, index) => (
                    <CheckBox
                      key={index}
                      title={item.title}
                      checkedIcon="check-circle"
                      uncheckedIcon="circle-thin"
                      checkedColor="#ef5222"
                      checked={value === item.id}
                      onPress={() => onChange(item.id)}
                    />
                  ))}
                </>
              )}
            />
          </View>
          <Button
            title={"Xác nhận"}
            buttonStyle={{ borderRadius: 20 }}
            disabled={!isValid}
            onPress={handleSubmit(handleTopUp)}
          />
        </View>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};
