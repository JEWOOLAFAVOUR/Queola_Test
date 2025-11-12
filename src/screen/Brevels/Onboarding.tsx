import { COLORS, images, SIZES } from "@/src/constants";
import { useNavigation } from "@react-navigation/native";
import React, { useEffect } from "react";
import { Image, StatusBar, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Onboarding = () => {
  const navigation = useNavigation();

  useEffect(() => {
    setTimeout(() => {
      navigation.navigate("Onboarding2");
    }, 3000);
  }, []);

  return (
    <SafeAreaView style={styles.page}>
      <StatusBar backgroundColor={COLORS.white} barStyle={"dark-content"} />
      <Image
        source={images.logo}
        style={{ height: SIZES.h1 * 3.5, width: SIZES.h1 * 3.5 }}
      />
    </SafeAreaView>
  );
};

export default Onboarding;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: COLORS.white,
    justifyContent: "center",
    alignItems: "center",
  },
});
