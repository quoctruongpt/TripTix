import { Button } from "@rneui/themed";
import React, { useEffect, useState } from "react";
import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { StyleSheet, ScrollView } from "react-native";
import { Header } from "../../components/Header";
import TabsComponent from "@components/Tabs";
import TichketHistory from "./components/TichketHistory";
import PerpareDepart from "./components/PerpareDepart";
import dayjs from "dayjs";

const Tickets = [
  // staus
  // 1: finish
  // 2: cancle
  // 3: paid
  // 4: run
  {
    id: 1,
    code: "QƯEQRA",
    startTime: dayjs().format("DD-MM-YYYY HH:mm"),
    status: 1,
    departurePoint: "Lâm Đồng",
    destination: "Hồ chí mình",
    bookedSeat: "A4,A15",
    timeDestination: dayjs().format("HH:mm"),
  },
  {
    id: 1,
    code: "QƯEQRA",
    startTime: dayjs().format("DD-MM-YYYY HH:mm"),
    status: 1,
    departurePoint: "Lâm Đồng",
    destination: "Hồ chí mình",
    bookedSeat: "A4,A15",
    timeDestination: dayjs().format("HH:mm"),
  },
  {
    id: 1,
    code: "QƯEQRA",
    startTime: dayjs().format("DD-MM-YYYY HH:mm"),
    status: 1,
    departurePoint: "Lâm Đồng",
    destination: "Hồ chí mình",
    bookedSeat: "A4,A15",
    timeDestination: dayjs().format("HH:mm"),
  },
  {
    id: 2,
    code: "QƯEQRA",
    startTime: dayjs().format("DD-MM-YYYY HH:mm"),
    status: 2,
    departurePoint: "Lâm Đồng",
    destination: "Hồ chí mình",
    bookedSeat: "A4,A15",
    timeDestination: dayjs().format("HH:mm"),
  },
  {
    id: 3,
    code: "QƯEQRA",
    startTime: dayjs().format("DD-MM-YYYY HH:mm"),
    status: 3,
    departurePoint: "Lâm Đồng",
    destination: "Hồ chí mình",
    bookedSeat: "A4,A15",
    timeDestination: dayjs().format("HH:mm"),
  },
  {
    id: 4,
    code: "QƯEQRA",
    startTime: dayjs().format("DD-MM-YYYY HH:mm"),
    status: 4,
    departurePoint: "Lâm Đồng",
    destination: "Hồ chí mình",
    bookedSeat: "A4,A15",
    timeDestination: dayjs().format("HH:mm"),
  },
  {
    id: 5,
    code: "QƯEQRA",
    startTime: dayjs().format("DD-MM-YYYY HH:mm"),
    status: 1,
    departurePoint: "Lâm Đồng",
    destination: "Hồ chí mình",
    bookedSeat: "A4,A15",
    timeDestination: dayjs().format("HH:mm"),
  },
];

export const History: React.FC = () => {
  const [listTicket, setListTicket] = useState(Tickets);
  const [activeTab, setActiveTab] = useState(1);

  const handleTabPress = (index) => {
    setActiveTab(index);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header title="History" color="red" colorText="white" />

      <View>
        <TabsComponent
          tabs={["Lịch sử vé", "Sắp khởi hành"]}
          initialTab={1}
          onTabPress={handleTabPress}
        />
        <ScrollView
          style={{
            padding: 10,
            display: "flex",
            flexDirection: "column",
          }}
        >
          {activeTab === 0 && (
            <TichketHistory listTicket={listTicket} type="history" />
          )}
          {activeTab === 1 && (
            <TichketHistory listTicket={listTicket} type="perpare" />
          )}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    padding: 0,
  },
});
