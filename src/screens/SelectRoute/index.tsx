import React, { useState } from "react";
import { StyleSheet, ScrollView, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Header } from "@components/Header";
import Icon from "react-native-vector-icons/MaterialIcons";
import { Text } from "@rneui/base";
import { Select } from "@components/Select";

import dayjs from "dayjs";

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
  const [listDates, setListDates] = useState(listDate);
  const [selectedValuePrice, setSelectedValue] = useState(null);
  const [activeDate, setActiveDate] = useState(dayjs().format("DD/MM"));

  const onActiveDate = (item) => {
    setActiveDate(item.dateString);
  };

  // const handleSelectItem = (item) => {
  //   console.warn(item);
  // };

  return (
    <SafeAreaView style={styles.container}>
      <Header>
        <View style={styles.headerContainer}>
          <Icon name="chevron-left" size={22} color="white" />
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
        }}
      >
        <View
          style={{
            display: "flex",
            flexDirection: "column",
            width: "100%",
            borderWidth: 2,
            borderColor: "red",
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
              style={{ justifyContent: "flex-start", flexDirection: "row" }}
            >
              <Text style={{ fontWeight: "600" }}>time</Text>
            </View>
            <View>
              <Text>time</Text>
            </View>
          </View>
        </View>
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
