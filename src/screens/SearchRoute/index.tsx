import { Chip } from "@rneui/themed";
import React, { useEffect, useState } from "react";
import { ScrollView, View } from "react-native";
import { ButtonSwitch } from "./components/ButtonSwitch";
import { Item } from "./components/Item";
import { styles } from "./styles";
import { ChooseProvince } from "@components/ChooseProvince";
import { Controller, useForm } from "react-hook-form";
import { useNavigation } from "@react-navigation/native";
import { TAppNavigation } from "@navigation/AppNavigator.type";
import { storage } from "@storage/index";
import { Keys } from "@constants/storage";
import { getRouteInfo } from "@httpClient/trip.api";
import { StatusApiCall } from "@constants/global";
import { useToast } from "react-native-toast-notifications";
import { Banner } from "./components/Banner";

const banners = [
  {
    from: { id: "1", title: "Thành phố Hà Nội" },
    to: {
      id: "33",
      title: "Hưng Yên",
    },
  },
  {
    from: { id: "52", title: "Tỉnh Bình Định" },
    to: {
      id: "48",
      title: "Thành phố Đà Nẵng",
    },
  },
  {
    from: { id: "75", title: "Tỉnh Đồng Nai" },
    to: {
      id: "87",
      title: "Tỉnh Đồng Tháp",
    },
  },
];

export const SearchRoute: React.FC = () => {
  const toast = useToast();
  const navigation = useNavigation<TAppNavigation<"SearchRoute">>();
  const { control, setValue, getValues, handleSubmit } = useForm({
    defaultValues: {
      from: "68",
      to: "79",
    },
  });

  const [provinces, setProvinces] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  console.log(provinces);

  useEffect(() => {
    getProvinces();
  }, []);

  const getProvinces = async () => {
    const jsonProvinces = await storage.getItem(Keys.Provinces);

    const _provinces = JSON.parse(jsonProvinces ?? "");
    const _provincesConvert = _provinces
      ? _provinces.map((item) => ({
          id: item.idProvince.toString(),
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

  const handleSearch = handleSubmit(async (dataForm: any) => {
    navigation.navigate("SelectRoute", {
      fromId: dataForm.from,
      toId: dataForm.to,
    });
  });

  const handleChooseBanner = (fromId: string, toId: string) => {
    setValue("from", fromId);
    setValue("to", toId);
  };

  return (
    <View style={styles.container}>
      <View style={styles.wrap}>
        <View style={styles.routeWrap}>
          <View style={{ flex: 1 }}>
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
          </View>
          <View style={{ marginHorizontal: 8 }}>
            <ButtonSwitch onPress={handleSwitch} />
          </View>
          <View style={{ flex: 1 }}>
            <Controller
              control={control}
              name="to"
              render={({ field: { value, onChange } }) => (
                <ChooseProvince
                  value={value}
                  renderButton={(title, onPress) => (
                    <Item
                      label="Điểm đến"
                      value={title}
                      onPress={onPress}
                      style={{ alignItems: "flex-end" }}
                      textStyle={{ textAlign: "right" }}
                    />
                  )}
                  data={provinces}
                  onChange={onChange}
                />
              )}
            />
          </View>
        </View>

        <Chip
          title={"Tìm kiếm"}
          containerStyle={styles.buttonSearch}
          buttonStyle={{ backgroundColor: "#ef5222" }}
          onPress={handleSearch}
          disabled={isLoading}
        />
      </View>
      <ScrollView>
        {banners.map((item, index) => (
          <Banner from={item.from} to={item.to} onPress={handleChooseBanner} />
        ))}
      </ScrollView>
    </View>
  );
};
