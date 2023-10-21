import React, { useEffect, useState } from "react";
import { StyleSheet, ScrollView, View, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Text } from "@rneui/base";
import { useNavigation } from "@react-navigation/native";
import { TAppNavigation } from "@navigation/AppNavigator.type";
import { Image } from "expo-image";
import { Images } from "@assets/images";
import { ButtonApp } from "@components/Button";
import { useStore } from "@store/index";
import { formatPrice } from "@utils/price";
import { useToast } from "react-native-toast-notifications";

export const SelectSeat: React.FC = () => {
  const navigation = useNavigation<TAppNavigation<"SelectSeat">>();
  const {
    route: { routeInfo, setSeatSelected },
  } = useStore();
  const [listSeat, setListSeat] = useState([]);
  const [listSelectSeat, setListSelectSeat] = useState([]);
  const [showError, setShowError] = useState(false);
  const toast = useToast();

  useEffect(() => {
    handleGenSeats();
  }, []);

  const handleGenSeats = () => {
    const array = [...Array(routeInfo.busDTO.capacity).keys()];
    const seatBooked = routeInfo.seatNameBooking;

    setListSeat(
      array.map((_, index) => {
        const name = `A${index < 9 ? 0 : ""}${index + 1}`;
        return { id: name, name, avaiable: !seatBooked.includes(name) };
      })
    );
  };

  const onActiveSeat = (seat) => {
    const seatId = seat.id;
    if (listSelectSeat.includes(seatId)) {
      setListSelectSeat(listSelectSeat.filter((item) => item !== seatId));
      return;
    }

    if (listSelectSeat.length >= 5) {
      toast.show("You can only book a maximum of 5 tickets", {
        type: "danger",
      });
      return;
    }

    setListSelectSeat([...listSelectSeat, seatId]);
  };

  const onDepartureInfo = () => {
    setSeatSelected(listSelectSeat);
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
                      borderColor: `${
                        listSelectSeat.includes(seat.id) ? "green" : "white"
                      }`,
                      backgroundColor: `${
                        listSelectSeat.includes(seat.id)
                          ? "green"
                          : "transparent"
                      }`,
                    }}
                  >
                    <Text
                      style={{
                        color: `${
                          listSelectSeat.includes(seat.id) ? "white" : "green"
                        }`,
                      }}
                    >
                      {seat.name}
                    </Text>
                    {listSelectSeat.includes(seat.id) ? (
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
              <TouchableOpacity disabled>
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
            <Text>{formatPrice(listSelectSeat.length * routeInfo.fare)}</Text>
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
          disabled={listSelectSeat.length === 0}
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
