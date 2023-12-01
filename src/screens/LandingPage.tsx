import React, { useEffect } from "react";
import { ActivityIndicator, ImageBackground, View } from "react-native";

import { useQuery } from "@tanstack/react-query";

import { getMotivationalPhrase } from "~/api/endpoints";
import images from "~/assets/images";
import { Typography } from "~/components";
import { SCREENS } from "~/Router";

export const LandingPage = ({ navigation }) => {
  const { data, isLoading } = useQuery({
    queryFn: getMotivationalPhrase,
    queryKey: ["GET_MOTIVATIONAL_PHRASE"],
    onError: (err: unknown) => {
      console.log("error", err);
    },
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate(SCREENS.SelectColor);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <ImageBackground
      source={images.bg5}
      resizeMode="cover"
      className="flex-1 justify-center"
    >
      {isLoading || !data ? (
        <ActivityIndicator size={"large"} color="white" />
      ) : (
        <View className="flex-1 items-center justify-center">
          <View className="flex-1 justify-end">
            <Typography classes="mx-3 text-white mt-16 text-center text-2xl font-bold mx-3">
              {data?.data?.message}
            </Typography>
          </View>
          <View className="mb-20 flex-1 justify-end"></View>
        </View>
      )}
    </ImageBackground>
  );
};
