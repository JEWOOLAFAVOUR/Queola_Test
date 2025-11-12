import { COLORS } from "@/src/constants";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Onboarding3 = () => {
  return (
    <View style={styles.page}>
      <Text>Onboarding3</Text>
    </View>
  );
};

export default Onboarding3;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
});
