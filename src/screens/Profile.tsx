import React from "react";
import { ImageBackground, View } from "react-native";

import { useQueryClient } from "@tanstack/react-query";

import { logout } from "~/api";
import images from "~/assets/images";
import { ButtonBase, Typography } from "~/components";
import { SCREENS } from "~/Router";
import { useUserStore } from "~/store/userStore";

export const Profile = ({ navigation }) => {
  const queryClient = useQueryClient();
  const resetUser = useUserStore((s) => s.resetUser);
  const handleLogout = async () => {
    await logout();
    await resetUser();
    queryClient.clear();
  };

  return (
    <ImageBackground
      source={images.bg3}
      resizeMode="cover"
      className="flex-1 justify-center"
    >
      <View className="flex-1 justify-center pt-20">
        <ButtonBase
          title="Logout"
          classes="bg-gray-800 self-center"
          onPress={handleLogout}
        />
      </View>
    </ImageBackground>
  );
};
