import React from "react";
import { StyleSheet, Text, View } from "react-native";
import GlobalFonts from "./GlobalFonts";

const CenterHeaderText = ({ text }) => {
  return (
    <View>
      <Text style={[GlobalFonts.ExtraBold, styles.size]}> {text}</Text>
    </View>
  );
};

export default CenterHeaderText;

const styles = StyleSheet.create({
  size: {
    fontSize: 24,
    color: "#FFFFFF",
  },
});
