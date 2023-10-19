import { ButtonApp } from "@components/Button";
import { Header } from "@components/Header";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Text } from "@rneui/themed";
import { deleteDataUser } from "@storage/common";
import { useStore } from "@store/index";
import React, { useEffect, useState } from "react";
import {
  View,
  TouchableWithoutFeedback,
  Button,
  Modal,
  StyleSheet,
  TextInput,
} from "react-native";
import { Avatar } from "react-native-elements";
import { SafeAreaView } from "react-native-safe-area-context";
import Icon from "react-native-vector-icons/AntDesign";

export const Info: React.FC = () => {
  const {
    authentication: { setIsLogin, userInfo },
  } = useStore();
  const [isUpdate, setIsUpdate] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [valueInputModal, setValueInputModal] = useState("");
  const [keyInputModal, setKeyInputModal] = useState(null);
  const [userInformation, setUserInformation] = useState({
    fullName: userInfo.fullName,
    phone: userInfo.phone,
    email: userInfo.email,
    birthday: userInfo.birthday,
    gender: userInfo.gender,
    job: userInfo.job || "",
  });

  const onClickUpdate = () => {
    setIsUpdate(true);
  };

  const onClickSave = () => {
    setIsUpdate(false);
  };

  const onClickLogout = async () => {
    await deleteDataUser();
    setIsLogin(false);
  };

  const toggleModal = () => {
    setModalVisible(true);
  };

  const handleInputChange = (value) => {
    setValueInputModal(value);
  };
  const handleSave = () => {
    setUserInformation({
      ...userInformation,
      [keyInputModal]: valueInputModal,
    });
    setValueInputModal(null);
    setKeyInputModal(null);
    setModalVisible(false);
    setModalVisible(false);
  };

  const ModalContent = (
    <View style={{ backgroundColor: "white", padding: 20 }}>
      <TextInput
        style={{
          height: 40,
          borderColor: "gray",
          borderWidth: 1,
          marginBottom: 10,
          paddingHorizontal: 8,
          borderRadius: 5,
        }}
        value={valueInputModal}
        onChangeText={handleInputChange}
      />
      <Button title="Save" onPress={handleSave} />
    </View>
  );

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
            containerStyle={{
              backgroundColor: "#ccc",
              position: "relative",
            }}
          />
          {isUpdate && (
            <Icon
              name="camera"
              style={{
                position: "absolute",
                bottom: -10,
                right: 140,
                padding: 5,
                backgroundColor: "white",
                borderRadius: 25,
                elevation: 20,
                shadowColor: "#52006A",
              }}
              size={20}
            />
          )}
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
            {userInfo.fullName}{" "}
            {isUpdate && (
              <Icon
                name="edit"
                size={16}
                color="black"
                onPress={() => {
                  toggleModal();
                  setKeyInputModal("fullName");
                  setValueInputModal(userInfo.fullName);
                }}
              />
            )}
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
          <Text style={{ color: "#000", fontSize: 14 }}>
            {userInfo.phone}{" "}
            {isUpdate && (
              <Icon
                name="edit"
                size={16}
                color="black"
                onPress={() => {
                  toggleModal();
                  setKeyInputModal("phone");
                  setValueInputModal(userInfo.phone);
                }}
              />
            )}
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
          <Text style={{ color: "#000", fontSize: 14 }}>Email</Text>
          <Text style={{ color: "#000", fontSize: 14 }}>
            {userInfo.email}{" "}
            {isUpdate && (
              <Icon
                name="edit"
                size={16}
                color="black"
                onPress={() => {
                  toggleModal();
                  setKeyInputModal("email");
                  setValueInputModal(userInfo.email);
                }}
              />
            )}
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
          <Text style={{ color: "#000", fontSize: 14 }}>
            {userInfo.birthday}{" "}
            {isUpdate && (
              <Icon
                name="edit"
                size={16}
                color="black"
                onPress={() => {
                  toggleModal();
                  setKeyInputModal("birthday");
                  setValueInputModal(userInfo.birthday);
                }}
              />
            )}
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
          <Text style={{ color: "#000", fontSize: 14 }}>Gender</Text>
          <Text style={{ color: "#000", fontSize: 14 }}>
            {userInfo.gender}{" "}
            {isUpdate && (
              <Icon
                name="edit"
                size={16}
                color="black"
                onPress={() => {
                  toggleModal();
                  setKeyInputModal("gender");
                  setValueInputModal(userInfo.gender);
                }}
              />
            )}
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
          <Text style={{ color: "#000", fontSize: 14 }}>Job</Text>
          <Text style={{ color: "#000", fontSize: 14 }}>
            {userInfo.job || "unknow"}{" "}
            {isUpdate && (
              <Icon
                name="edit"
                size={16}
                color="black"
                onPress={() => {
                  toggleModal();
                  setKeyInputModal("job");
                  setValueInputModal(userInfo.job);
                }}
              />
            )}
          </Text>
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
          {isUpdate ? (
            <ButtonApp
              title="Save"
              onPress={onClickSave}
              buttonStyle={{
                backgroundColor: "red",
                width: "100%",
              }}
            />
          ) : (
            <ButtonApp
              title="Update"
              onPress={onClickUpdate}
              buttonStyle={{
                backgroundColor: "red",
                width: "100%",
              }}
            />
          )}
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
      <Modal
        transparent={true}
        animationType="slide"
        visible={modalVisible}
        onRequestClose={toggleModal}
      >
        <View style={{ flex: 1, justifyContent: "flex-end" }}>
          {ModalContent}
        </View>
      </Modal>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: "flex-end",
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  modalContent: {
    backgroundColor: "white",
    padding: 20,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  closeButton: {
    marginTop: 10,
    padding: 10,
    backgroundColor: "lightgray",
    borderRadius: 5,
    alignItems: "center",
  },
});
