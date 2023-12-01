import React from "react";
import { EventProvider } from "react-native-outside-press";
import { SafeAreaProvider } from "react-native-safe-area-context";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { Router } from "./Router";

if (__DEV__) {
  void import("./ReactotronConfig").then(() =>
    console.debug("Reactotron Configured"),
  );
}
// Create a client
const queryClient = new QueryClient();

export const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <SafeAreaProvider>
        <EventProvider style={{ flex: 1 }}>
          <Router />
        </EventProvider>
      </SafeAreaProvider>
    </QueryClientProvider>
  );
};
