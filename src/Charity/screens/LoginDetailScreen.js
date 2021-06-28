import React from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
} from "react-native";
import { Header } from "react-native-elements";
import CenterHeaderText from "../../components/CenterHeaderText";
import MyBackButton from "../../components/MyBackButton";
import MyButton from "../../components/MyButton";

const LoginDetailScreen = ({ navigation }) => {
  return (
    <ScrollView>
      <Header
        backgroundImage={require("../../../assets/img/CharityIMG.png")}
        backgroundImageStyle={{ width: 500, height: 250 }}
        containerStyle={{ height: 200 }}
        centerComponent={<CenterHeaderText text="НЭВТРЭХ" />}
        leftComponent={<MyBackButton onPress={() => navigation.goBack()} />}
      />
      <View style={{ backgroundColor: "#F5F5F5", borderRadius: 40 }}>
        <View style={{ top: 80 }}>
          <MyButton
            title={"Facebook-p нэвтрэх"}
            style={{ backgroundColor: "#365291" }}
            onPress={() => console.log("hi")}
          />
          <MyButton
            title={"Нэвтрэх"}
            style={{ backgroundColor: "#FF8D1A" }}
            onPress={() => navigation.navigate("InLoginScreen")}
          />
          <Text
            style={{
              textAlign: "center",
              marginVertical: 30,
              fontSize: 12,
              fontWeight: "200",
            }}
          >
            эсвэл
          </Text>
          <TouchableOpacity
            onPress={() => navigation.navigate("RegisterScreen")}
          >
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
                {" "}
                Бүртгүүлэх{" "}
              </Text>
            </View>
          </TouchableOpacity>
          <Text
            style={{
              fontSize: 10,
              fontWeight: "200",
              textAlign: "center",
              margin: 30,
            }}
          >
            by creating an account, you agree to our terms of use, privacy
            policy, and cookie policy
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default LoginDetailScreen;

const styles = StyleSheet.create({});
