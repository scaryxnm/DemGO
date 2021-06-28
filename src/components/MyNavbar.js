import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";

const MyNavbar = ({ onPress }) => {
  return (
    <View>
      <TouchableOpacity onPress={onPress}>
        <Image
          source={require("../../assets/img/Menu.png")}
          style={{ width: 40, height: 40, marginHorizontal: 15 }}
        />
      </TouchableOpacity>
    </View>
  );
};

export default MyNavbar;
