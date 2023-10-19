import { Button } from "@rneui/themed";
import React, { useState } from "react";
import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { StyleSheet, ScrollView } from "react-native";
import { Header } from "../../components/Header";
import TabsComponent from "@components/Tabs";
import { Text } from "@rneui/base";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

export const History: React.FC = () => {
  const [listTicket, setListTicket] = useState(null);
  const [listHistory, setListHistory] = useState(null);
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
            <View
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                padding: 10,
              }}
            >
              {!listHistory && (
                <>
                  <Icon
                    name="ticket-confirmation-outline"
                    size={80}
                    style={{ color: "red" }}
                  />
                  <Text style={{ color: "orange" }}>Lịch sử vé trống</Text>
                </>
              )}
            </View>
          )}
          {activeTab === 1 && (
            <View
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                padding: 10,
              }}
            >
              {!listTicket && (
                <>
                  <Icon
                    name="ticket"
                    size={80}
                    style={{ color: "red" }}
                  />
                  <Text style={{ color: "orange" }}>
                    Danh sách vé sắp khởi hành trống
                  </Text>
                </>
              )}
            </View>
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
