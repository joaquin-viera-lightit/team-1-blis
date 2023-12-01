import React, { useEffect, useState } from "react";
import { ImageBackground, Platform, Pressable, View } from "react-native";
import Config from "react-native-config";

import { GoogleSignin } from "@react-native-google-signin/google-signin";
import type { User } from "@react-native-google-signin/google-signin";
import { useNavigation } from "@react-navigation/native";
import { useMutation } from "@tanstack/react-query";

import { postLogin } from "~/api/endpoints";
import { GoogleIcon } from "~/assets/icons/GoogleIcon";
import images from "~/assets/images";
import { Typography } from "../components";
import { SCREENS } from "../Router";
import type { StackNavigation } from "../Router";
import { useUserStore } from "../store/userStore";

GoogleSignin.configure({
  webClientId:
    Platform.OS === "ios" ? Config.IOS_WEB_CLIENT_ID : Config.WEB_CLIENT_ID,
  scopes: [
    "https://www.googleapis.com/auth/userinfo.email",
    "https://www.googleapis.com/auth/userinfo.profile",
  ],
});

export const SignInScreen = () => {
  console.log(Config.IOS_WEB_CLIENT_ID);
  const navigation = useNavigation<StackNavigation>();
  const setUser = useUserStore((s) => s.setUser);
  const [googleUser, setGoogleUser] = useState<User | null>();

  const { mutate: loginMutation, isLoading } = useMutation(postLogin, {
    onSuccess: (data) => {
      if (googleUser) {
        setUser({
          fullName: googleUser.user.name!,
          email: googleUser.user.email,
          id: googleUser.user.id,
          token: data.data.accessToken,
        });
      }
    },
    onError: (error) => {
      console.log("error login", error);
    },
  });

  useEffect(() => {
    void (async () => {
      const isLogged = await GoogleSignin.isSignedIn();

      if (isLogged) {
        const response = await GoogleSignin.getCurrentUser();

        if (response) {
          setUser({
            fullName: response.user.name!,
            email: response.user.email,
            id: response.user.id,
          });
          navigation.navigate(SCREENS.Home);
        }
      }
    })();
  }, [navigation, setUser]);

  return (
    <ImageBackground
      source={images.landing}
      resizeMode="cover"
      className="flex-1 justify-center"
    >
      <View className="h-full w-full items-center justify-center">
        <View className="mt-52 items-center">
          <Pressable
            className="red-500 mb-6 w-btn-xl flex-row items-center justify-center rounded-full bg-white px-6 py-3.5 text-4xl shadow hover:bg-gray-200 active:bg-gray-200"
            onPress={async () => {
              try {
                const hasPlayService = await GoogleSignin.hasPlayServices();
                if (hasPlayService) {
                  const userInfo = await GoogleSignin.signIn();

                  setGoogleUser(userInfo);
                  if (userInfo.user.email.endsWith("@lightit.io")) {
                    loginMutation({
                      name: userInfo.user.name || "",
                      email: userInfo.user.email,
                    });
                    setUser({
                      fullName: userInfo.user.name!,
                      email: userInfo.user.email,
                      id: userInfo.user.id,
                    });
                  } else {
                    await GoogleSignin.signOut();
                    void pushToast({
                      type: ToastType.error,
                      content: "Please sign in with Lightit.io account",
                    });
                  }
                }
              } catch (e) {}
            }}
          >
            <View className="mr-4">
              <GoogleIcon />
            </View>

            <Typography type="bodyRegular16" color="text-black-800">
              Start using B.L.I.S with Google
            </Typography>
          </Pressable>
        </View>
      </View>
    </ImageBackground>
  );
};
