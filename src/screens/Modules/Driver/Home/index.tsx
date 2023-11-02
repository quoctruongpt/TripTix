import { useStore } from "@store/index";
import React, { useState } from "react";
import { TouchableOpacity, View } from "react-native";
import { StyleSheet, ScrollView } from "react-native";
import { Avatar } from "react-native-elements";
import { Text } from "@rneui/base";
import { ButtonApp } from "@components/Button";
import Sidebar from "@components/Sidebar";
import { SafeAreaView } from "react-native-safe-area-context";
import { ContentSidebar } from "./components/ContentSidebar";

export const HomeDriver: React.FC = () => {
  const {
    authentication: { userInfo },
  } = useStore();
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };


  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          width: "100%",
          height: "100%",
          padding: 10,
          backgroundColor: "#6495ED",
        }}
      >
        <TouchableOpacity onPress={toggleSidebar}>
          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
              paddingHorizontal: 10,
              display: "flex",
              flexDirection: "column",
              position: "absolute",
              top: 20,
              left: 15,
            }}
          >
            <View
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Avatar
                source={require("@assets/images/user/Customer.png")}
                rounded
                size={50}
                containerStyle={{
                  backgroundColor: "#DEB887",
                  position: "relative",
                  padding: 8,
                }}
              />
            </View>
          </View>
        </TouchableOpacity>

        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            display: "flex",
            flexDirection: "column",
            position: "absolute",
            bottom: 55,
            right: 15,
          }}
        >
          <View
            style={{
              width: 60,
              height: 60,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 30,
              backgroundColor: "white",
            }}
          >
            <Avatar
              source={require("@assets/images/user/support.png")}
              rounded
              size={25}
              containerStyle={{
                backgroundColor: "white",
                position: "relative",
                padding: 0,
              }}
            />
            <Text style={{ color: "green" }}>Support</Text>
          </View>
        </View>
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            display: "flex",
            flexDirection: "column",
            position: "absolute",
            bottom: "50%",
            right: "10%",
          }}
        >
          <Text style={{ color: "white", fontSize: 26, fontWeight: "bold" }}>
            Welcome tài xế{" "}
            <Text
              style={{ color: "#00BFFF", fontSize: 26, fontWeight: "bold" }}
            >
              {userInfo.fullName}
            </Text>
          </Text>
        </View>
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            display: "flex",
            flexDirection: "column",
            position: "absolute",
            bottom: 30,
            left: 15,
          }}
        >
          <ButtonApp
            title="Xe hợp đồng"
            titleStyle={{ color: "red" }}
            buttonStyle={{
              backgroundColor: "white",
              margin: 10,
            }}
          />
        </View>
        <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar}>
          <ContentSidebar handleToggleSidebar={toggleSidebar} />
        </Sidebar>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    padding: 0,
    position: "relative",
    zIndex: -1,
  },
});
