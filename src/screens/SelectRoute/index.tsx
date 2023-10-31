import React, { useEffect, useMemo, useState } from "react";
import {
  StyleSheet,
  ScrollView,
  View,
  TouchableOpacity,
  RefreshControl,
} from "react-native";
import { SafeAreaView } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { Text } from "@rneui/base";
import { Select } from "@components/Select";
import dayjs from "dayjs";
import { useNavigation } from "@react-navigation/native";
import { TAppNavigation, TAppRoute } from "@navigation/AppNavigator.type";
import { useRoute } from "@react-navigation/native";
import { getTrips } from "@httpClient/trip.api";
import { useToast } from "react-native-toast-notifications";
import { StatusApiCall } from "@constants/global";
import { formatPrice } from "@utils/price";
import {
  CarTypeArray,
  CarTypes,
  PriceTypeArray,
  PriceTypeId,
} from "@constants/route";
import { Steps } from "@components/Steps";
import { useStore } from "@store/index";
import { DatePicker } from "@components/DatePicker";
const utc = require("dayjs/plugin/utc");
const timezone = require("dayjs/plugin/timezone");
dayjs.extend(utc);
dayjs.extend(timezone);

export const SelectRoute: React.FC = () => {
  const toast = useToast();
  const {
    route: { setRouteInfo },
    authentication: {
      userInfo: { coins },
    },
  } = useStore();

  const navigation = useNavigation<TAppNavigation<"SelectRoute">>();
  const [dateSelected, setDateSelected] = useState<Date>(new Date());
  const [dataRoute, setDataRoute] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [filter, setFilter] = useState({ price: null, type: null, time: null });

  const dataRouteFilter = useMemo(() => {
    const dataFilterByType = dataRoute.filter((item) =>
      filter.type ? item.busDTO.type === filter.type : true
    );
    if (filter.price) {
      dataFilterByType.sort((a, b) =>
        filter.price === PriceTypeId.Up ? a.fare - b.fare : b.fare - a.fare
      );
    }

    return dataFilterByType;
  }, [filter, dataRoute]);

  const { routeId } = useRoute<TAppRoute<"SelectRoute">>().params;

  const handleChooseRoute = (item) => {
    setRouteInfo(item);
    navigation.navigate("SelectSeat");
  };

  useEffect(() => {
    handleGetTrips();
  }, [dateSelected]);

  const updateFilter = (data: any) => {
    setFilter((pre) => ({ ...pre, ...data }));
  };

  const getIconStep = (length, index) => {
    if (index === 0) {
      return { name: "my-location", color: "green" };
    }

    if (index === length - 1) {
      return { name: "location-on", color: "red" };
    }

    return { name: "location-searching", color: "orange" };
  };

  const handleGetTrips = async () => {
    try {
      setIsLoading(true);
      const params = {
        routeId,
        startTime: dayjs(dateSelected).add(7, "hour").unix(),
      };
      const { data } = await getTrips(params);
      if (data.status === StatusApiCall.Success) {
        const routeData = data.data.map((item, index) => {
          return {
            ...item,
            listtripStopDTO: item.listtripStopDTO.map((stopDTO, index) => {
              return {
                id: stopDTO.idStation,
                title: stopDTO.stationDTO.name,
                type: stopDTO.type,
                time: dayjs.unix(stopDTO.timeComess).utc().format("HH:mm"),
                icon: getIconStep(item.listtripStopDTO.length, index),
              };
            }),
          };
        });
        setDataRoute(routeData);
        return;
      }

      throw new Error();
    } catch (er) {
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
      <View>
        <View style={styles.container}></View>
        <View
          style={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "row",
            paddingHorizontal: 5,
          }}
        >
          <View style={{ width: "30%", marginRight: 5, marginVertical: 12 }}>
            <DatePicker
              value={dateSelected}
              onConfirm={(date) => setDateSelected(date)}
              placeholder="Birthday"
              minimumDate={new Date()}
              renderButton={(title, onPress) => (
                <TouchableOpacity
                  onPress={onPress}
                  style={{
                    backgroundColor: "#fafafa",
                    borderRadius: 8,
                    paddingVertical: 16,
                  }}
                >
                  <Text style={{ textAlign: "center", fontWeight: "700" }}>
                    {title}
                  </Text>
                </TouchableOpacity>
              )}
            />
          </View>
          <View style={{ width: "30%", marginRight: 5 }}>
            <Select
              placeholder="Price"
              items={PriceTypeArray}
              value={filter.price}
              onSelectItem={(e) => updateFilter({ price: e.value })}
            />
          </View>
          <View style={{ width: "30%", marginRight: 5 }}>
            <Select
              placeholder="Seat Type"
              items={CarTypeArray}
              value={filter.type}
              onSelectItem={(e) => updateFilter({ type: e.value })}
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
        refreshControl={
          <RefreshControl refreshing={isLoading} onRefresh={handleGetTrips} />
        }
      >
        {dataRouteFilter.map((d, index) => (
          <TouchableOpacity key={index} onPress={() => handleChooseRoute(d)}>
            <View
              style={{
                display: "flex",
                flexDirection: "column",
                width: "100%",
                shadowColor: "#000000",
                padding: 10,
                borderTopWidth: 1,
                borderColor: "gray",
                backgroundColor: coins >= d.fare ? "#fff" : "#fff7f5",
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
                  <Text style={{ fontWeight: "700" }}>
                    {dayjs.unix(d.startTimee).utc().format("HH:mm")} -{" "}
                    {dayjs.unix(d.endTimee).utc().format("HH:mm")}
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
              <View style={{ alignItems: "flex-start" }}>
                <View
                  style={{
                    marginTop: 5,
                    padding: 5,
                    backgroundColor: "#f0f1f3",
                    borderRadius: 20,
                  }}
                >
                  <Text style={{ fontWeight: "700" }}>
                    {formatPrice(d.fare)} - {CarTypes[d.busDTO.type]} -{" "}
                    {d.availableSeat} Seat(s) availabel
                  </Text>
                </View>
              </View>
              <Steps
                data={[
                  d?.listtripStopDTO[0],
                  d?.listtripStopDTO[d?.listtripStopDTO.length - 1],
                ]}
              />
              <Text
                style={{
                  marginLeft: 35,
                  marginTop: 10,
                  fontSize: 16,
                  color: "#FF8C00",
                }}
              >
                {d.busDTO.description}
              </Text>
            </View>
            {d.fare > coins && (
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  padding: 16,
                }}
              >
                <Text style={{ color: "red" }}>
                  Bạn còn thiếu {formatPrice(d.fare - coins)}
                </Text>
                <TouchableOpacity
                  style={{
                    marginLeft: 4,
                    backgroundColor: "orange",
                    padding: 4,
                    borderRadius: 4,
                  }}
                  onPress={() => navigation.navigate("TopUp")}
                >
                  <Text style={{ fontWeight: "700", color: "#fff" }}>
                    Nạp tiền
                  </Text>
                </TouchableOpacity>
              </View>
            )}
          </TouchableOpacity>
        ))}

        {dataRouteFilter.length <= 0 && (
          <Text style={{ textAlign: "center", color: "#ccc" }}>
            Không tìm thấy tuyến đường phù hợp
          </Text>
        )}
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
    backgroundColor: "#fff",
  },
});
