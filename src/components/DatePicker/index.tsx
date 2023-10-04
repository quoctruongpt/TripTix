import { Text } from "@rneui/themed";
import dayjs from "dayjs";
import React, { useState } from "react";
import { TouchableOpacity } from "react-native";
import DateTimePickerModal from "react-native-modal-datetime-picker";

export const DatePicker: React.FC<{
  value: Date;
  onConfirm: (value: Date) => void;
}> = ({ value, onConfirm }) => {
  const [showPicker, setShowPicker] = useState(false);

  const handleClose = () => {
    setShowPicker(false);
  };
  return (
    <>
      <TouchableOpacity
        style={{ backgroundColor: "#fafafa", padding: 16, marginVertical: 12 }}
        onPress={() => setShowPicker(true)}
      >
        <Text style={{ color: value ? undefined : "#ccc" }}>
          {value ? dayjs(value).format("DD/MM/YYYY") : "Date of Birth"}
        </Text>
      </TouchableOpacity>

      <DateTimePickerModal
        isVisible={showPicker}
        mode="date"
        onConfirm={(e: Date) => {
          onConfirm(e);
          handleClose();
        }}
        onCancel={handleClose}
        date={value}
      />
    </>
  );
};
