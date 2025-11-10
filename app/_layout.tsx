import IntroSlider from "@/src/screen/IntroSlider";
import ShapeAbout from "@/src/screen/ShapeAbout";
import ShapeBlog from "@/src/screen/ShapeBlog";
import ShapeBookCall from "@/src/screen/ShapeBookCall";
import ShapeCaseStudies from "@/src/screen/ShapeCaseStudies";
import ShapeContact from "@/src/screen/ShapeContact";
import ShapeMarketplace from "@/src/screen/ShapeMarketplace";
import ShapeScape from "@/src/screen/ShapeScape";
import WolfAbout from "@/src/screen/WolfAbout";
import WolfContact from "@/src/screen/WolfContact";
import Wolffins from "@/src/screen/Wolffins";
import WolfNews from "@/src/screen/WolfNews";
import WolfWork from "@/src/screen/WolfWork";
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
        "Inter-Black": require("@/src/assets/fonts/Inter_24pt-Black.ttf"),
        "Inter-Bold": require("@/src/assets/fonts/Inter_24pt-Bold.ttf"),
        "Inter-ExtraBold": require("@/src/assets/fonts/Inter_24pt-ExtraBold.ttf"),
        "Inter-Italic": require("@/src/assets/fonts/Inter_24pt-Italic.ttf"),
        "Inter-Medium": require("@/src/assets/fonts/Inter_24pt-Medium.ttf"),
        "Inter-Regular": require("@/src/assets/fonts/Inter_24pt-Regular.ttf"),
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
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="IntroSlider" component={IntroSlider} />
          <Stack.Screen name="ShapeScape" component={ShapeScape} />
          <Stack.Screen name="ShapeAbout" component={ShapeAbout} />
          <Stack.Screen name="ShapeBlog" component={ShapeBlog} />
          <Stack.Screen name="ShapeBookCall" component={ShapeBookCall} />
          <Stack.Screen name="ShapeCaseStudies" component={ShapeCaseStudies} />
          <Stack.Screen name="ShapeContact" component={ShapeContact} />
          <Stack.Screen name="ShapeMarketplace" component={ShapeMarketplace} />
          <Stack.Screen name="Wolffins" component={Wolffins} />
          <Stack.Screen name="WolfWork" component={WolfWork} />
          <Stack.Screen name="WolfAbout" component={WolfAbout} />
          <Stack.Screen name="WolfNews" component={WolfNews} />
          <Stack.Screen name="WolfContact" component={WolfContact} />
        </Stack.Navigator>
      </NavigationContainer>
    </NavigationIndependentTree>
  );
};

export default _layout;
