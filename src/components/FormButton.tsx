import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { COLORS, FONTS, SIZES } from "../constants";

interface FormButtonProps {
  title: string;
}

const FormButton = ({ title }: FormButtonProps) => {
  return (
    <View style={styles.container}>
      <Text
        style={{
          ...FONTS.body3c,
          color: COLORS.white,
          fontFamily: "Inter-Medium",
        }}
      >
        {title}
      </Text>
    </View>
  );
};

export default FormButton;

const styles = StyleSheet.create({
  container: {
    height: SIZES.h1 * 1.5,
    backgroundColor: COLORS.black,
    borderRadius: SIZES.h1,
    justifyContent: "center",
    alignItems: "center",
  },
});
