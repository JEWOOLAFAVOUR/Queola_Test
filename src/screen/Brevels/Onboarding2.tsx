import { COLORS } from "@/src/constants";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Onboarding2 = () => {
  return (
    <View style={styles.page}>
      <Text>Onboarding2</Text>
    </View>
  );
};

export default Onboarding2;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
});
