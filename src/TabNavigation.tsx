import React from "react";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import type { ParamListBase } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { HomeIcon } from "./assets/icons/HomeIcon";
import { SearchIcon } from "./assets/icons/SearchIcon";
import { UserIcon } from "./assets/icons/UserIcon";
import { NewHome } from "./screens/NewHome";
import { Profile } from "./screens/Profile";
import { SearchScreen } from "./screens/SearchScreen";
import { TabIcon } from "./TabIcon";

export interface ProfileStackParamList {
  Profile: ParamListBase;
  GeneralDetails: ParamListBase;
}

const TestStack = createNativeStackNavigator();
const HomeStack = createNativeStackNavigator();
const ProfileStack = createNativeStackNavigator();

const TestStackScreen = () => {
  return (
    <TestStack.Navigator
      initialRouteName="Search"
      screenOptions={{
        headerShown: false,
      }}
    >
      <TestStack.Screen name="Search" component={SearchScreen} />
    </TestStack.Navigator>
  );
};

const HomeStackScreen = () => {
  return (
    <HomeStack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
      }}
    >
      <HomeStack.Screen name="Home" component={NewHome} />
    </HomeStack.Navigator>
  );
};

const ProfileStackScreen = () => {
  return (
    <ProfileStack.Navigator
      initialRouteName="Profile"
      screenOptions={{
        headerShown: false,
      }}
    >
      <ProfileStack.Screen name="Profile" component={Profile} />
    </ProfileStack.Navigator>
  );
};

const Tab = createBottomTabNavigator();
export default function TabStack() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
      }}
      initialRouteName="HomeStack"
    >
      <Tab.Screen
        name="TestStack"
        component={TestStackScreen}
        options={{
          headerShown: false,
          tabBarLabel: "Test",
          tabBarIcon: ({ focused }) => (
            <TabIcon
              label="Social"
              isFocused={focused}
              icon={<SearchIcon stroke={focused ? "#2BACC1" : "black"} />}
            />
          ),
        }}
      />

      <Tab.Screen
        name="HomeStack"
        component={HomeStackScreen}
        options={{
          headerShown: false,
          tabBarLabel: "Home",
          tabBarIcon: ({ focused }) => (
            <TabIcon
              label="Home"
              isFocused={focused}
              icon={<HomeIcon stroke={focused ? "#2BACC1" : "black"} />}
            />
          ),
        }}
      />

      <Tab.Screen
        name="ProfileStack"
        component={ProfileStackScreen}
        options={{
          headerShown: false,
          tabBarLabel: "Profile",
          tabBarIcon: ({ focused }) => (
            <TabIcon
              label="Social"
              isFocused={focused}
              icon={<UserIcon stroke={focused ? "#2BACC1" : "black"} />}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
