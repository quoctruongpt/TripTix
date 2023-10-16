import React, { useState } from "react";
import { View, TouchableOpacity, Text } from "react-native";

const TabsComponent = ({ tabs, initialTab, onTabPress }) => {
  const [activeTab, setActiveTab] = useState(initialTab || 0);

  const handleTabPress = (index) => {
    setActiveTab(index);
    if (onTabPress) {
      onTabPress(index);
    }
  };

  return (
    <View style={{ flexDirection: "row" }}>
      {tabs.map((tab, index) => (
        <TouchableOpacity
          key={index}
          onPress={() => handleTabPress(index)}
          style={{
            flex: 1,
            padding: 20,
            alignItems: "center",
            borderBottomWidth: activeTab === index ? 2 : 0,
            borderBottomColor: activeTab === index ? "#D2691E" : "transparent",
          }}
        >
          <Text
            style={{
              color: activeTab === index ? "#D2691E" : "black",
            }}
          >
            {tab}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default TabsComponent;
