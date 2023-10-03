import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Image } from "expo-image";
import { Button, Text } from "@rneui/themed";
import { View } from "react-native";
import { Images } from "@assets/images";
import { TNavigation } from "@navigation/AppNavigator.type";
import Icon from "react-native-vector-icons/Entypo";

export const LoginOrRegisterForm: React.FC = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Image source={Images.Banner01} style={styles.image} />
      <Text h4 h4Style={styles.textHeader}>
        Track your Orders
      </Text>
      <Text h4 h4Style={styles.textContent}>
        Track your orders in realtime from the app
      </Text>
      <Icon name="dots-three-horizontal" size={30} color="gray" />
      <View style={styles.formLoginOrRegister}>
        <Button
          title="Login"
          buttonStyle={styles.buttonLogin}
          containerStyle={styles.buttonLoginContainer}
          titleStyle={styles.titleButtonLogin}
          onPress={() => {}}
        />
        <Button
          title="Register"
          buttonStyle={styles.buttonRegister}
          containerStyle={styles.buttonRegisterContainer}
          titleStyle={styles.titleButtonRegister}
          onPress={() => {}}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 40,
    alignItems: "center",
  },
  textHeader: {
    fontWeight: "700",
    color: "#FF800B",
    fontSize: 16,
    marginBottom: 6,
  },
  textContent: {
    fontWeight: "400",
    color: "#595959",
    fontSize: 10,
    marginBottom: 60,
  },
  image: {
    width: 208,
    height: 250,
    marginBottom: 20,
    marginTop: 80,
    resizeMode: "contain",
  },
  formLoginOrRegister: {
    backgroundColor: "#FF9B63",
    width: "100%",
    marginTop: 36,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    overflow: "hidden",
    paddingHorizontal: 36,
  },
  buttonLogin: {
    backgroundColor: "#FFF",
    borderWidth: 2,
    borderColor: "white",
    borderRadius: 20,
    padding: 12,
  },
  buttonLoginContainer: {
    width: "100%",
    marginBottom: 16,
  },
  titleButtonLogin: { fontWeight: "600", color: "#000", fontSize: 10 },
  buttonRegister: {
    backgroundColor: "#000",
    borderRadius: 20,
    padding: 12,
  },
  buttonRegisterContainer: {
    width: "100%",
  },
  titleButtonRegister: { fontWeight: "600", color: "#fff", fontSize: 10 },
});
