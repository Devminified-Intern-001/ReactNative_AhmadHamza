// import React from "react";
// import { NavigationContainer } from "@react-navigation/native";
// import { createNativeStackNavigator } from "@react-navigation/native-stack";
// import SignInScreen from "./SignInScreen";
// import SignUpScreen from "./SignUpScreen";
// import { types } from "@babel/core";

// export type RootStackParamList = {
//   SignInScreen: undefined;
//   SignUpScreen: undefined;
// };

// const Stack = createNativeStackNavigator<RootStackParamList>();

// export default function App() {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator initialRouteName="SignInScreen">
//         <Stack.Screen
//           name="SignInScreen"
//           component={SignInScreen}
//           options={{
//             title: "Signin Page",
//           }}
//         />
//         <Stack.Screen
//           name="SignUpScreen"
//           component={SignUpScreen}
//           options={{
//             title: "Sign Up Page",
//           }}
//         />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }
