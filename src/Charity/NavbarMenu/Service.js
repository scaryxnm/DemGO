import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Header } from "react-native-elements";
import CenterHeaderText from "../../components/CenterHeaderText";
import MyBackButton from "../../components/MyBackButton";

import MyNotiffButton from "../../components/MyNotiffButton";

const Service = ({ navigation }) => {
  return (
    <View style={{ flex: 1 }}>
      <Header
        backgroundImage={require("../../../assets/img/CharityIMG.png")}
        backgroundImageStyle={{ width: 500, height: 250 }}
        containerStyle={{ height: 200 }}
        centerComponent={<CenterHeaderText text="БИДНИЙ ТУХАЙ" />}
        leftComponent={<MyBackButton onPress={() => navigation.goBack()} />}
        rightComponent={<MyNotiffButton />}
      />
      <View style={{ backgroundColor: "#F5F5F5", borderRadius: 40 }}>
        <View style={{ flexDirection: "column" }}>
          <Text
            style={{
              fontSize: 16,
              fontFamily: "NunitoBold",
              textAlign: "center",
              margin: 40,
            }}
          >
            Бид бусдад туслахад таны тус хэрэгтэй
          </Text>
          <Text
            style={{
              fontSize: 13,
              fontWeight: "200",
              marginHorizontal: 40,
              top: 20,
            }}
          >
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. text ever since the 1500s, when an unknown printer took a
            galley of type and scrambled it to make a type specimen book. It has
            survived not only five centuries, but also the leap into electronic
            typesetting, remaining essentially unchanged. It was popularised in
            the 1960s with the release of Letraset sheets containing Lorem Ipsum
            passages, and more recently with desktop publishing software like
            Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is
            simply dummy text of the printing and typesetting industry. text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </Text>
        </View>
      </View>
    </View>
  );
};

export default Service;

const styles = StyleSheet.create({});
