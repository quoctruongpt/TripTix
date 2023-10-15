import React, { useState } from "react";
import { StyleSheet, ScrollView, View, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Header } from "@components/Header";
import Icon from "react-native-vector-icons/FontAwesome";
import { Text } from "@rneui/base";
import { Select } from "@components/Select";
import dayjs from "dayjs";
import { useNavigation } from "@react-navigation/native";
import { TAppNavigation } from "@navigation/AppNavigator.type";

const listDate = [
  {
    dateString: dayjs().format("DD/MM"),
    dayOfWeek: dayjs().format("ddd"),
  },
  {
    dateString: dayjs().add(1, "day").format("DD/MM"),
    dayOfWeek: dayjs().add(1, "day").format("ddd"),
  },
  {
    dateString: dayjs().add(2, "day").format("DD/MM"),
    dayOfWeek: dayjs().add(2, "day").format("ddd"),
  },
  {
    dateString: dayjs().add(3, "day").format("DD/MM"),
    dayOfWeek: dayjs().add(3, "day").format("ddd"),
  },
  {
    dateString: dayjs().add(4, "day").format("DD/MM"),
    dayOfWeek: dayjs().add(4, "day").format("ddd"),
  },
];

const data = [
  {
    timeStart: "18:00",
    timeEnd: "08:00",
    price: 2500,
    placeStart: "Quy Nhơn",
    placeEnd: "Ha noi",
    type: "bed",
    distance: 1700,
    seatAvaiable: 20,
    suggestText: "Quý khách vui lòng thắt dây an toàn trước khi di chuyển",
  },
  {
    timeStart: "18:00",
    timeEnd: "08:00",
    price: 2500,
    type: "bed",
    placeStart: "Quy Nhơn",
    placeEnd: "Ha noi",
    distance: 1700,
    seatAvaiable: 20,
    suggestText: "Quý khách vui lòng thắt dây an toàn trước khi di chuyển",
  },
  {
    timeStart: "18:00",
    timeEnd: "08:00",
    price: 2500,
    type: "bed",
    placeStart: "Quy Nhơn",
    placeEnd: "Ha noi",
    distance: 1700,
    seatAvaiable: 20,
    suggestText: "Quý khách vui lòng thắt dây an toàn trước khi di chuyển",
  },
];

