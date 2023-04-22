import { ImageBackground, StyleSheet, Text, View } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import {
  useFonts,
  Urbanist_700Bold,
  Urbanist_600SemiBold,
  Urbanist_900Black,
} from "@expo-google-fonts/urbanist";

const WelcomeSreen = () => {
  const [fontsLoaded] = useFonts({
    Urbanist_700Bold,
    Urbanist_600SemiBold,
    Urbanist_900Black,
  });

  if (!fontsLoaded) {
    return null;
  }
  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.image}
        source={require("../../../assets/image/screens/welcome.png")}
      >
        <View style={styles.textContianer}>
          <Text style={styles.headerTitle}>Welcome to 👋</Text>
          <Text style={styles.title}>Gofit</Text>
          <Text style={styles.subtitle}>
            The best fitness app in this century to accompany your sports.
          </Text>
        </View>
        <LinearGradient
          colors={["transparent", "#2C2C2C"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 0, y: 0.8 }}
          style={styles.mask}
        />
      </ImageBackground>
    </View>
  );
};

export default WelcomeSreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "red",
    alignItems: "center",
    justifyContent: "center",
  },
  mask: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: "center",
    alignItems: "center",
    height: 550,
  },
  image: {
    flex: 1,
    justifyContent: "flex-end",
    width: "100%",
    alignItems: "flex-start",
    position: "relative",
  },
  textContianer: {
    position: "relative",
    marginLeft: 34,
    marginBottom: 52,
    width: 332,
    zIndex: 25,
  },
  headerTitle: {
    color: "#FFFFFF",
    fontSize: 48,
    lineHeight: 52.8,
    marginBottom: 12,
    display: "flex",
    alignItems: "center",
    fontFamily: "Urbanist_700Bold",
  },
  title: {
    color: "#FFFFFF",
    fontSize: 96,
    lineHeight: 105.6,
    marginBottom: 24,
    fontFamily: "Urbanist_900Black",
  },
  subtitle: {
    color: "white",
    fontSize: 18,
    lineHeight: 25.2,
    fontFamily: "Urbanist_600SemiBold",
  },
});
