import FormButton from "@/src/components/FormButton";
import HeaderA from "@/src/components/HeaderA";
import { COLORS, FONTS, SIZES } from "@/src/constants/theme";
import Feather from "@expo/vector-icons/Feather";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Step4 = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.page}>
      <View style={{ flex: 1 }}>
        <HeaderA />
        <View
          style={{
            marginTop: SIZES.height * 0.3,
            marginHorizontal: SIZES.width * 0.1,
          }}
        >
          <Feather
            name="mail"
            size={SIZES.h1}
            color="black"
            style={{ alignSelf: "center", marginBottom: SIZES.h3 }}
          />
          <Text
            style={{
              ...FONTS.body2,
              fontFamily: "Inter-Medium",
              color: COLORS.black,
              textAlign: "center",
              marginBottom: SIZES.h3,
            }}
          >
            Welcome to Bevel
          </Text>
          <Text
            style={{ ...FONTS.body4, color: COLORS.gray, textAlign: "center" }}
          >
            Before you begin, let's take a few minutes to learn more about you!
          </Text>
        </View>
      </View>
      <FormButton
        title={"Continue"}
        onPress={() => navigation.navigate("hello")}
      />
    </View>
  );
};

export default Step4;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: COLORS.white,
    paddingTop: SIZES.h4,
    paddingHorizontal: SIZES.width * 0.05,
    paddingBottom: SIZES.h1,
  },
});
