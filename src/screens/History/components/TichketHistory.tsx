import React, { useEffect, useState } from "react";
import {
  View,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Alert,
  FlatList,
  ImageBackground,
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
import { putCancelBooking, putFeedback } from "@httpClient/trip.api";
import { useStore } from "@store/index";
import { useToast } from "react-native-toast-notifications";
import { formatPrice } from "@utils/price";
import { PopupCancel } from "./PopupCancel";
import { PopupFeedback } from "./PopupFeedback";
import { set } from "mobx";
import { TicketItem } from "./TicketItem";
const utc = require("dayjs/plugin/utc");
dayjs.extend(utc);

export const getColorStatus = (status: string) => {
  switch (status) {
    case BookingStatusId.Cancel:
      return "red";
    case BookingStatusId.Paid:
    case BookingStatusId.Ready:
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
  const [cancel, setCancel] = useState(null);
  const [feedback, setFeedback] = useState(null);
  const {
    authentication: { userInfo, synchUserInfo },
  } = useStore();
  const toast = useToast();

  useEffect(() => {
    if (listTicket) {
      if (type == "history") {
        const history = listTicket
          .filter((item) => CompletedStatus.includes(item.bookingStatus))
          .sort((a, b) => {
            return b.tripDTO?.startTimee - a.tripDTO?.startTimee;
          });
        setData(history);
      }
      if (type == "perpare") {
        const perpare = listTicket
          .filter((item) => UnfinishedStatus.includes(item.bookingStatus))
          .sort((a, b) => {
            return a.tripDTO?.startTimee - b.tripDTO?.startTimee;
          });
        setData(perpare);
      }
    }
  }, [listTicket]);

  const handleCancelBooking = async (booking: any) => {
    try {
      setCancel(null);
      setCanceling(booking.bookingCode);
      const now = dayjs().add(7, "hour").utc().format();
      const diff = dayjs(booking.tripDTO?.startTimee * 1000).diff(
        now,
        "minutes"
      );

      if (diff < 30) {
        toast.show(
          "Xin lỗi, bạn không thể huỷ chuyến đi này do thời điểm đến khi xe chạy chỉ còn 30 phút",
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
    } catch (e) {
      console.log(e);
    } finally {
      setCanceling(null);
    }
  };

  const handleFeedback = async (bookingId: number, star: number) => {
    setFeedback(null);
    putFeedback(bookingId, star);
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
              <TicketItem
                key={index}
                ticket={ticket}
                onPressCancel={(t: any) => setCancel(t)}
                onPressFeedback={(t: any) => setFeedback(t)}
                onPressInfo={(t: any) => setDetail(t)}
                canceling={canceling}
                timeStart={ticket.tripDTO?.startTimee}
                departurePoint={ticket.pickUpPoint}
                destination={ticket.dropOffPoint}
                status={ticket.bookingStatus}
              />
            ))}
        </ScrollView>
      )}
      {!!detail && (
        <TicketDetail booking={detail} show onClose={() => setDetail(null)} />
      )}
      {!!cancel && (
        <PopupCancel
          ticket={cancel}
          show
          onConfirm={() => handleCancelBooking(cancel)}
          onClose={() => setCancel(null)}
        />
      )}
      {feedback && (
        <PopupFeedback
          show={true}
          onConfirm={handleFeedback}
          onClose={() => setFeedback(false)}
          ticket={feedback}
        />
      )}
    </View>
  );
}
