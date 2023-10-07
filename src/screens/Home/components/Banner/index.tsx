import { Divider, Text } from "@rneui/themed";
import { Image } from "expo-image";
import React from "react";
import { TouchableOpacity, View } from "react-native";

export const Banner: React.FC = () => {
  return (
    <View style={{ marginBottom: 60 }}>
      <Image
        source={require("@assets/images/banner/Banner01.png")}
        style={{
          width: "100%",
          height: 150,
          backgroundColor: "red",
          borderRadius: 16,
        }}
      />
      <View style={{ flexDirection: "row", marginTop: 24, marginBottom: 16 }}>
        <Text
          style={{
            fontSize: 16,
            fontWeight: "bold",
            flex: 1,
          }}
        >
          Title
        </Text>
        <TouchableOpacity>
          <Text style={{ color: "#e4613b" }}>Xem tất cả</Text>
        </TouchableOpacity>
      </View>
      <Item showLine={false} />
      <Item />
      <Item />
    </View>
  );
};

const Item: React.FC<{ showLine?: boolean }> = ({ showLine = true }) => {
  return (
    <View style={{ flexDirection: "row", marginBottom: 16 }}>
      <Image
        source={require("@assets/images/banner/Banner01.png")}
        style={{
          backgroundColor: "red",
          width: 70,
          height: 70,
          borderRadius: 8,
          marginTop: showLine ? 10 : 0,
        }}
      />
      <View style={{ flex: 1, marginLeft: 8 }}>
        {showLine && <Divider style={{ marginBottom: 10 }} />}
        <Text style={{ fontWeight: "600" }}>Title</Text>
        <Text style={{ fontSize: 12 }} numberOfLines={3}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex eveniet
          neque aliquid sed praesentium odio cupiditate sit, numquam sapiente
          labore, delectus vero omnis molestiae ad ut suscipit ratione nostrum
          dolorem.
        </Text>
      </View>
    </View>
  );
};
