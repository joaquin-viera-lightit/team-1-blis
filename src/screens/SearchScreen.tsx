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

export const SearchScreen = ({ navigation }) => {
  const fullName = useUserStore((store) => store?.user?.fullName);
  const [modalVisible, setModalVisible] = useState(true);
  const [firstLoading, setFirstLoading] = useState(true);

  return (
    <ImageBackground
      source={images.bg3}
      resizeMode="cover"
      className="flex-1 justify-center"
    >
      <View className="flex-1 items-center justify-center"></View>
    </ImageBackground>
  );
};
