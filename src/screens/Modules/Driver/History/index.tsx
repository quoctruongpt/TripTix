import { Button } from "@rneui/themed";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { FlatList, RefreshControl, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { StyleSheet } from "react-native";
import { Text } from "react-native-elements";
import { Header } from "@components/Header";
import Icon from "react-native-vector-icons/AntDesign";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { TAppNavigation } from "@navigation/AppNavigator.type";
import { DatePicker } from "@components/DatePicker";
import {
  CarTypeArray,
  CarTypes,
  PriceTypeArray,
  PriceTypeId,
} from "@constants/route";
import { Select } from "@components/Select";
import { ScrollView } from "react-native";
import dayjs from "dayjs";
import { Routes } from "./components/Routes";
import { DetailRoute } from "./components/DetailRoute";

export const HistoryDriver: React.FC = () => {
  const navigation = useNavigation<TAppNavigation<"HistoryDriver">>();
  const [dateSelected, setDateSelected] = useState<Date>(new Date());

  const handleTurnBack = () => {
    navigation.navigate("HomeDriver");
  };
  const [filter, setFilter] = useState({ price: null, type: null, time: null });

  const updateFilter = (data: any) => {
    setFilter((pre) => ({ ...pre, ...data }));
  };
  return (
    <SafeAreaView style={styles.container}>
      <Header color="#6495ED">
        <View style={{ width: "100%", display: "flex", flexDirection: "row" }}>
          <TouchableOpacity onPress={handleTurnBack}>
            <Icon
              size={18}
              style={{ color: "white", marginRight: 100 }}
              name="arrowleft"
            />
          </TouchableOpacity>

          <Text style={{ color: "white", fontSize: 16, fontWeight: "bold" }}>
            Lịch sử chuyến đi
          </Text>
        </View>
      </Header>
      <View
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
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
      <ScrollView style={{ paddingBottom: 120, width: "100%" }}>
        <Routes />
      </ScrollView>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 0,
  },
  ticket: {
    borderWidth: 1,
    borderColor: "#ccc",
    marginBottom: 10,
    backgroundColor: "#fff",
    display: "flex",
    flexDirection: "row",
    padding: 15,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
    width: "100%",
    justifyContent: "flex-start",
  },
  ticketHeader: {
    flexDirection: "column",
    justifyContent: "flex-start",
    marginBottom: 15,
    borderRightWidth: 1,
    borderStyle: "dotted",
    paddingRight: 10,
    alignItems: "center",
    marginRight: 20,
  },
  ticketContent: {
    marginBottom: 10,
  },
  ticketLabel: {
    fontWeight: "400",
    marginBottom: 5,
    color: "gray",
  },
  ticketValue: {
    fontSize: 16,
    fontWeight: "bold",
  },
  ticketValueTime: {
    fontSize: 16,
    fontWeight: "bold",
    color: "orange",
  },
});
