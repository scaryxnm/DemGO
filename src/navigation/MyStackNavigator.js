import React from "react";

import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../../HomeScreen";
import CharityScreen from "../Charity/screens/CharityScreen";
import InProject from "../Charity/Project/InProject";
import PayingDetails from "../Charity/Project/PayingDetails";

const Stack = createStackNavigator();

export default () => (
  <Stack.Navigator>
    <Stack.Screen
      name="Home"
      component={HomeScreen}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="Charity"
      component={CharityScreen}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="InProject"
      component={InProject}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="PayingDetails"
      component={PayingDetails}
      options={{ headerShown: false }}
    />
  </Stack.Navigator>
);
