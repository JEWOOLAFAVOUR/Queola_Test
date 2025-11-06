import AntDesign from "@expo/vector-icons/AntDesign";
import Feather from "@expo/vector-icons/Feather";
import React from "react";
import { StatusBar, StyleSheet, Text, View } from "react-native";
import { COLORS, FONTS, SIZES } from "../constants";

const Wolffins = () => {
  return (
    <View style={styles.page}>
      <StatusBar backgroundColor={COLORS.white} barStyle={"dark-content"} />
      <View
        style={{
          paddingHorizontal: SIZES.width * 0.04,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Text style={{ ...FONTS.h3, color: COLORS.black }}>Wolf Olins</Text>

        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <AntDesign
            name="menu"
            size={17}
            color="black"
            style={{ marginRight: SIZES.h3 }}
          />
          <Feather name="search" size={17} color="black" />
        </View>
      </View>
    </View>
  );
};

export default Wolffins;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: COLORS.white,
    paddingTop: SIZES.h4,
  },
});
