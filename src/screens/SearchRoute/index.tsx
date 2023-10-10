import { Chip, Divider, Text } from "@rneui/themed";
import React from "react";
import { TouchableOpacity, View } from "react-native";
import { ButtonSwitch } from "./components/ButtonSwitch";
import { Item } from "./components/Item";
import { styles } from "./styles";
import { DatePicker } from "@components/DatePicker";
import { ChooseProvince } from "@components/ChooseProvince";
import { Controller, useForm } from "react-hook-form";

const List = [
  {
    id: "1",
    title: "Ha Noi",
  },
  {
    id: "2",
    title: "HCM",
  },
  {
    id: "3",
    title: "Phu Tho",
  },
  {
    id: "4",
    title: "Hung Yen",
  },
  {
    id: "5",
    title: "Nam Dinh",
  },
];

export const SearchRoute: React.FC = () => {
  const { control, setValue, getValues } = useForm({
    defaultValues: {
      from: "3",
      to: "4",
      date: new Date(),
    },
  });

  const handleSwitch = () => {
    const from = getValues("from");
    const to = getValues("to");
    setValue("from", to);
    setValue("to", from);
  };

  return (
    <View style={styles.container}>
      <View style={styles.wrap}>
        <View style={styles.routeWrap}>
          <Controller
            control={control}
            name="from"
            render={({ field: { value, onChange } }) => (
              <ChooseProvince
                value={value}
                renderButton={(title, onPress) => (
                  <Item label="Điểm đi" value={title} onPress={onPress} />
                )}
                data={List}
                onChange={onChange}
              />
            )}
          />
          <ButtonSwitch onPress={handleSwitch} />
          <Controller
            control={control}
            name="to"
            render={({ field: { value, onChange } }) => (
              <ChooseProvince
                value={value}
                renderButton={(title, onPress) => (
                  <Item label="Điểm đến" value={title} onPress={onPress} />
                )}
                data={List}
                onChange={onChange}
              />
            )}
          />
        </View>
        <Divider />
        <View style={styles.timeWrap}>
          <Controller
            control={control}
            name="date"
            render={({ field: { value, onChange } }) => (
              <DatePicker
                value={value}
                onConfirm={onChange}
                renderButton={(title, onPress) => (
                  <Item
                    label="Ngày khởi hành"
                    value={title}
                    onPress={onPress}
                  />
                )}
                placeholder=""
              />
            )}
          />
        </View>
        <Chip
          title={"Tìm kiếm"}
          containerStyle={styles.buttonSearch}
          buttonStyle={{ backgroundColor: "#ef5222" }}
        />
      </View>
    </View>
  );
};
