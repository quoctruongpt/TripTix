import React from "react";
import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Button } from "@rneui/themed";
import { useNavigation, useRoute } from "@react-navigation/native";

import { TAuthNavigation, TAuthRoute } from "@navigation/AuthNavigator.type";
import { useStore } from "@store/index";

export const Profile: React.FC = () => {
  const {
    authentication: { setIsLogin, isLogin },
  } = useStore();
  const handlePressStart = () => {
    setIsLogin(false);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Button
        title="Logout"
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
