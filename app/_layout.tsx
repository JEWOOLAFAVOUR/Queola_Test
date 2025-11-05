import IntroSlider from "@/src/screen/IntroSlider";
import ShapeScape from "@/src/screen/ShapeScape";
import {
  NavigationContainer,
  NavigationIndependentTree,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as Font from "expo-font";
import React, { useEffect, useState } from "react";

const _layout = () => {
  const [fontsLoaded, setFontsLoaded] = useState(false);
  const Stack = createNativeStackNavigator();

  useEffect(() => {
    async function loadFonts() {
      await Font.loadAsync({
        "Inter-Black": require("@/src/assets/fonts/Inter_24-Black.ttf"),
        "Inter-Bold": require("@/src/assets/fonts/Inter_24-Bold.ttf"),
        "Inter-ExtraBold": require("@/src/assets/fonts/Inter_24-ExtraBold.ttf"),
        "Inter-Italic": require("@/src/assets/fonts/Inter_24-Italic.ttf"),
        "Inter-Medium": require("@/src/assets/fonts/Inter_24-Medium.ttf"),
        "Inter-Regular": require("@/src/assets/fonts/Inter_24-Regular.ttf"),
      });
      setFontsLoaded(true);
    }

    loadFonts();
  }, []);

  if (!fontsLoaded) {
    return null; // Or return a loading component
  }

  return (
    <NavigationIndependentTree>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="IntroSlider" component={IntroSlider} />
          <Stack.Screen name="ShapeScape" component={ShapeScape} />
        </Stack.Navigator>
      </NavigationContainer>
    </NavigationIndependentTree>
  );
};

export default _layout;
