import AntDesign from "@expo/vector-icons/AntDesign";
import Feather from "@expo/vector-icons/Feather";
import React from "react";
import {
  Image,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { COLORS, FONTS, SIZES, images } from "../constants";

const Wolffins = () => {
  return (
    <ScrollView style={styles.page}>
      <StatusBar backgroundColor={COLORS.white} barStyle={"dark-content"} />
      <View
        style={{
          paddingHorizontal: SIZES.width * 0.04,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          marginBottom: SIZES.h4,
        }}
      >
        <Text style={{ ...FONTS.h2, color: COLORS.black }}>Wolf Olins</Text>

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
      <View>
        <Image
          source={{
            uri: "https://www.wolffolins.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2F4rnblstkg79m%2F18EG6DImEQoL7MiuPoPPLm%2Fcec721ff4fe2283746e5e8ea12022d1a%2F00_Lloyds_Website_Carousel.jpg&w=1920&q=75",
          }}
          style={{ width: SIZES.width, height: SIZES.height * 0.4 }}
        />
      </View>
      <View
        style={{
          paddingTop: SIZES.h4,
          paddingHorizontal: SIZES.width * 0.05,
          marginBottom: SIZES.h1,
        }}
      >
        <Text
          style={{
            ...FONTS.h2,
            color: COLORS.black,
            fontFamily: "Inter-Regular",
            marginBottom: SIZES.h5,
          }}
        >
          Our Ambition
        </Text>
        <Text
          style={{
            ...FONTS.body1,
            color: COLORS.black,
            fontFamily: "Inter-Medium",
          }}
        >
          We create transformative brands that move{" "}
          <Text style={{ textDecorationLine: "underline" }}>
            businesses, people
          </Text>{" "}
          and the{" "}
          <Text style={{ textDecorationLine: "underline" }}>world forward</Text>
          .
        </Text>
        <Image
          source={images.wolf_1}
          style={{
            height: SIZES.height * 0.3,
            width: SIZES.width * 0.9,
            marginTop: SIZES.h2,
          }}
        />
        <View
          style={{
            height: 1,
            backgroundColor: COLORS.black,
            marginVertical: SIZES.h1,
          }}
        />
        <Text
          style={{
            ...FONTS.body1,
            color: COLORS.black,
            fontFamily: "Inter-Medium",
          }}
        >
          Selected Work
        </Text>
      </View>
    </ScrollView>
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
