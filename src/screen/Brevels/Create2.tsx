import { COLORS } from "@/src/constants";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Create2 = () => {
  return (
    <View style={styles.page}>
      <Text>Create2</Text>
    </View>
  );
};

export default Create2;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
});
