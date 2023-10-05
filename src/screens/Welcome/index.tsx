import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Image } from "expo-image";
import { Button, Text } from "@rneui/themed";
import { useNavigation } from "@react-navigation/native";

import { Images } from "@assets/images";
import { TAuthNavigation } from "@navigation/AuthNavigator.type";

export const Welcome = () => {
  const navigation = useNavigation<TAuthNavigation<"Welcome">>();

  const handlePressStart = () => {
    navigation.replace("Role");
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text h4 h4Style={styles.text}>
        Welcome to TripTix
      </Text>
      <Image source={Images.Bus} style={styles.image} />
      <Button
        title="Get started"
        buttonStyle={styles.button}
        containerStyle={styles.buttonContainer}
        titleStyle={styles.titleButton}
        onPress={handlePressStart}
      />
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
  text: { fontWeight: "700", color: "#2EE201" },
  image: { width: "100%", flex: 1, resizeMode: "contain" },
  button: {
    backgroundColor: "#F5A522",
    borderWidth: 2,
    borderColor: "white",
    borderRadius: 30,
    padding: 12,
  },
  buttonContainer: {
    width: "100%",
    marginHorizontal: 50,
    marginVertical: 10,
  },
  titleButton: { fontWeight: "bold" },
});
