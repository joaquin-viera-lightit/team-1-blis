import React from "react";
import { Button, Image, View } from "react-native";
import Onboarding from "react-native-onboarding-swiper";

import images from "~/assets/images";
import { SCREENS } from "~/Router";

export const OnboardingScreen = ({ navigation }) => {
  const Next = ({ ...props }) => (
    <View className="mr-20 rounded-lg bg-[#2BACC1] px-3">
      <Button color={"white"} title={"Next"} {...props} />
    </View>
  );

  const Skip = ({ ...props }) => (
    <View className="ml-20 rounded-lg px-2">
      <Button color="#2BACC1" title={"Skip"} {...props} />
    </View>
  );

  const Done = ({ ...props }) => (
    <View className="mr-10 rounded-lg bg-[#2BACC1] px-3">
      <Button color={"white"} title={"Get started"} {...props} />
    </View>
  );

  return (
    <Onboarding
      NextButtonComponent={Next}
      SkipButtonComponent={Skip}
      DoneButtonComponent={Done}
      DotComponent={() => <></>}
      render
      bottomBarColor="white"
      onDone={() => navigation.navigate(SCREENS.Landing)}
      onSkip={() => navigation.navigate(SCREENS.Landing)}
      showDone={true}
      pages={[
        {
          backgroundColor: "white",
          image: (
            <Image
              source={images.o1}
              resizeMode="cover"
              style={{ height: 500, width: 428 }}
            />
          ),
          title: "Welcome to B.L.I.S",
          subtitle:
            "Your Blissful Labyrinth of Inner Serenity!Embark on a unique journey to discover tranquility, creativity, and joy within yourself. B.L.I.S. is more than an app; it's your personal oasis for moments of mindfulness and inspiration.",
        },
        {
          backgroundColor: "white",
          image: (
            <Image
              source={images.o2}
              resizeMode="cover"
              style={{ height: 500, width: 428 }}
            />
          ),
          title: "Psychology of Color: How B.L.I.S. Works",
          subtitle:
            "Dive into the fascinating world of color psychology. Each hue carries a unique energy that resonates with emotions. B.L.I.S. harnesses this psychology to create a personalized experience that reflects and uplifts your mood",
        },
        {
          backgroundColor: "white",
          image: (
            <Image
              source={images.o3}
              resizeMode="cover"
              style={{ height: 500, width: 428 }}
            />
          ),
          title: "Process of Creation",
          subtitle:
            "Your journey begins with a simple choice of colors, but it evolves into a mesmerizing process. Witness the transformation as B.L.I.S. weaves your emotions into a psychedelic masterpiece. The creation is uniquely yours, a visual representation of your inner world",
        },
        {
          backgroundColor: "white",
          image: (
            <Image
              source={images.o4}
              resizeMode="cover"
              style={{ height: 500, width: 428 }}
            />
          ),
          title: "Community Connection",
          subtitle:
            "B.L.I.S. is more than an individual experience; it's a shared journey. Connect with a community that celebrates creativity, mindfulness, and positive vibes. Share your creations, send virtual gifts, and explore the serenity together.",
        },
        {
          backgroundColor: "white",
          image: (
            <Image
              source={images.o5}
              resizeMode="cover"
              style={{ height: 500, width: 428 }}
            />
          ),
          title: "Get started!",
          subtitle:
            "By clicking 'Get Started,' I acknowledge and consent to the use of my data for personalized recommendations based on my responses. Let the journey to inner serenity begin! 🌟",
        },
      ]}
    />
  );
};
