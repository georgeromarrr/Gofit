import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import WelcomeSreen from "../screens/onboarding/WelcomeSreen";

const Onboarding = createNativeStackNavigator();

const OnboardingNavigator = () => {
  return (
    <Onboarding.Navigator screenOptions={{ headerShown: false }}>
      <Onboarding.Screen name="Welcome" component={WelcomeSreen} />
    </Onboarding.Navigator>
  );
};

export default OnboardingNavigator;
