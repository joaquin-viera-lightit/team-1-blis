import React from "react";
import { Text, View } from "react-native";

import { clsx } from "clsx";

import { Typography } from "./components";

interface TabIconProps {
  label: string;
  icon: React.ReactNode;
  isFocused: boolean;
}

export const TabIcon = ({ label, icon, isFocused }: TabIconProps) => {
  return (
    <View
      className=" w-20 flex-row rounded-full bg-red-900"
      style={{
        backgroundColor: isFocused ? "#CFF3F9" : "transparent",
        padding: isFocused ? 10 : 0,
        borderRadius: isFocused ? 20 : 0,
        marginTop: 10,
      }}
    >
      {icon}
      {isFocused && (
        <Text
          style={{
            color: "#2BACC1",
            marginLeft: 32,
            marginTop: -21,
            fontWeight: "500",
          }}
        >
          {label}
        </Text>
      )}
    </View>
  );
};
