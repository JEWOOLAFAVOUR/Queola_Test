import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { COLORS } from "../constants";

const Wolffins = () => {
  return (
    <View style={styles.page}>
      <Text>Wolffins</Text>
    </View>
  );
};

export default Wolffins;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
});
