import { ButtonApp } from "@components/Button";
import { Header } from "@components/Header";
import { Text } from "@rneui/themed";
import { deleteDataUser } from "@storage/common";
import { useStore } from "@store/index";
import React, { useState } from "react";
import { View } from "react-native";
import { Avatar } from "react-native-elements";
import { SafeAreaView } from "react-native-safe-area-context";
import Icon from "react-native-vector-icons/AntDesign";

export const Info: React.FC = () => {
  const {
    authentication: { setIsLogin, isLogin },
  } = useStore();

  const [isUpdate, setIsUpdate] = useState(false);

  const onClickUpdate = () => {
    setIsUpdate(true);
  };

  const onClickLogout = async () => {
    await deleteDataUser();
    setIsLogin(false);
  };
  return (
    <SafeAreaView
      style={{
        marginTop: 0,
        backgroundColor: "white",
        display: "flex",
        height: "100%",
        width: "100%",
        flexDirection: "column",
        padding: 0,
      }}
    >
      <View
        style={{
          backgroundColor: "white",
          justifyContent: "center",
          alignItems: "center",
          paddingHorizontal: 10,
          display: "flex",
          flexDirection: "column",
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
            source={require("@assets/images/bus/bus.png")}
            rounded
            size={60}
            containerStyle={{ backgroundColor: "#ccc" }}
          />
        </View>
        <View
          style={{
            width: "100%",
            marginTop: 20,
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Text style={{ color: "#000", fontSize: 14 }}>
            Full name <Text style={{ color: "red" }}>*</Text>
          </Text>
          <Text style={{ color: "#000", fontSize: 14 }}>
            Hai hung {" "}{isUpdate && <Icon name="edit" size={16} color="black" />}
          </Text>
        </View>
        <View
          style={{
            width: "100%",
            marginTop: 20,
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Text style={{ color: "#000", fontSize: 14 }}>Phone</Text>
          <Text style={{ color: "#000", fontSize: 14 }}>0979221694 {" "}{isUpdate && <Icon name="edit" size={16} color="black" />}</Text>
        </View>
        <View
          style={{
            width: "100%",
            marginTop: 20,
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Text style={{ color: "#000", fontSize: 14 }}>Email</Text>
          <Text style={{ color: "#000", fontSize: 14 }}>
            chien.nguyen9c9@gmail.com {" "}{isUpdate && <Icon name="edit" size={16} color="black" />}
          </Text>
        </View>
        <View
          style={{
            width: "100%",
            marginTop: 20,
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Text style={{ color: "#000", fontSize: 14 }}>Birthday</Text>
          <Text style={{ color: "#000", fontSize: 14 }}>06/08/1999 {" "}{isUpdate && <Icon name="edit" size={16} color="black" />}</Text>
        </View>
        <View
          style={{
            width: "100%",
            marginTop: 20,
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Text style={{ color: "#000", fontSize: 14 }}>Gender</Text>
          <Text style={{ color: "#000", fontSize: 14 }}>Male {" "}{isUpdate && <Icon name="edit" size={16} color="black" />}</Text>
        </View>
        <View
          style={{
            width: "100%",
            marginTop: 20,
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Text style={{ color: "#000", fontSize: 14 }}>Job</Text>
          <Text style={{ color: "#000", fontSize: 14 }}>unknow {" "}{isUpdate && <Icon name="edit" size={16} color="black" />}</Text>
        </View>
      </View>
      <View
        style={{
          flex: 1,
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          alignItems: "center",
          padding: 10,
        }}
      >
        <View style={{ width: "100%", marginBottom: 10 }}>
          <ButtonApp
            title="Update"
            onPress={onClickUpdate}
            buttonStyle={{
              backgroundColor: "red",
              width: "100%",
            }}
          />
        </View>

        <View
          style={{
            width: "100%",
            borderColor: "red",
            borderWidth: 1,
            borderRadius: 20,
          }}
        >
          <ButtonApp
            titleStyle={{ color: "red" }}
            title="Logout"
            onPress={onClickLogout}
            buttonStyle={{
              backgroundColor: "white",
              width: "100%",
            }}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};
