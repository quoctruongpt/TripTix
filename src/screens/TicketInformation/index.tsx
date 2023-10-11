import { ButtonBack } from "@components/ButtonBack";
import { TAppNavigation } from "@navigation/AppNavigator.type";
import { useNavigation } from "@react-navigation/native";
import { Chip, Dialog, Divider, Text } from "@rneui/themed";
import React, { useEffect, useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  View,
  StyleProp,
  TextStyle,
  TouchableOpacity,
} from "react-native";

export const TicketInformation: React.FC = () => {
  const navigation = useNavigation<TAppNavigation<"TicketInformation">>();
  const [confirmCancel, setConfirmCancel] = useState(false);

  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => <ButtonBack onPress={() => setConfirmCancel(true)} />,
    });
  }, []);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#ccc" }}>
      <Box
        title="Thông tin người đặt vé"
        data={[
          { label: "Họ tên", value: "hai hung" },
          { label: "Số điện thoại", value: "01345454" },
          { label: "Email", value: "abv@gamil.com" },
        ]}
      />
      <Box
        title="Thông tin chuyến xe"
        data={[
          { label: "Tuyến", value: "hai hung" },
          { label: "Thời gian", value: "01345454" },
          { label: "Số vé", value: "abv@gamil.com" },
          { label: "Số ghees", value: "abv@gamil.com" },
          { label: "Vị trí", value: "abv@gamil.com" },
          {
            label: "Tổng",
            value: "285000",
            styleValue: { fontSize: 16, fontWeight: "700" },
          },
        ]}
      />
      <View style={{ flex: 1, backgroundColor: "#fff", padding: 16 }}>
        <View
          style={{ padding: 16, backgroundColor: "#f9f9f9", borderRadius: 12 }}
        >
          <Item label="Giá" value="285,000đ" />
          <Item label="Khuyễn mại" value="0đ" />
          <Divider style={{ marginVertical: 12 }} />
          <Item
            label="Thành tiền"
            value="285,000đ"
            styleValue={{ fontSize: 16, fontWeight: "700" }}
          />
        </View>
      </View>
      <Chip
        title="Thanh toán"
        containerStyle={{ padding: 16 }}
        onPress={() => {}}
      />

      <Dialog
        isVisible={confirmCancel}
        onBackdropPress={() => setConfirmCancel(false)}
      >
        <Dialog.Title title="TripTix" />
        <Text>Bạn có muốn huỷ đặt vé không?</Text>
        <Dialog.Actions>
          <Dialog.Button title="Huỷ" onPress={() => setConfirmCancel(false)} />
          <Dialog.Button title="OK" onPress={navigation.goBack} />
        </Dialog.Actions>
      </Dialog>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  box: {
    padding: 16,
    backgroundColor: "#fff",
    marginBottom: 8,
  },
  item: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 8,
  },
});

const Item = ({
  label,
  value,
  styleValue,
}: {
  label: string;
  value: string;
  styleValue?: StyleProp<TextStyle>;
}) => {
  return (
    <View style={styles.item}>
      <Text style={{ color: "#8b96a0" }}>{label}</Text>
      <Text style={styleValue ?? { fontWeight: "600" }}>{value}</Text>
    </View>
  );
};

const Box = ({
  title,
  data = [],
}: {
  title: string;
  data: { label: string; value: string; styleValue?: StyleProp<TextStyle> }[];
}) => {
  return (
    <View style={styles.box}>
      <Text style={{ fontSize: 16, fontWeight: "800", marginBottom: 20 }}>
        {title}
      </Text>
      {data.map((item, index) => (
        <Item
          key={index}
          label={item.label}
          value={item.value}
          styleValue={item.styleValue}
        />
      ))}
    </View>
  );
};
