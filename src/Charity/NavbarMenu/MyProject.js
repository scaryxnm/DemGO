import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Alert } from "react-native";
import CenterHeaderText from "../../components/CenterHeaderText";
import MyBackButton from "../../components/MyBackButton";
import MyButton from "../../components/MyButton";
import MyNotiffButton from "../../components/MyNotiffButton";
import MyTextInput from "../../components/MyTextInput";
import Feather from "react-native-vector-icons/Feather";
import Icon from "react-native-vector-icons/AntDesign";
import { Header } from "react-native-elements";

const MyProject = ({ navigation }) => {
  return (
    <View style={{ flex: 1 }}>
      <Header
        backgroundImage={require("../../../assets/img/CharityIMG.png")}
        backgroundImageStyle={{ width: 500, height: 250 }}
        containerStyle={{ height: 200 }}
        centerComponent={<CenterHeaderText text="МИНИЙ ТӨСӨЛ " />}
        leftComponent={<MyBackButton onPress={() => navigation.goBack()} />}
        rightComponent={<MyNotiffButton />}
      />
      <View style={{ flex: 1, borderRadius: 40, backgroundColor: "#F5F5F5" }}>
        <View style={{ flex: 1 }}>
          <Text
            style={{
              fontSize: 14,
              fontFamily: "NunitoBold",
              textAlign: "center",
              marginTop: 40,
            }}
          >
            Таны зарласан төслүүд{" "}
          </Text>
          <Text
            style={{
              fontSize: 14,
              fontWeight: "300",
              textAlign: "center",
              margin: 70,
            }}
          >
            Өршөөгөөрэй. Та одоогоор төсөл зарлаагүй байна.{" "}
          </Text>
        </View>
        <View style={{ flex: 1 }}>
          <Text
            style={{
              fontSize: 14,
              fontFamily: "NunitoBold",
              textAlign: "center",
              marginTop: 40,
            }}
          >
            Таны оролцосон төслүүд
          </Text>
          <Text
            style={{
              fontSize: 14,
              fontWeight: "300",
              textAlign: "center",
              margin: 70,
            }}
          >
            Өршөөгөөрэй. Та одоогоор төсөл зарлаагүй байна.
          </Text>
          <TouchableOpacity onPress={() => Alert.alert("Hi")}>
            <View
              style={{
                height: 50,
                width: 310,
                marginVertical: 20,
                borderRadius: 10,
                justifyContent: "center",
                alignItems: "center",
                alignContent: "center",
                alignSelf: "center",
                borderWidth: 2,
                borderColor: "#FF8D1A",
              }}
            >
              <Text
                style={{
                  color: "#FF8D1A",
                  fontSize: 16,
                  fontFamily: "NunitoBold",
                }}
              >
                Төслүүдтэй танилцах
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default MyProject;

const styles = StyleSheet.create({});
