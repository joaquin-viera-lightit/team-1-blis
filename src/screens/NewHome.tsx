import React, { useEffect, useState } from "react";
import {
  ActivityIndicator,
  Image,
  ImageBackground,
  Text,
  View,
} from "react-native";

import { useQuery } from "@tanstack/react-query";

import { getRecomendatioms, getUsers } from "~/api/endpoints";
import images from "~/assets/images";
import { ButtonBase, Typography } from "~/components";
import { ModalBase } from "~/components/ModalBase";
import { useUserStore } from "~/store/userStore";

export const NewHome = ({ navigation }) => {
  const fullName = useUserStore((store) => store?.user?.fullName);
  const [modalVisible, setModalVisible] = useState(true);
  const [firstLoading, setFirstLoading] = useState(true);

  const { data, isLoading, error, isFetching, refetch } = useQuery({
    queryFn: getRecomendatioms,
    queryKey: ["GET_RECOMENDATIONS"],
    onSuccess: () => {
      setFirstLoading(false);
    },
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
        <ActivityIndicator size={"large"} color="black" />
      ) : (
        <View className="flex-1 items-center justify-center">
          <View className="h-[650px] max-h-[650px] w-[350px] flex-1 items-center justify-center rounded-xl bg-white">
            <View className="flex-col items-center">
              <View className="mt-2">
                <Image
                  source={{
                    uri: data?.data?.image,
                  }}
                  className={"m-1 h-64 w-64 rounded-lg"}
                />
              </View>

              {isFetching && !firstLoading && (
                <View className="my-1">
                  <ActivityIndicator size={"large"} color={"black"} />
                </View>
              )}

              <Text className="text-bold mt-4 text-lg font-semibold">
                Recommended for you today
              </Text>
              <Text className="mx-3 mb-10 text-techieGray-500">
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
          </View>
        </View>
      )}
    </ImageBackground>
  );
};
