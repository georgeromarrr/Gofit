import { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";

import SplashScreen from "./src/screens/onboarding/SplashScreen";
import OnboardingNavigator from "./src/navigation/OnboardingNavigator";

export default function App() {
  const [isSplashScreenVisible, setIsSplashScreenVisible] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsSplashScreenVisible(false);
    }, 2000);
  }, []);

  if (isSplashScreenVisible) {
    return <SplashScreen />;
  } else {
    return (
      <NavigationContainer>
        <OnboardingNavigator />
      </NavigationContainer>
    );
  }
}