export const SelectRoute: React.FC = () => {
  const navigation = useNavigation<TAppNavigation<"SelectRoute">>();
  const [listDates, setListDates] = useState(listDate);
  const [selectedValuePrice, setSelectedValue] = useState(null);
  const [activeDate, setActiveDate] = useState(dayjs().format("DD/MM"));
  const [dataRoute, setDataRoute] = useState(data);

  const onActiveDate = (item) => {
    setActiveDate(item.dateString);
  };

  const onShowSelectSeatScreen = (item) => {
    navigation.navigate("SelectSeat");
  };
  const onTurnBack = () => {
    navigation.navigate("SearchRoute");
  };
  return (
    <SafeAreaView style={styles.container}>
      <Header>
        <View style={styles.headerContainer}>
          <Icon
            onPress={onTurnBack}
            name="chevron-left"
            size={22}
            color="white"
          />
          <Text h4 h4Style={styles.title}>
            Select Route
          </Text>
        </View>
      </Header>
      <View
        style={{
          elevation: 5,
          shadowColor: "#000",
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.5,
          shadowRadius: 4,
        }}
      >
        <ScrollView horizontal contentContainerStyle={{ padding: 0 }}>
          {listDates.map((item, index) => (
            <View
              key={index}
              style={{
                width: 80,
                height: 60,
                padding: 10,
                marginTop: 5,
                marginHorizontal: 5,
                borderRadius: 5,
                backgroundColor: `${
                  activeDate == item.dateString ? "#ff4000" : "#fff"
                }`,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
              }}
            >
              <Text
                onPress={() => onActiveDate(item)}
                style={{
                  color: `${activeDate == item.dateString ? "#fff" : "#000"}`,
                }}
              >
                {item.dayOfWeek}
              </Text>
              <Text
                onPress={() => onActiveDate(item)}
                style={{
                  color: `${
                    activeDate == item.dateString ? "#ff4000" : "#000"
                  }`,
                  backgroundColor: "#fff",
                  width: "90%",
                  marginTop: 5,
                  borderRadius: 10,
                  textAlign: "center",
                }}
              >
                {item.dateString}
              </Text>
            </View>
          ))}
        </ScrollView>
        <View
          style={{
            display: "flex",
            justifyContent: "space-between",
            flexDirection: "row",
            paddingHorizontal: 5,
          }}
        >
          <View style={{ width: "30%", marginRight: 5 }}>
            <Select
              placeholder="Price"
              items={[
                { label: "1-1000", value: "1" },
                { label: "1000-10000", value: "2" },
                { label: "10000-100000", value: "3" },
              ]}
            />
          </View>
          <View style={{ width: "30%", marginRight: 5 }}>
            <Select
              placeholder="Seat Type"
              items={[
                { label: "Normal", value: "1" },
                { label: "Vip", value: "2" },
                { label: "Premium", value: "3" },
              ]}
            />
          </View>
          <View style={{ width: "30%", marginRight: 5 }}>
            <Select
              placeholder="Time"
              items={[
                { label: "1 hour", value: "1" },
                { label: "2 hour", value: "2" },
                { label: "3 hour", value: "3" },
              ]}
            />
          </View>
        </View>
      </View>

      <ScrollView
        style={{
          flex: 1,
          padding: 0,
          zIndex: -1,
        }}
      >
        {dataRoute.map((d, index) => (
          <TouchableOpacity onPress={() => onShowSelectSeatScreen(d)}>
            <View
              style={{
                display: "flex",
                flexDirection: "column",
                width: "100%",
                shadowColor: "#000000",
                padding: 10,
                borderTopWidth: 1,
                borderColor: "gray",
              }}
            >
              <View
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  flexDirection: "row",
                }}
              >
                <View
                  style={{
                    justifyContent: "flex-start",
                    flexDirection: "row",
                  }}
                >
                  <Text style={{ fontWeight: "600" }}>
                    {d.timeStart} - {d.timeEnd}
                  </Text>
                </View>
                <View
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                    minWidth: 60,
                  }}
                >
                  <Icon name="battery" size={12} color="gray" />
                  <Icon name="hourglass" size={12} color="gray" />
                  <Icon name="wifi" size={12} color="gray" />
                </View>
              </View>
              <View
                style={{
                  marginTop: 5,
                  padding: 5,
                  backgroundColor: "#A9A9A9",
                  width: 220,
                  borderRadius: 20,
                }}
              >
                <Text>
                  {d.price} - {d.type} - {d.seatAvaiable} Seat(s) availabel
                </Text>
              </View>
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  marginTop: 15,
                  paddingHorizontal: 15,
                }}
              >
                <View
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <Icon name="map-marker" size={14} color="red" />
                  <View
                    style={{
                      width: 2,
                      backgroundColor: "#A9A9A9",
                      height: 40,
                      borderRadius: 5,
                    }}
                  ></View>
                  <Icon name="map-marker" size={14} color="green" />
                </View>
                <View
                  style={{
                    marginLeft: 15,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    justifyContent: "space-between",
                  }}
                >
                  <Text style={{ fontSize: 18 }}>{d.placeStart}</Text>
                  <Text style={{ color: "#A9A9A9" }}>Route:{d.distance}</Text>
                  <Text style={{ fontSize: 18 }}>{d.placeEnd}</Text>
                </View>
              </View>
              <Text
                style={{
                  marginLeft: 35,
                  marginTop: 10,
                  fontSize: 16,
                  color: "#FF8C00",
                }}
              >
                {d.suggestText}
              </Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    padding: 0,
  },
  headerContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    flexWrap: "nowrap",
    alignItems: "center",
  },
  title: {
    display: "flex",
    justifyContent: "flex-start",
    width: "60%",
    marginBottom: 0,
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});
