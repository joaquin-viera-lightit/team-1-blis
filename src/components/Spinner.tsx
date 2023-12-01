import React from "react";
import { ActivityIndicator, View } from "react-native";

import clsx from "clsx";

interface SpinnerProps {
  color?: string;
  classes?: string;
}

export function Spinner({ color, classes }: SpinnerProps) {
  return (
    <View className={clsx("flex flex-1 items-center justify-center", classes)}>
      <ActivityIndicator size="large" color={color ?? "black"} />
    </View>
  );
}
