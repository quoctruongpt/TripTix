import { Button, Input, Text } from "@rneui/themed";
import React, { useDeferredValue, useMemo, useState } from "react";
import { View, FlatList, TouchableOpacity } from "react-native";
import ReactNativeModal from "react-native-modal";

export const ChooseProvince: React.FC<{
  data: { id: string; title: string }[];
  value: string;
  onChange: (value: string) => void;
  renderButton?: (title: string, onPress: () => void) => React.ReactNode;
  title?: string;
}> = ({ data = [], value, onChange, renderButton, title }) => {
  const [showPopup, setShowPopup] = useState(false);
  const [valueSearch, setValueSearch] = useState("");
  const defferedValue = useDeferredValue(valueSearch);
  const dataFilter = useMemo(() => {
    return data.filter((item) => item.title.includes(defferedValue));
  }, [defferedValue, data]);
  const selected = useMemo(() => {
    return data.find((item) => item.id === value);
  }, [value, dataFilter]);

  const onClose = () => {
    setShowPopup(false);
  };

  const handleChoose = (value: string) => {
    onChange(value);
    onClose();
  };

  return (
    <>
      {renderButton ? (
        renderButton(selected?.title, () => setShowPopup(true))
      ) : (
        <TouchableOpacity onPress={() => setShowPopup(true)}>
          <Text>{selected?.title}</Text>
        </TouchableOpacity>
      )}
      <ReactNativeModal isVisible={showPopup} onBackdropPress={onClose}>
        <View
          style={{
            backgroundColor: "#fff",
            borderRadius: 20,
            padding: 16,
          }}
        >
          <Text
            style={{ fontSize: 16, fontWeight: "700", textAlign: "center" }}
          >
            {title ?? "Chọn điểm đến"}
          </Text>
          <Input
            placeholder="Tìm kiếm"
            onChangeText={(text) => setValueSearch(text)}
            value={valueSearch}
          />
          <FlatList
            data={dataFilter}
            keyExtractor={({ id }) => id}
            style={{ maxHeight: 500, marginVertical: 16 }}
            renderItem={({ item, index }) => (
              <TouchableOpacity
                onPress={() => handleChoose(item.id)}
                key={index}
                style={{
                  padding: 12,
                  alignItems: "center",
                  borderBottomWidth: 1,
                  borderColor: "#ccc",
                }}
              >
                <Text
                  style={{
                    fontWeight: "500",
                    color: item.id === value ? "red" : "#4b4b4b",
                  }}
                >
                  {item.title}
                </Text>
              </TouchableOpacity>
            )}
          />
          <Button
            title="Đóng"
            buttonStyle={{ borderRadius: 8 }}
            onPress={onClose}
          />
        </View>
      </ReactNativeModal>
    </>
  );
};
