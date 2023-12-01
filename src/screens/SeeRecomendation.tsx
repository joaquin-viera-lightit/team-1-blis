import React, { useState } from "react";
import {
  ActivityIndicator,
  Image,
  ImageBackground,
  Text,
  View,
} from "react-native";

import { useQuery } from "@tanstack/react-query";

import { getRecomendatioms } from "~/api/endpoints";
import images from "~/assets/images";
import { ButtonBase, Typography } from "~/components";
import { ModalBase } from "~/components/ModalBase";
import { useUserStore } from "~/store/userStore";

export const SeeRecomendation = ({ navigation }) => {
  const [modalVisible, setModalVisible] = useState(true);
  const fullName = useUserStore((store) => store?.user?.token);

  console.log(fullName);
  const { data, isLoading, error, isFetching, refetch } = useQuery({
    queryFn: getRecomendatioms,
    queryKey: ["GET_RECOMENDATIONS"],
    onError: (err: unknown) => {
      console.log("error getting recomendations", err);
    },
  });

  console.log(data, isLoading, error);
  return (
    <ImageBackground
      source={images.bg3}
      resizeMode="cover"
      className="flex-1 justify-center"
    >
      {isLoading || !data ? (
        <ActivityIndicator size={"large"} color="white" />
      ) : (
        <View className="flex-1 items-center justify-center ">
          <ModalBase
            visible={modalVisible}
            onClosed={() => setModalVisible(false)}
          >
            <View className="flex-col items-center">
              <View className="">
                <Image
                  source={{
                    uri: data?.data?.image,
                  }}
                  className={"m-1 h-64 w-64 rounded-lg"}
                />
              </View>

              {isFetching && (
                <View className="my-3">
                  <ActivityIndicator size={"large"} color={"black"} />
                </View>
              )}

              <Text className="text-bold mt-4 text-lg font-semibold">
                Recommended for you today
              </Text>
              <Text className="mb-10 text-techieGray-500">
                {data?.data?.message}
              </Text>
              <ButtonBase
                onPress={() => {}}
                classes="self-center justify-end bg-[#2BACC1] w-72 mb-3"
                title="Go to Spotify"
              />
              <ButtonBase
                onPress={() => refetch()}
                classes="self-center justify-end bg-white text-red border-2 border-gray-400 w-72"
                title="Get another recommendation"
                textBlack
              />
            </View>
          </ModalBase>
        </View>
      )}
    </ImageBackground>
  );
};
