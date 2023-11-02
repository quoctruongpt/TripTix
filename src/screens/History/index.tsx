import { Button } from "@rneui/themed";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { FlatList, RefreshControl, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { StyleSheet } from "react-native";
import TabsComponent from "@components/Tabs";
import TichketHistory from "./components/TichketHistory";
import dayjs from "dayjs";
import { StatusApiCall } from "@constants/global";
import { getBookings } from "@httpClient/trip.api";
import { useStore } from "@store/index";

const Tickets = [
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
  const [activeTab, setActiveTab] = useState(0);
  const tabRef = useRef<FlatList>();
  const [isLoading, setIsLoading] = useState(false);
  const {
    authentication: { userInfo },
  } = useStore();

  useEffect(() => {
    getHistory();
  }, []);

  const handleTabPress = (index) => {
    setActiveTab(index);
    tabRef.current.scrollToIndex({ animated: true, index });
  };

  const onViewableItemsChanged = useCallback(({ viewableItems, changed }) => {
    if (viewableItems.length > 0) {
      const focusedIndex = viewableItems[0].index;
      setActiveTab(focusedIndex);
    }
  }, []);

  const getHistory = async () => {
    try {
      setIsLoading(true);
      const { data } = await getBookings(userInfo.idUserSystem);
      if (data.status === StatusApiCall.Success) {
        setListTicket(data.data);
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={{ flex: 1 }}>
        <TabsComponent
          tabs={["Lịch sử vé", "Sắp khởi hành"]}
          initialTab={activeTab}
          onTabPress={handleTabPress}
        />
        <FlatList
          ref={tabRef}
          horizontal
          data={["history", "perpare"]}
          keyExtractor={(item, index) => item}
          renderItem={({ item }) => (
            <TichketHistory
              listTicket={listTicket}
              type={item}
              onRefresh={getHistory}
            />
          )}
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          initialScrollIndex={activeTab}
          onViewableItemsChanged={onViewableItemsChanged}
          refreshControl={
            <RefreshControl refreshing={isLoading} onRefresh={getHistory} />
          }
        />
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 0,
  },
});
