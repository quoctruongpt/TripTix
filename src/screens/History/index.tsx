import { Button } from "@rneui/themed";
import React, { useState } from "react";
import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { StyleSheet, ScrollView } from "react-native";
import { Header } from "../../components/Header";
import TabsComponent from "@components/Tabs";
import { Text } from "@rneui/base";

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
            <View>
              <Text>Lịch sử vé trống</Text>
            </View>
          )}
          {activeTab === 1 && (
            <View>
              <Text>Danh sách vé sắp khởi hành trống</Text>
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
