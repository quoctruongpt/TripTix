import { Avatar, Button, Divider, Text } from "@rneui/themed";
import React from "react";
import { View, ScrollView, StyleSheet } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Icon from "react-native-vector-icons/FontAwesome5";
import { WalletItem } from "./components/WalletItem";

export const Home: React.FC = () => {
  const { top } = useSafeAreaInsets();
  return (
    <ScrollView style={styles.container}>
      <View style={{ flex: 1, paddingHorizontal: 8 }}>
        <View>
          <View
            style={{
              backgroundColor: "red",
              flexDirection: "row",
              paddingTop: 12 + top,
              paddingHorizontal: 16,
              paddingBottom: 60,
              borderBottomLeftRadius: 12,
              borderBottomRightRadius: 12,
            }}
          >
            <Avatar
              source={require("@assets/images/bus/bus.png")}
              rounded
              size={32}
              containerStyle={{ backgroundColor: "#ccc" }}
            />
            <View style={{ flex: 1, marginLeft: 16 }}>
              <Text style={{ color: "#fff" }}>Hello,</Text>
              <Text style={{ color: "#fff", fontSize: 16, fontWeight: "bold" }}>
                Hai Hung
              </Text>
            </View>
          </View>
          <View
            style={{
              height: 150,
              backgroundColor: "yellow",
              marginHorizontal: 16,
              marginTop: -40,
              borderRadius: 20,
              padding: 20,
            }}
          >
            <View style={{ flexDirection: "row" }}>
              <View
                style={{ flex: 1, borderRightWidth: 1, borderColor: "#dde2e8" }}
              >
                <Text>Số dư</Text>
                <Text style={{ fontWeight: "700" }}>1000 xu</Text>
              </View>
              <View style={{ flex: 1, alignItems: "flex-end" }}>
                <Text>Tài khoản khuyến mại</Text>
                <Text style={{ fontWeight: "700" }}>10 xu</Text>
              </View>
            </View>
            <Divider style={{ marginVertical: 16 }} />
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <WalletItem icon="folder-plus" title="Top up" />
              <WalletItem icon="dollar-sign" title="Withdraw" />
              <WalletItem icon="wallet" title="Pay" />
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
