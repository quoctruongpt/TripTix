import { Text, Avatar } from "@rneui/themed";
import React from "react";
import { View } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import { useNavigation } from "@react-navigation/native";
import { TAppNavigation } from "@navigation/AppNavigator.type";
import { StyleSheet } from "react-native";
import { useStore } from "@store/index";
export const Content: React.FC = () => {
  const navigation = useNavigation<TAppNavigation<"Home">>();
  const {
    authentication: { setIsLogin, isLogin },
  } = useStore();

  const onClickSettings = () => {
    navigation.navigate("Settings");
  };
  const onClickPoint = () => {
    navigation.navigate("Point");
  };
  const onClickInfo = () => {
    navigation.navigate("Info");
  };
  const onClickLogout = () => {
    setIsLogin(false);
  };

  return (
    <View style={styles.listProfileWrapper}>
      <View style={styles.itemMedium}>
        <Avatar
          source={require("@assets/images/bus/bus.png")}
          rounded
          size={60}
          containerStyle={{ backgroundColor: "#ccc" }}
        />
        <View style={styles.textWrapper}>
          <Text
            onPress={onClickInfo}
            style={{ color: "#000", fontSize: 16, fontWeight: "bold" }}
          >
            Hai Hung
          </Text>
          <Text onPress={onClickInfo} style={{ color: "#000" }}>
            0979221694
          </Text>
        </View>
        <Icon
          onPress={onClickInfo}
          name="chevron-right"
          size={18}
          color="gray"
        />
      </View>
      <View style={styles.itemNormal}>
        <Icon name="credit-card" size={18} color="#D2691E" />
        <View style={styles.textWrapper}>
          <Text style={{ color: "#000", fontSize: 14 }}>Open SHB account</Text>
        </View>
        <Icon name="chevron-right" size={18} color="gray" />
      </View>
      <View style={styles.itemNormal}>
        <Icon onPress={onClickPoint} name="star" size={18} color="#DC143C" />
        <View style={styles.textWrapper}>
          <Text onPress={onClickPoint} style={{ color: "#000", fontSize: 14 }}>
            Point
          </Text>
        </View>
        <Icon
          onPress={onClickPoint}
          name="chevron-right"
          size={18}
          color="gray"
        />
      </View>
      <View style={styles.itemNormal}>
        <Icon name="notifications-none" size={18} color="#FFA07A" />
        <View style={styles.textWrapper}>
          <Text style={{ color: "#000", fontSize: 14 }}>Notification</Text>
        </View>
        <Icon name="chevron-right" size={18} color="gray" />
      </View>
      <View style={styles.itemNormal}>
        <Icon name="edit-location" size={18} color="green" />
        <View style={styles.textWrapper}>
          <Text style={{ color: "#000", fontSize: 14 }}>Favorite Places</Text>
        </View>
        <Icon name="chevron-right" size={18} color="gray" />
      </View>
      <View style={styles.itemNormal}>
        <Icon name="block" size={18} color="black" />
        <View style={styles.textWrapper}>
          <Text style={{ color: "#000", fontSize: 14 }}>Black list</Text>
        </View>
        <Icon name="chevron-right" size={18} color="gray" />
      </View>
      <View style={styles.itemMedium}>
        <Icon name="wallet-giftcard" size={18} color="red" />
        <View style={styles.textWrapper}>
          <Text style={{ color: "#000", fontSize: 14 }}>Promotion</Text>
        </View>
        <Icon name="chevron-right" size={18} color="gray" />
      </View>
      <View style={styles.itemMedium}>
        <Icon
          onPress={onClickSettings}
          name="settings"
          size={18}
          color="#6495ED"
        />
        <View style={styles.textWrapper}>
          <Text
            onPress={onClickSettings}
            style={{ color: "#000", fontSize: 14 }}
          >
            Settings
          </Text>
        </View>
        <Icon
          onPress={onClickSettings}
          name="chevron-right"
          size={18}
          color="gray"
        />
      </View>
      <View style={styles.itemNormal}>
        <Icon name="support-agent" size={18} color="#008B8B" />
        <View style={styles.textWrapper}>
          <Text style={{ color: "#000", fontSize: 14 }}>Quick Support</Text>
        </View>
        <Icon name="chevron-right" size={18} color="gray" />
      </View>
      <View style={styles.itemNormal}>
        <Icon name="person-add" size={18} color="#FF1493" />
        <View style={styles.textWrapper}>
          <Text style={{ color: "#000", fontSize: 14 }}>Invite Friends</Text>
        </View>
        <Icon name="chevron-right" size={18} color="gray" />
      </View>
      <View style={styles.itemMedium}>
        <Icon name="groups" size={18} color="#00FF00" />
        <View style={styles.textWrapper}>
          <Text style={{ color: "#000", fontSize: 14 }}>Community</Text>
        </View>
        <Icon name="chevron-right" size={18} color="gray" />
      </View>
      <View style={styles.itemNormal}>
        <Icon onPress={onClickLogout} name="logout" size={18} color="black" />
        <View style={styles.textWrapper}>
          <Text onPress={onClickLogout} style={{ color: "#000", fontSize: 14 }}>
            Logout
          </Text>
        </View>
        <Icon
          onPress={onClickLogout}
          name="chevron-right"
          size={18}
          color="gray"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  listProfileWrapper: {
    backgroundColor: "#F5F0F6",
    flexDirection: "column",
    display: "flex",
    zIndex: 100,
  },
  itemMedium: {
    backgroundColor: "#fff",
    flexDirection: "row",
    display: "flex",
    paddingLeft: 15,
    paddingRight: 10,
    paddingVertical: 15,
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    marginBottom: 5,
  },
  itemNormal: {
    backgroundColor: "#fff",
    flexDirection: "row",
    display: "flex",
    paddingLeft: 15,
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#F5F0F6",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
  },
  textWrapper: {
    flex: 1,
    marginLeft: 16,
  },
});