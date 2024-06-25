import React from "react";
import { Stack } from "expo-router";

const StackLayout = () => {
  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: "#10101E",
        },
        headerTitleStyle: {
          fontWeight: "bold",
        },
        headerTintColor: "#fff",
      }}
    >
      <Stack.Screen
        name="index"
        options={{ headerTitle: "Sigin", headerShown: false }}
      />
      <Stack.Screen
        name="signUpScreen"
        options={{ headerTitle: "Sigin", headerShown: true }}
      />
    </Stack>
  );
};
export default StackLayout;
