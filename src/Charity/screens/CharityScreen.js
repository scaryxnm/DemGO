import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Header } from "react-native-elements";
import MyNavbar from "../../components/MyNavbar";
import MySearchButton from "../../components/MySearchButton";

import GlobalFonts from "../../components/GlobalFonts";
import CenterHeaderText from "../../components/CenterHeaderText";
import TabScreens from "../TabScreens/TabScreens";

const CharityScreen = ({ navigation }) => {
  const onPressHandler = () => {
    navigation.toggleDrawer();
  };
  return (
    <View style={{ flex: 1 }}>
      <Header
        backgroundImage={require("../../../assets/img/CharityIMG.png")}
        backgroundImageStyle={{ width: 500, height: 200 }}
        containerStyle={{ height: 200 }}
        centerComponent={<CenterHeaderText text="ТӨСЛҮҮД" />}
        leftComponent={<MyNavbar onPress={onPressHandler} />}
        rightComponent={<MySearchButton />}
      />
      <View style={{ flex: 1, bottom: 20 }}>
        <TabScreens />
      </View>
    </View>
  );
};

export default CharityScreen;

const styles = StyleSheet.create({
  text: {
    fontSize: 50,
    color: "white",
  },
});
