import HeaderA from "@/src/components/HeaderA";
import { COLORS, SIZES } from "@/src/constants/theme";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Step1 = () => {
  return (
    <View style={styles.page}>
      <HeaderA />
      <Text>Step1</Text>
    </View>
  );
};

export default Step1;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: COLORS.white,
    paddingTop: SIZES.h4,
    paddingHorizontal: SIZES.width * 0.05,
  },
});
