import React, { useEffect, useState } from "react";
import {
  View,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Alert,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import IconFA from "react-native-vector-icons/MaterialIcons";
import { Text } from "@rneui/base";
import dayjs from "dayjs";
import { DeviceSize, StatusApiCall } from "@constants/global";
import { TicketDetail } from "./TicketDetail";
import {
  BookingStatusId,
  CanCancelStatus,
  CompletedStatus,
  UnfinishedStatus,
} from "@constants/route";
import { ActivityIndicator } from "react-native";
import { putCancelBooking } from "@httpClient/trip.api";
import { useStore } from "@store/index";
import { useToast } from "react-native-toast-notifications";
import { formatPrice } from "@utils/price";
const utc = require("dayjs/plugin/utc");
dayjs.extend(utc);

export const getColorStatus = (status: string) => {
  switch (status) {
    case BookingStatusId.Cancel:
      return "red";
    case BookingStatusId.Paid:
      return "orange";
    case BookingStatusId.Run:
      return "blue";
    case BookingStatusId.Finish:
      return "green";
    default:
      return "black";
  }
};

export default function TichketHistory({ listTicket, type, onRefresh }) {
  const [data, setData] = useState([]);
  const [detail, setDetail] = useState<Record<string, any> | null>(null);
  const [canceling, setCanceling] = useState<string | null>(null);
  const {
    authentication: { userInfo, synchUserInfo },
  } = useStore();
  const toast = useToast();

  useEffect(() => {
    if (listTicket) {
      if (type == "history") {
        const history = listTicket.filter((item) =>
          CompletedStatus.includes(item.bookingStatus)
        );
        setData(history);
      }
      if (type == "perpare") {
        const perpare = listTicket.filter((item) =>
          UnfinishedStatus.includes(item.bookingStatus)
        );
        setData(perpare);
      }
    }
  }, [listTicket]);

  const handleCancelBooking = async (booking: any) => {
    try {
      setCanceling(booking.bookingCode);
      const now = dayjs().unix();
      const diff = dayjs(booking.tripDTO.startTimee * 1000).diff(
        now * 1000,
        "minutes"
      );

      if (diff < 30) {
        toast.show(
          "Xin lỗi, bạn không thể huỷ chuyến đi này do thời gian đến khi xe chạy chỉ còn 30 phút",
          { type: "error" }
        );
        return;
      }
      const { data } = await putCancelBooking(
        userInfo.idUserSystem,
        booking.idBooking
      );

      if (data.status === StatusApiCall.Success) {
        onRefresh();
        synchUserInfo();
      }
    } catch {
    } finally {
      setCanceling(null);
    }
  };

  const handlePressCancel = (ticket: any) => {
    const now = dayjs().unix();
    const diff = dayjs(ticket.tripDTO.startTimee * 1000).diff(
      now * 1000,
      "days"
    );

    const percent = diff < 1 ? 0.85 : 0.95;
    const refundedAmount = ticket.totalPrice * percent;
    Alert.alert(
      "Huỷ chuyến đi",
      `Bạn có chắc chắn muốn huỷ chuyến đi từ (${ticket.pickUpPoint}) đến (${
        ticket.dropOffPoint
      })?\n\nSố tiền được hoàn lại: ${formatPrice(refundedAmount)} (${
        percent * 100
      }%)`,
      [
        {
          text: "Tôi chắc chắn",
          onPress: () => handleCancelBooking(ticket),
        },
        {
          text: "Huỷ",
          onPress: () => {},
          isPreferred: true,
          style: "cancel",
        },
      ]
    );
  };

  return (
    <View
      style={{
        display: "flex",
        width: DeviceSize.width,
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: 10,
        flex: 1,
      }}
    >
      {data.length === 0 ? (
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
            data.map((ticket, index) => (
              <View key={index} style={styles.ticket}>
                <View style={styles.ticketHeader}>
                  <Text style={{ color: "gray", fontSize: 16 }}>
                    Giờ xuất bến
                  </Text>
                  <Text style={{ color: "orange", fontSize: 30 }}>
                    {dayjs.unix(ticket.tripDTO.startTimee).format("HH:mm")}
                  </Text>
                  <Text style={{ fontSize: 18, color: "gray" }}>
                    {dayjs.unix(ticket.tripDTO.startTimee).format("DD-MM-YYYY")}
                  </Text>
                  <Text
                    style={{
                      fontSize: 18,
                      color: getColorStatus(ticket.bookingStatus),
                      marginTop: 10,
                      fontWeight: "800",
                    }}
                  >
                    {ticket.bookingStatus}
                  </Text>
                </View>
                <View style={styles.ticketContent}>
                  <InfoItem label="Mã đặt vé" value={ticket.bookingCode} />
                  <InfoItem
                    icon={{ name: "my-location", color: "green" }}
                    value={ticket.tripDTO.routeDTO.departurePoint}
                  />
                  <InfoItem
                    icon={{ name: "location-on", color: "orange" }}
                    value={ticket.tripDTO.routeDTO.destination}
                  />
                  <InfoItem
                    label="Tổng số vé"
                    value={ticket.listTicket.length}
                  />
                </View>
                <View>
                  <TouchableOpacity
                    style={{ marginBottom: 16 }}
                    onPress={() => setDetail(ticket)}
                  >
                    <Icon
                      name="information-outline"
                      size={24}
                      color={"orange"}
                    />
                  </TouchableOpacity>
                  {CanCancelStatus.includes(ticket.bookingStatus) && (
                    <TouchableOpacity onPress={() => handlePressCancel(ticket)}>
                      {canceling !== ticket.bookingCode && (
                        <Icon
                          name="book-cancel-outline"
                          size={24}
                          color={"red"}
                        />
                      )}
                      {canceling === ticket.bookingCode && (
                        <ActivityIndicator size={24} />
                      )}
                    </TouchableOpacity>
                  )}
                </View>
              </View>
            ))}
        </ScrollView>
      )}

      {!!detail && (
        <TicketDetail booking={detail} show onClose={() => setDetail(null)} />
      )}
    </View>
  );
}

const InfoItem = ({
  label,
  value,
  icon,
}: {
  label?: string;
  value: string | number;
  icon?: { name: string; color: string };
}) => {
  return (
    <View
      style={{ flexDirection: "row", alignItems: "center", marginBottom: 10 }}
    >
      {!!label && <Text style={{ color: "gray" }}>{label}: </Text>}
      {!!icon && (
        <IconFA
          name={icon.name}
          color={icon.color}
          size={20}
          style={{ marginRight: 6 }}
        />
      )}
      <Text style={styles.ticketValue}>{value}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  ticket: {
    borderWidth: 1,
    borderColor: "#ccc",
    marginBottom: 24,
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
  },
  ticketHeader: {
    flexDirection: "column",
    justifyContent: "flex-start",
    marginBottom: 15,
    borderRightWidth: 1,
    borderStyle: "dotted",
    paddingRight: 10,
    alignItems: "center",
    flex: 1,
  },
  ticketContent: {
    marginBottom: 10,
    flex: 2,
    paddingLeft: 12,
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
