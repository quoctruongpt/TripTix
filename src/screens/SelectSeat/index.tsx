import React, { useEffect, useState } from "react";
import { StyleSheet, ScrollView, View, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Header } from "@components/Header";
import Icon from "react-native-vector-icons/FontAwesome";
import { Text } from "@rneui/base";
import { useNavigation } from "@react-navigation/native";
import { TAppNavigation } from "@navigation/AppNavigator.type";
import { Image } from "expo-image";
import { Images } from "@assets/images";
import { ButtonApp } from "@components/Button";

const Seats = [
  { id: 1, name: "A1", avaiable: 0, selected: false },
  { id: 2, name: "A2", avaiable: 0, selected: false },
  { id: 3, name: "A3", avaiable: 0, selected: false },
  { id: 4, name: "A4", avaiable: 0, selected: false },
  { id: 5, name: "A5", avaiable: 1, selected: false, price: 1500 },
  { id: 6, name: "A6", avaiable: 1, selected: false, price: 2000 },
  { id: 7, name: "A7", avaiable: 1, selected: false, price: 4000 },
  { id: 8, name: "A8", avaiable: 1, selected: false, price: 2000 },
  { id: 9, name: "A9", avaiable: 1, selected: false, price: 2000 },
  { id: 10, name: "A10", avaiable: 1, selected: false, price: 2000 },
  { id: 11, name: "A11", avaiable: 1, selected: false, price: 3000 },
  { id: 12, name: "A12", avaiable: 1, selected: false, price: 1000 },
  { id: 13, name: "A13", avaiable: 1, selected: false, price: 1000 },
];

export const SelectSeat: React.FC = () => {
  const navigation = useNavigation<TAppNavigation<"SelectSeat">>();
  const [listSeat, setListSeat] = useState(Seats);
  const [listSelectSeat, setListSelectSeat] = useState([]);
  const [showError, setShowError] = useState(false);

  const onTurnBack = () => {
    navigation.navigate("SelectRoute");
  };

  const onActiveSeat = (seat) => {
    setListSeat((prevItems) => {
      return prevItems.map((item) => {
        if (item.id === seat.id && seat.avaiable == 1) {
          return { ...item, selected: !item.selected };
        } else if (item.id === seat.id && seat.avaiable !== 1) {
          setShowError(true);
          setTimeout(() => {
            return setShowError(false);
          }, 1500);
        }
        return item;
      });
    });
  };

  useEffect(() => {
    if (listSeat) {
      const uniqueNames = new Set();
      listSeat
        .filter((l) => l.selected)
        .forEach((list) => {
          uniqueNames.add(list.name);
        });

      setListSelectSeat(Array.from(uniqueNames));
    }
  }, [listSeat]);

  const onDepartureInfo = () => {
    navigation.navigate("DepartureInformation");
  };

  const selectedSeatsText = listSelectSeat.join(", ");

  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          paddingHorizontal: 10,
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "flex-start",
          flexWrap: "wrap",
          flexDirection: "row",
          borderBottomColor: "transparent",
          flex: 1,
        }}
      >
        {listSeat &&
          listSeat.map((seat) => {
            if (seat.avaiable == 1) {
              return (
                <TouchableOpacity onPress={() => onActiveSeat(seat)}>
                  <View
                    style={{
                      marginRight: 10,
                      maxHeight: 50,
                      maxWidth: 50,
                      marginTop: 10,
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "center",
                      borderWidth: 1,
                      borderRadius: 10,
                      padding: 5,
                      borderColor: `${seat.selected ? "white" : "green"}`,
                      backgroundColor: `${
                        seat.selected ? "green" : "transparent"
                      }`,
                    }}
                  >
                    <Text
                      style={{
                        color: `${seat.selected ? "white" : "green"}`,
                      }}
                    >
                      {seat.name}
                    </Text>
                    {seat.selected ? (
                      <Image
                        source={Images.SeatSelected}
                        style={{ width: 22, height: 20 }}
                      />
                    ) : (
                      <Image
                        source={Images.SeatAvaiable}
                        style={{
                          width: 22,
                          height: 20,
                        }}
                      />
                    )}
                  </View>
                </TouchableOpacity>
              );
            }
            return (
              <TouchableOpacity onPress={() => onActiveSeat(seat)}>
                <View
                  style={{
                    marginRight: 10,
                    maxHeight: 50,
                    maxWidth: 50,
                    marginTop: 10,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    borderWidth: 1,
                    borderRadius: 10,
                    padding: 5,
                    borderColor: "gray",
                  }}
                >
                  <Text
                    style={{
                      color: "gray",
                    }}
                  >
                    {seat.name}
                  </Text>
                  <Image
                    source={Images.SeatDisable}
                    style={{ width: 22, height: 20 }}
                  />
                </View>
              </TouchableOpacity>
            );
          })}
      </View>
      {showError && (
        <Text
          style={{
            color: "red",
            paddingHorizontal: 15,
          }}
        >
          Use can't select Seat UnAvaiable
        </Text>
      )}

      <View
        style={{
          padding: 10,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          alignItems: "stretch",
        }}
      >
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "stretch",
            backgroundColor: "#DCDCDC",
            borderWidth: 1,
            borderColor: "#A9A9A9",
            borderRadius: 15,
            padding: 10,
          }}
        >
          <View
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              alignItems: "stretch",
            }}
          >
            <Text style={{ marginBottom: 10 }}>Selected Seat(s)</Text>
            <Text>Final price</Text>
          </View>
          <View
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              alignItems: "flex-end",
            }}
          >
            <Text style={{ marginBottom: 10, color: "red" }}>
              {selectedSeatsText}
            </Text>
            <Text>285,000đ</Text>
          </View>
        </View>
      </View>
      <View
        style={{
          marginTop: 5,
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          paddingHorizontal: 15,
        }}
      >
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-start",
            alignItems: "center",
          }}
        >
          <View
            style={{
              width: 10,
              height: 10,
              borderRadius: 2,
              borderWidth: 1,
              borderColor: "green",
              backgroundColor: "white",
              marginRight: 5,
            }}
          ></View>
          <Text>Avaiable</Text>
        </View>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-start",
            alignItems: "center",
          }}
        >
          <View
            style={{
              width: 10,
              height: 10,
              borderRadius: 2,
              borderWidth: 1,
              borderColor: "green",
              backgroundColor: "green",
              marginRight: 5,
            }}
          ></View>
          <Text>Selecting</Text>
        </View>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-start",
            alignItems: "center",
          }}
        >
          <View
            style={{
              width: 10,
              height: 10,
              borderRadius: 2,
              borderWidth: 1,
              borderColor: "gray",
              backgroundColor: "black",
              marginRight: 5,
            }}
          ></View>
          <Text>Bought</Text>
        </View>
      </View>
      <View
        style={{
          marginTop: 10,
          paddingHorizontal: 15,
          marginBottom: 15,
        }}
      >
        <ButtonApp
          title="Continue"
          onPress={onDepartureInfo}
          buttonStyle={{
            backgroundColor: `${listSelectSeat.length ? "red" : "gray"}`,
          }}
        />
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

  buttonContinue: {
    backgroundColor: "red",
  },
});
