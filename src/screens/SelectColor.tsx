import React, { useState } from "react";
import {
  ActivityIndicator,
  Image,
  ImageBackground,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { FlatList } from "react-native-gesture-handler";

import { useMutation, useQuery } from "@tanstack/react-query";
import clsx from "clsx";

import { getColors, getImages, postSaveImage } from "~/api/endpoints";
import images from "~/assets/images";
import { ButtonBase } from "~/components";
import { ModalBase } from "~/components/ModalBase";
import { Spinner } from "~/components/Spinner";
import { SCREENS } from "~/Router";
import type { Color } from "../api/types";

export const SelectColor = ({ navigation }) => {
  const [colorModalVisible, setColorModalVisible] = useState(true);
  const [imageModalVisible, setImageModalVisible] = useState(false);
  const [selectedColor, setSelectColor] = useState<Color>({});
  const [selectedImage, setSelectedImage] = useState();

  const { data, isLoading } = useQuery({
    queryFn: getColors,
    queryKey: ["GET_COLORS"],
    onError: (err: unknown) => {
      console.log("error", err);
    },
  });

  const colorImages = useQuery({
    queryFn: () => getImages(selectedColor.id),
    queryKey: ["GET_COLOR_IMAGES", selectedColor.id],
    onError: (err: unknown) => {
      console.log("error getting imgs colors", err);
    },
    enabled: false,
  });

  const uploadImage = useMutation(postSaveImage, {
    onSuccess: () => {
      navigation.navigate(SCREENS.TabStack);
    },
    onError: (error) => {
      console.log("error uploading image", error);
    },
  });

  return (
    <ImageBackground
      source={images.bg4}
      resizeMode="cover"
      className="flex-1 justify-center"
    >
      {isLoading || !data ? (
        <ActivityIndicator size={"large"} color="white" />
      ) : (
        <View className="flex-1 items-center justify-center">
          <ModalBase
            visible={colorModalVisible}
            onClosed={() => setColorModalVisible(false)}
          >
            <View className="flex-col">
              <Text className="mb-2 text-center text-lg font-semibold">
                What color is speaking to you right now?
              </Text>
              <FlatList
                data={data?.data?.colors}
                numColumns={2}
                contentContainerStyle={{
                  justifyContent: "center",
                  alignItems: "center",
                }}
                renderItem={({ item }) => (
                  <View
                    className={clsx(
                      selectedColor.value === item.value &&
                        "rounded-2xl border-2 border-black",
                    )}
                  >
                    <TouchableOpacity
                      onPress={() => setSelectColor(item)}
                      className={clsx("m-1 h-32 w-32 rounded-full")}
                      style={{ backgroundColor: item.value }}
                    />
                  </View>
                )}
              />
              <View className="justify-center">
                <ButtonBase
                  classes="mt-4 bg-lightblue-700"
                  title="Confirm"
                  onPress={() => {
                    colorImages.refetch();
                    setColorModalVisible(false);
                    setImageModalVisible(true);
                  }}
                />
              </View>
            </View>
          </ModalBase>
          <ModalBase
            visible={imageModalVisible}
            onClosed={() => setColorModalVisible(false)}
          >
            <View className="flex-col">
              <Text className="mb-2 text-center text-lg font-semibold">
                Which image inspires you the most today?
              </Text>
              <FlatList
                data={colorImages?.data?.data}
                numColumns={2}
                contentContainerStyle={{
                  justifyContent: "center",
                  alignItems: "center",
                }}
                renderItem={({ item }) => (
                  <TouchableOpacity
                    className={clsx(
                      selectedImage?.id === item.id &&
                        "rounded-2xl border-2 border-black",
                    )}
                    onPress={() => setSelectedImage(item)}
                  >
                    <Image
                      source={{
                        uri: item.path,
                      }}
                      className={clsx("m-1 h-32 w-32 rounded-full")}
                    />
                  </TouchableOpacity>
                )}
              />
              {!colorImages.isLoading && (
                <View className=" justify-center">
                  <ButtonBase
                    classes="mt-4 bg-lightblue-700"
                    title="Confirm"
                    onPress={() => {
                      setImageModalVisible(false);
                      uploadImage.mutate({
                        imageId: selectedImage.id,
                      });
                    }}
                  />
                </View>
              )}
            </View>
          </ModalBase>
        </View>
      )}
    </ImageBackground>
  );
};
