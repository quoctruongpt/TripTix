import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Image } from "expo-image";
import { Button, Text } from "@rneui/themed";
import { View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Images } from "@assets/images";
import { TNavigation } from "@navigation/AppNavigator.type";
export const Role: React.FC = () => {
  const navigation = useNavigation<TNavigation<"Role">>();

  const handlePressRoleCustomer = () => {
    navigation.navigate("LoginOrRegisterForm");
  };
  const handlePressRoleDriver = () => {
    navigation.navigate("LoginOrRegisterForm");
  };
  return (
    <SafeAreaView style={styles.container}>
      <Image source={Images.BusFace} style={styles.image} />
      <Text h4 h4Style={styles.textHeader}>
        TripTix
      </Text>
      <Text h4 h4Style={styles.textContent}>
        Choose your job type
      </Text>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        <View
          style={{
            alignItems: "center",
            paddingVertical: 60,
            paddingHorizontal: 25,
            backgroundColor: "white",
            borderWidth: 2,
            borderColor: "black",
            borderRadius: 45,
          }}
        >
          <View
            style={{
              padding: 20,
              borderRadius: 35,
              backgroundColor: "#C1D6FF",
            }}
          >
            <Image source={Images.Driver} style={styles.imageDriver} />
          </View>
          <Button
            title="Driver"
            buttonStyle={{
              marginTop: 10,
              backgroundColor: "transparent",
              paddingHorizontal: 20,
            }}
            titleStyle={{ color: "black" }}
            onPress={handlePressRoleDriver}
          />
        </View>

        <View
          style={{
            alignItems: "center",
            paddingVertical: 60,
            paddingHorizontal: 17,
            backgroundColor: "white",
            borderWidth: 2,
            borderColor: "black",
            borderRadius: 45,
          }}
        >
          <View
            style={{
              padding: 20,
              borderRadius: 35,
              backgroundColor: "#FFCA99",
            }}
          >
            <Image source={Images.Customer} style={styles.imageCustomer} />
          </View>
          <Button
            title="Customer"
            buttonStyle={{
              marginTop: 10,
              backgroundColor: "transparent",
              paddingHorizontal: 20,
            }}
            titleStyle={{ color: "black" }}
            onPress={handlePressRoleCustomer}
          />
        </View>
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
  textHeader: { fontWeight: "700", color: "#000", fontSize: 40 },
  textContent: {
    fontWeight: "700",
    color: "#000",
    fontSize: 38,
    marginVertical: 50,
  },
  image: { width: 208, height: 215, resizeMode: "contain" },
  imageDriver: {
    width: 25,
    height: 25,
    resizeMode: "contain",
  },
  imageCustomer: {
    width: 25,
    height: 25,
    resizeMode: "contain",
  },

  buttonContainer: {
    width: "50%",
    marginHorizontal: 35,
    marginVertical: 10,
  },
  titleButton: { fontWeight: "bold", color: "#000" },
});
