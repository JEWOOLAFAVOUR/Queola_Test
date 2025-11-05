import { useNavigation } from "@react-navigation/native";
import React from "react";
import { StatusBar, StyleSheet, Text, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { COLORS } from "../constants";

const IntroSlider = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.page}>
      <StatusBar backgroundColor={COLORS.black} barStyle={"light-content"} />

      <TouchableOpacity onPress={() => navigation.navigate("ShapeScape")}>
        <Text>Shapescape</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default IntroSlider;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
});
