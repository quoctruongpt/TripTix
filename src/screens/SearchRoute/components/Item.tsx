import { Text } from "@rneui/themed";
import { TouchableOpacity } from "react-native";

export const Item: React.FC<{
  label: string;
  value: string;
  onPress: () => void;
}> = ({ label, value, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Text>{label}</Text>
      <Text style={{ fontWeight: "700", fontSize: 16 }}>{value}</Text>
    </TouchableOpacity>
  );
};
