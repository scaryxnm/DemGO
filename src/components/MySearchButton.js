import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";

const MySearchButton = ({ onPress }) => {
  return (
    <View>
      <TouchableOpacity onPress={onPress}>
        <Image
          source={require("../../assets/img/search.png")}
          style={{ width: 40, height: 40, marginHorizontal: 20 }}
        />
      </TouchableOpacity>
    </View>
  );
};

export default MySearchButton;
