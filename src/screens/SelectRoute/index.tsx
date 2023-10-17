import React, { useEffect, useState } from "react";
import { StyleSheet, ScrollView, View, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { Text } from "@rneui/base";
import { Select } from "@components/Select";
import dayjs from "dayjs";
import { useNavigation } from "@react-navigation/native";
import { TAppNavigation } from "@navigation/AppNavigator.type";
import { useRoute } from "@react-navigation/native";
import { getTrips } from "@httpClient/trip.api";
import { useToast } from "react-native-toast-notifications";

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

export const SelectRoute: React.FC = () => {
  const toast = useToast();

  const navigation = useNavigation<TAppNavigation<"SelectRoute">>();
  const [listDates, setListDates] = useState(listDate);
  const [selectedValuePrice, setSelectedValue] = useState(null);
  const [activeDate, setActiveDate] = useState(dayjs().format("DD/MM"));
  const [dataRoute, setDataRoute] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const route = useRoute();

  const onActiveDate = (item) => {
    setActiveDate(item.dateString);
  };

  const onShowSelectSeatScreen = (item) => {
    navigation.navigate("SelectSeat");
  };
  const onTurnBack = () => {
    navigation.navigate("SearchRoute");
  };

  useEffect(() => {
    handleGetTrips();
  }, []);

  const handleGetTrips = async () => {
    try {
      setIsLoading(true);
      const data = await getTrips(1, "15-10-2023 06:00:00");
      if (!data.reponse) {
        toast.show("Có lỗi xảy ra. Vui lòng thử lại", {
          type: "danger",
          placement: "top",
          duration: 2000,
        });
      }

      setDataRoute(data);

      throw new Error();
    } catch {
      toast.show("Có lỗi xảy ra. Vui lòng thử lại", {
        type: "danger",
        placement: "top",
        duration: 2000,
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          marginTop: 0,
        }}
      >
        <ScrollView horizontal contentContainerStyle={{ padding: 0 }}>
          {listDates.map((item, index) => (
            <TouchableOpacity onPress={() => onActiveDate(item)} key={index}>
              <View
                key={index}
                style={{
                  width: 80,
                  height: 60,
                  paddingHorizontal: 10,
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
                  style={{
                    color: `${activeDate == item.dateString ? "#fff" : "#000"}`,
                  }}
                >
                  {item.dayOfWeek}
                </Text>
                <Text
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
            </TouchableOpacity>
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
          <TouchableOpacity
            key={index}
            onPress={() => onShowSelectSeatScreen(d)}
          >
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
                    {dayjs(d.startTime).format("HH:mm")} -{" "}
                    {dayjs(d.endTime).format("HH:mm")}
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
                  {d.fare} - {d.busDTO.type} - {d.availableSeat} Seat(s)
                  availabel
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
                  <Text style={{ fontSize: 18 }}>
                    {d.routeDTO.departurePoint}
                  </Text>
                  <Text style={{ color: "#A9A9A9" }}>
                    Route:{d.routeDTO.distance}
                  </Text>
                  <Text style={{ fontSize: 18 }}>{d.routeDTO.destination}</Text>
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
                Chọn chuyến đi này
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
    margin: 0,
    flex: 1,
  },
});
