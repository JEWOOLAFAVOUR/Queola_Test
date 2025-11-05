import AntDesign from "@expo/vector-icons/AntDesign";
import React from "react";
import {
  Image,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { COLORS, FONTS, SIZES } from "../constants";

const ShapeScape = () => {
  return (
    <ScrollView style={styles.page}>
      <StatusBar
        backgroundColor={COLORS.primary_1}
        barStyle={"light-content"}
      />
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Image
          source={{
            uri: "https://framerusercontent.com/images/3mHzuMg2QsYio7RkLzfPkhwMQdQ.png?scale-down-to=512&width=1200&height=1200",
          }}
          style={{ height: SIZES.h1, width: SIZES.h1 }}
        />
        <Text
          style={{
            ...FONTS.h2,
            color: COLORS.white,
            flex: 1,
            marginLeft: SIZES.h3,
          }}
        >
          ShapeScape
        </Text>
        <TouchableOpacity>
          <AntDesign name="menu" size={24} color="white" />
        </TouchableOpacity>
      </View>

      {/* hero  */}
      <View style={{ marginTop: SIZES.h1, alignItems: "center" }}>
        <Text style={{ ...FONTS.largeTitleBold, color: COLORS.white }}>
          Serious topics
        </Text>
        <Text style={{ ...FONTS.h2, color: COLORS.white, marginTop: SIZES.h5 }}>
          Played by millions
        </Text>
        <Text
          style={{
            ...FONTS.body4,
            color: COLORS.white,
            textAlign: "center",
            marginTop: SIZES.h4,
          }}
        >
          We help organizations turn their educational mission into powerful,
          playable experiences, reaching kids around the world through the games
          they already love.
        </Text>
      </View>
    </ScrollView>
  );
};

export default ShapeScape;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: COLORS.primary_1,
    paddingTop: SIZES.h4,
    paddingHorizontal: SIZES.width * 0.04,
  },
});
