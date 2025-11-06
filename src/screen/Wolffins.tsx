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

        {/* Selected Work Grid */}
        <View style={{ marginTop: SIZES.h2 }}>
          {/* Row 1 */}
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginBottom: SIZES.h4,
            }}
          >
            <View style={{ width: "48%" }}>
              <Image
                source={images.wolf_2}
                style={{
                  width: "100%",
                  height: SIZES.height * 0.25,
                  borderRadius: SIZES.h5,
                }}
              />
              <Text
                style={{
                  ...FONTS.body3,
                  color: COLORS.black,
                  fontFamily: "Inter-Medium",
                  marginTop: SIZES.h4,
                }}
              >
                Sandals & Beaches Resorts
              </Text>
              <Text
                style={{
                  ...FONTS.body4,
                  color: COLORS.gray,
                  marginTop: SIZES.h5,
                }}
              >
                Rooted In Caribbean Soul
              </Text>
            </View>
            <View style={{ width: "48%" }}>
              <Image
                source={images.wolf_3}
                style={{
                  width: "100%",
                  height: SIZES.height * 0.25,
                  borderRadius: SIZES.h5,
                }}
              />
              <Text
                style={{
                  ...FONTS.body3,
                  color: COLORS.black,
                  fontFamily: "Inter-Medium",
                  marginTop: SIZES.h4,
                }}
              >
                Benefit
              </Text>
              <Text
                style={{
                  ...FONTS.body4,
                  color: COLORS.gray,
                  marginTop: SIZES.h5,
                }}
              >
                Blazing new trails in beauty
              </Text>
            </View>
          </View>

          {/* Row 2 */}
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginBottom: SIZES.h4,
            }}
          >
            <View style={{ width: "48%" }}>
              <Image
                source={images.wolf_4}
                style={{
                  width: "100%",
                  height: SIZES.height * 0.25,
                  borderRadius: SIZES.h5,
                }}
              />
              <Text
                style={{
                  ...FONTS.body3,
                  color: COLORS.black,
                  fontFamily: "Inter-Medium",
                  marginTop: SIZES.h4,
                }}
              >
                Decathlon
              </Text>
              <Text
                style={{
                  ...FONTS.body4,
                  color: COLORS.gray,
                  marginTop: SIZES.h5,
                }}
              >
                Rewriting sport's playbook for billions of athletes
              </Text>
            </View>
            <View style={{ width: "48%" }}>
              <Image
                source={images.wolf_5}
                style={{
                  width: "100%",
                  height: SIZES.height * 0.25,
                  borderRadius: SIZES.h5,
                }}
              />
              <Text
                style={{
                  ...FONTS.body3,
                  color: COLORS.black,
                  fontFamily: "Inter-Medium",
                  marginTop: SIZES.h4,
                }}
              >
                Lloyds
              </Text>
              <Text
                style={{
                  ...FONTS.body4,
                  color: COLORS.gray,
                  marginTop: SIZES.h5,
                }}
              >
                A next step forward
              </Text>
            </View>
          </View>

          {/* Last Item Centered */}
          <View style={{ alignItems: "center", marginBottom: SIZES.h1 }}>
            <View style={{ width: "48%" }}>
              <Image
                source={images.wolf_6}
                style={{
                  width: "100%",
                  height: SIZES.height * 0.25,
                  borderRadius: SIZES.h5,
                }}
              />
              <Text
                style={{
                  ...FONTS.body3,
                  color: COLORS.black,
                  fontFamily: "Inter-Medium",
                  marginTop: SIZES.h4,
                }}
              >
                New York Botanical Garden
              </Text>
              <Text
                style={{
                  ...FONTS.body4,
                  color: COLORS.gray,
                  marginTop: SIZES.h5,
                }}
              >
                Renewing a New York institution
              </Text>
            </View>
          </View>
        </View>

        {/* Featured News Section */}
        <View
          style={{
            marginTop: SIZES.h1,
            marginBottom: SIZES.h1,
          }}
        >
          <Text
            style={{
              ...FONTS.body1,
              color: COLORS.black,
              fontFamily: "Inter-Medium",
              marginBottom: SIZES.h2,
            }}
          >
            Featured News
          </Text>

          {/* News Item 1 */}
          <View style={{ marginBottom: SIZES.h1 }}>
            <Image
              source={{
                uri: "https://www.wolffolins.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2F4rnblstkg79m%2F1qG4Q1py9fe1O3tvzk63kB%2F69f5c59a895dcd42d75f088b06c74dd2%2FWO60_Article1_Icon_1300x1300.png%3Fw%3D700%26h%3D700&w=1920&q=75",
              }}
              style={{
                width: "100%",
                height: SIZES.height * 0.25,
                borderRadius: SIZES.h5,
              }}
            />
            <View
              style={{
                backgroundColor: COLORS.black,
                paddingHorizontal: SIZES.h4,
                paddingVertical: SIZES.h5,
                borderRadius: SIZES.h5,
                marginTop: -SIZES.h3,
                marginHorizontal: SIZES.h4,
              }}
            >
              <Text
                style={{
                  ...FONTS.body5,
                  color: COLORS.white,
                  textTransform: "uppercase",
                }}
              >
                Inside
              </Text>
            </View>
            <Text
              style={{
                ...FONTS.body2,
                color: COLORS.black,
                fontFamily: "Inter-Medium",
                marginTop: SIZES.h4,
              }}
            >
              Dear 1965, thanks for the blueprint.
            </Text>
            <Text
              style={{
                ...FONTS.body4,
                color: COLORS.gray,
                marginTop: SIZES.h5,
                lineHeight: 20,
              }}
            >
              As we celebrate our 60th anniversary, we're revisiting the
              blueprint that's shaped us for six decades – and still drives us
              today.
            </Text>
          </View>

          {/* News Item 2 */}
          <View style={{ marginBottom: SIZES.h1 }}>
            <Image
              source={{
                uri: "https://www.wolffolins.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2F4rnblstkg79m%2F1Erx8AaGJ3pYwC0nLraF5H%2F04ab9369127bdeabcd38841807af4d1b%2FWEBSITE_CROP_1300x1300__Square___circle_.png%3Fw%3D700%26h%3D700&w=1920&q=75",
              }}
              style={{
                width: "100%",
                height: SIZES.height * 0.25,
                borderRadius: SIZES.h5,
              }}
            />
            <View
              style={{
                backgroundColor: COLORS.black,
                paddingHorizontal: SIZES.h4,
                paddingVertical: SIZES.h5,
                borderRadius: SIZES.h5,
                marginTop: -SIZES.h3,
                marginHorizontal: SIZES.h4,
              }}
            >
              <Text
                style={{
                  ...FONTS.body5,
                  color: COLORS.white,
                  textTransform: "uppercase",
                }}
              >
                Clients
              </Text>
            </View>
            <Text
              style={{
                ...FONTS.body2,
                color: COLORS.black,
                fontFamily: "Inter-Medium",
                marginTop: SIZES.h4,
              }}
            >
              Blank Street's rebrand is full-on matcha core
            </Text>
            <Text
              style={{
                ...FONTS.body4,
                color: COLORS.gray,
                marginTop: SIZES.h5,
                lineHeight: 20,
              }}
            >
              Creative Director George Lavender caught up with Fast Company to
              explore the Blank Street identity that keeps up.
            </Text>
          </View>

          {/* News Item 3 */}
          <View style={{ marginBottom: SIZES.h1 }}>
            <Image
              source={{
                uri: "https://www.wolffolins.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2F4rnblstkg79m%2F4HU2l2IfGCD2w2ISBB41AA%2F38bcd705b6cb50129c6d7dfe43a1c963%2FMascots_crop.png%3Fw%3D700%26h%3D700&w=1920&q=75",
              }}
              style={{
                width: "100%",
                height: SIZES.height * 0.25,
                borderRadius: SIZES.h5,
              }}
            />
            <View
              style={{
                backgroundColor: COLORS.black,
                paddingHorizontal: SIZES.h4,
                paddingVertical: SIZES.h5,
                borderRadius: SIZES.h5,
                marginTop: -SIZES.h3,
                marginHorizontal: SIZES.h4,
              }}
            >
              <Text
                style={{
                  ...FONTS.body5,
                  color: COLORS.white,
                  textTransform: "uppercase",
                }}
              >
                Thinking
              </Text>
            </View>
            <Text
              style={{
                ...FONTS.body2,
                color: COLORS.black,
                fontFamily: "Inter-Medium",
                marginTop: SIZES.h4,
              }}
            >
              Why Japan and Korea are outsmarting Western brands with mascots
            </Text>
            <Text
              style={{
                ...FONTS.body4,
                color: COLORS.gray,
                marginTop: SIZES.h5,
                lineHeight: 20,
              }}
            >
              Creative Director Matthew Haysom explores how Western brands can
              catch up by creating mascots that humanise products.
            </Text>
          </View>
        </View>

        {/* Footer */}
        <View
          style={{
            marginTop: SIZES.h1,
            paddingTop: SIZES.h1,
            borderTopWidth: 1,
            borderTopColor: COLORS.gray2,
          }}
        >
          <Text
            style={{
              ...FONTS.h1,
              color: COLORS.black,
              textAlign: "center",
              marginBottom: SIZES.h2,
            }}
          >
            2025
          </Text>
          <Text
            style={{
              ...FONTS.h2,
              color: COLORS.black,
              textAlign: "center",
              marginBottom: SIZES.h1,
            }}
          >
            Wolff Olins
          </Text>
          <Text
            style={{
              ...FONTS.body3,
              color: COLORS.gray,
              textAlign: "center",
              marginBottom: SIZES.h1,
            }}
          >
            Talk to us or ask us anything.
          </Text>

          {/* Footer Links */}
          <View
            style={{
              flexDirection: "row",
              flexWrap: "wrap",
              justifyContent: "space-between",
              marginTop: SIZES.h2,
              marginBottom: SIZES.h1 * 2,
            }}
          >
            {[
              "Contact Us",
              "Cookie Policy",
              "Privacy Notice",
              "LinkedIn",
              "Twitter",
              "Instagram",
              "YouTube",
              "Archive",
            ].map((item, index) => {
              return (
                <View
                  key={index}
                  style={{
                    width: "48%",
                    marginBottom: SIZES.h4,
                  }}
                >
                  <Text
                    style={{
                      ...FONTS.body4,
                      color: COLORS.gray,
                      textDecorationLine: "underline",
                    }}
                  >
                    {item}
                  </Text>
                </View>
              );
            })}
          </View>
        </View>
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
