import { COLORS } from "@/src/constants";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Onboarding = () => {
  return (
    <View style={styles.page}>
      <Text>Onboarding</Text>
    </View>
  );
};

export default Onboarding;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
});
