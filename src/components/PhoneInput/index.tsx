import React, { useRef, useState } from "react";
import { StyleSheet } from "react-native";
import { ReactNativeModalDateTimePickerProps } from "react-native-modal-datetime-picker";
import ReactNativePhoneInput from "react-native-phone-input";

export const PhoneInput: React.FC<ReactNativeModalDateTimePickerProps> = ({
  ...props
}) => {
  return (
    <ReactNativePhoneInput
      style={styles.container}
      initialCountry="vn"
      {...props}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: "#fafafa",
    marginVertical: 12,
    borderRadius: 8,
  },
});
