import * as React from "react";
import { useEffect } from "react";

import { NavigationContainer } from "@react-navigation/native";
import type { NavigationProp, ParamListBase } from "@react-navigation/native";
// Screens
import { createStackNavigator } from "@react-navigation/stack";

import { LandingPage } from "./screens/LandingPage";
import { OnboardingScreen } from "./screens/Onboarding";
import { SelectColor } from "./screens/SelectColor";
import { SignInScreen } from "./screens/SignIn";
import { useUserStore } from "./store/userStore";
import TabStack from "./TabNavigation";

// eslint-disable-next-line @typescript-eslint/consistent-type-definitions
export type RootStackParamList = {
  Landing: ParamListBase | undefined;
  SelectColor: ParamListBase | undefined;
  TabStack: ParamListBase | undefined;
  OnboardingScreen: ParamListBase | undefined;
  SignIn: ParamListBase | undefined;
  Home: ParamListBase | undefined;
};
export type StackNavigation = NavigationProp<RootStackParamList>;

const Stack = createStackNavigator<RootStackParamList>();

export const SCREENS = {
  Landing: "Landing",
  SignIn: "SignIn",
  SelectColor: "SelectColor",
  OnboardingScreen: "OnboardingScreen",
  TabStack: "TabStack",
  Home: "Home",
} as const;
export type ScreenName = (typeof SCREENS)[keyof typeof SCREENS];

const useHasHydrated = () => {
  const [hasHydrated, setHasHydrated] = React.useState(false);

  useEffect(() => {
    useUserStore.persist.onFinishHydration(() => {
      setHasHydrated(true);
    });

    setTimeout(() => {
      setHasHydrated(true);
    }, 2000);
  }, []);

  return hasHydrated;
};

export const Router = () => {
  const user = useUserStore((store) => store?.user);
  const hasHydrated = useHasHydrated();

  if (!hasHydrated) {
    return null;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={SCREENS.SignIn}
        screenOptions={{
          headerShown: false,
        }}
      >
        {!user ? (
          <Stack.Group>
            <Stack.Screen name={SCREENS.SignIn} component={SignInScreen} />
          </Stack.Group>
        ) : (
          <Stack.Group>
            <Stack.Screen
              name={SCREENS.OnboardingScreen}
              component={OnboardingScreen}
            />
            <Stack.Screen name={SCREENS.Landing} component={LandingPage} />
            <Stack.Screen name={SCREENS.SelectColor} component={SelectColor} />

            <Stack.Screen name={SCREENS.TabStack} component={TabStack} />
          </Stack.Group>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};
