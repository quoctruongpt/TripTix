import React, { useEffect, useState } from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { Text } from "@rneui/base";
import dayjs from "dayjs";

export default function TichketHistory({ listTicket, type }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    if (listTicket) {
      if (type == "history") {
        const history = listTicket.filter(
          (l) => l.status == 1 || l.status == 2
        );
        setData(history);
      }
      if (type == "perpare") {
        const perpare = listTicket.filter(
          (l) => l.status == 3 || l.status == 4
        );
        setData(perpare);
      }
    }
  }, [listTicket]);

  return (
    <View
      style={{
        display: "flex",
        width: "100%",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: 10,
        flex: 1,
      }}
    >
      {!data  ? (
        <>
          <Icon
            name={`${
              type == "history" ? "ticket-confirmation-outline" : "ticket"
            }`}
            size={80}
            style={{ color: "red" }}
          />
          <Text style={{ color: "orange" }}>Lịch sử vé trống</Text>
        </>
      ) : (
        <ScrollView style={{ flex: 1, paddingBottom: 120, width: "100%" }}>
          {data &&
            data.map((ticket) => (
              <View key={ticket.id} style={styles.ticket}>
                <View style={styles.ticketHeader}>
                  <Text style={{ color: "gray", fontSize: 16 }}>
                    Giờ xuất bến
                  </Text>
                  <Text style={{ color: "orange", fontSize: 30 }}>
                    {dayjs(ticket.startTime).format("HH:mm")}
                  </Text>
                  <Text style={{ fontSize: 18, color: "gray" }}>
                    {dayjs(ticket.startTime).format("DD-MM-YYYY")}
                  </Text>
                  <Text
                    style={{
                      fontSize: 16,
                      color: `${
                        ticket.status == 2 || ticket.status == 4
                          ? "red"
                          : "green"
                      }`,
                      marginTop: 10,
                    }}
                  >
                    {ticket.status == 1 && "Finish"}
                    {ticket.status == 2 && "Cancle"}
                    {ticket.status == 3 && "Paid"}
                    {ticket.status == 4 && "Run"}
                  </Text>
                </View>
                <View style={styles.ticketContent}>
                  <Text style={styles.ticketLabel}>
                    Mã vé: <Text style={styles.ticketValue}>{ticket.code}</Text>
                  </Text>

                  <Text style={styles.ticketLabel}>
                    Điểm xuất phát:
                    <Text style={styles.ticketValue}>
                      {ticket.departurePoint}
                    </Text>
                  </Text>

                  <Text style={styles.ticketLabel}>
                    Điểm kết thúc:
                    <Text style={styles.ticketValue}>{ticket.destination}</Text>
                  </Text>
                  <Text style={styles.ticketLabel}>
                    Ghế:
                    <Text style={styles.ticketValue}>{ticket.bookedSeat} </Text>
                  </Text>
                  <Text style={styles.ticketLabel}>
                    Giờ tới bến:
                    <Text style={styles.ticketValueTime}>
                      {ticket.timeDestination}
                    </Text>
                  </Text>
                </View>
                <View
                  style={{
                    display: "flex",
                    justifyContent: "flex-start",
                    alignItems: "flex-end",
                    flexDirection: "column",
                  }}
                >
                  <Icon name="dots-vertical" size={20} />
                </View>
              </View>
            ))}
        </ScrollView>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  ticket: {
    borderWidth: 1,
    borderColor: "#ccc",
    marginBottom: 10,
    backgroundColor: "#fff",
    display: "flex",
    flexDirection: "row",
    padding: 15,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
    width: "100%",
    justifyContent: "space-between",
  },
  ticketHeader: {
    flexDirection: "column",
    justifyContent: "flex-start",
    marginBottom: 15,
    borderRightWidth: 1,
    borderStyle: "dotted",
    paddingRight: 10,
    alignItems: "center",
  },
  ticketContent: {
    marginBottom: 10,
  },
  ticketLabel: {
    fontWeight: "400",
    marginBottom: 5,
    color: "gray",
  },
  ticketValue: {
    fontSize: 16,
    fontWeight: "bold",
  },
  ticketValueTime: {
    fontSize: 16,
    fontWeight: "bold",
    color: "orange",
  },
});
