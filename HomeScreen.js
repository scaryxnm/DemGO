import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
  SafeAreaView,
  Alert,
} from "react-native";
import { Nunito_700Bold } from "@expo-google-fonts/nunito";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";

const HomeScreen = ({ navigation }) => {
  let [fontLoaded, error] = useFonts({
    Nunito_700Bold,
    NunitoBold: require("./assets/fonts/Nunito-Bold.ttf"),
    ExtraBold: require("./assets/fonts/Nunito-ExtraBold.ttf"),
    SemiBold: require("./assets/fonts/Nunito-SemiBold.ttf"),
    BoldItal: require("./assets/fonts/Nunito-BoldItalic.ttf"),
    Regular: require("./assets/fonts/Nunito-Regular.ttf"),
    Jijig: require("./assets/fonts/Nunito-Light.ttf"),
  });
  if (!fontLoaded) {
    return <AppLoading />;
  }
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <TouchableOpacity
        style={{ flex: 1 }}
        onPress={() => navigation.navigate("Charity")}
      >
        <ImageBackground
          source={require("./assets/img/CharityIMG.png")}
          style={{
            flex: 1,
            top: 20,
            borderRadius: 40,
            margin: 45,
          }}
        >
          <View
            style={{
              flex: 1,
              flexDirection: "column",
              justifyContent: "center",
              alignContent: "center",
              alignItems: "center",
            }}
          >
            <Text
              style={{
                fontFamily: "Nunito_700Bold",
                fontSize: 56,
                color: "#FFFFFF",
              }}
            >
              dem
              <Text style={{ color: "#0033FF" }}>+</Text>
            </Text>
            <Text
              style={{
                fontSize: 22,
                color: "#FFFFFF",
                fontFamily: "Nunito_700Bold",
              }}
            >
              Charity
            </Text>
          </View>
        </ImageBackground>
      </TouchableOpacity>
      <TouchableOpacity style={{ flex: 1 }} onPress={() => Alert.alert("Hi")}>
        <ImageBackground
          source={require("./assets/img/BussinessIMG.png")}
          style={{
            flex: 1,
            margin: 45,
          }}
        >
          <View
            style={{
              flex: 1,
              flexDirection: "column",
              justifyContent: "center",
              alignContent: "center",
              alignItems: "center",
            }}
          >
            <Text
              style={{
                fontFamily: "Nunito_700Bold",
                fontSize: 56,
                color: "#FFFFFF",
              }}
            >
              dem
              <Text style={{ color: "#FF8D1A" }}>+</Text>
            </Text>
            <Text
              style={{
                fontSize: 22,
                color: "#FFFFFF",
                fontFamily: "Nunito_700Bold",
              }}
            >
              Bussiness
            </Text>
          </View>
        </ImageBackground>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
