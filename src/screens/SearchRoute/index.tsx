import { Chip, Divider, Text } from "@rneui/themed";
import React, { useEffect, useState } from "react";
import { TouchableOpacity, View } from "react-native";
import { ButtonSwitch } from "./components/ButtonSwitch";
import { Item } from "./components/Item";
import { styles } from "./styles";
import { DatePicker } from "@components/DatePicker";
import { ChooseProvince } from "@components/ChooseProvince";
import { Controller, useForm } from "react-hook-form";
import { useNavigation } from "@react-navigation/native";
import { TAppNavigation } from "@navigation/AppNavigator.type";
import { storage } from "@storage/index";
import { Keys } from "@constants/storage";
import dayjs from "dayjs";
import { getRouteInfo } from "@httpClient/trip.api";

export const SearchRoute: React.FC = () => {
  const navigation = useNavigation<TAppNavigation<"SearchRoute">>();
  const { control, setValue, getValues, handleSubmit } = useForm({
    defaultValues: {
      from: "1",
      to: "19",
      date: new Date(),
    },
  });

  const [provinces, setProvinces] = useState([]);

  useEffect(() => {
    getProvinces();
  }, []);

  const getProvinces = async () => {
    const jsonProvinces = await storage.getItem(Keys.Provinces);
    const _provinces = JSON.parse(jsonProvinces ?? "");
    const _provincesConvert = _provinces
      ? _provinces.map((item) => ({
          id: item.code.toString(),
          title: item.name,
        }))
      : [];
    setProvinces(_provincesConvert);
  };

  const handleSwitch = () => {
    const from = getValues("from");
    const to = getValues("to");
    setValue("from", to);
    setValue("to", from);
  };

  const handleSearch = handleSubmit(async (data: any) => {
    try {
      const hihi = await getRouteInfo(data.from, data.to);
    } catch {}
    // navigation.navigate("SelectRoute", {
    //   fromId: data.from,
    //   toId: data.to,
    //   date: dayjs().unix(data.date),
    // });
  });

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
                data={provinces}
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
                data={provinces}
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
          onPress={handleSearch}
        />
      </View>
    </View>
  );
};
