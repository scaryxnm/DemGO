import React, { useState, useContext } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { Header } from "react-native-elements";
import CenterHeaderText from "../../components/CenterHeaderText";
import MyBackButton from "../../components/MyBackButton";
import MyTextInput from "../../components/MyTextInput";
import MyButton from "../../components/MyButton";
import Icon from "react-native-vector-icons/AntDesign";
import UserContext from "../../UserContex/UserContex";

const RegisterScreen = ({ navigation }) => {
  const [name, setName] = useState("Tselmen");
  const [email, setEmail] = useState("tselmennm@gmail.com");
  const [password1, setPassword1] = useState("123456");
  const [password2, setPassword2] = useState("123456");
  const [error, setError] = useState(null);

  const state = useContext(UserContext);

  const signupHandler = () => {
    setError(null);
    if (name.length === 0) {
      Alert.alert("Ta nere bichne uu ");
      return;
    }
    if (password1 !== password2) {
      Alert.alert("Nuuts ug taarahgui baina!");
      return;
    }

    state.signUp(name, email, password1);
  };
  return (
    <View>
      <Header
        backgroundImage={require("../../../assets/img/CharityIMG.png")}
        backgroundImageStyle={{ width: 500, height: 250 }}
        containerStyle={{ height: 200 }}
        centerComponent={<CenterHeaderText text="БҮРТГҮҮЛЭХ" />}
        leftComponent={<MyBackButton onPress={() => navigation.goBack()} />}
      />
      <View style={{ backgroundColor: "#F5F5F5", borderRadius: 40 }}>
        <View>
          <MyTextInput placeholder="Нэр" value={name} onChangeText={setName} />
          <MyTextInput
            placeholder="И-Мейл хаяг "
            keyboardType="email-address"
            value={email}
            onChangeText={setEmail}
          />
          <MyTextInput
            placeholder="Нууц үг"
            secureTextEntry
            value={password1}
            onChangeText={setPassword1}
          />
          <MyTextInput
            placeholder="Нууц үгээ давтан оруулна уу "
            secureTextEntry
            value={password2}
            onChangeText={setPassword2}
          />
          {error && (
            <Text style={{ color: "red", fontSize: 16, textAlign: "center" }}>
              {error}
            </Text>
          )}
          <MyButton
            title={"Бүртгүүлэх"}
            style={{ backgroundColor: "#FF8D1A", marginVertical: 40 }}
            onPress={signupHandler}
          />
          <Text
            style={{
              fontSize: 12,
              fontWeight: "300",
              textAlign: "center",
              marginVertical: 20,
            }}
          >
            Хэрэв та бүртгэлтэй бол
          </Text>
          <TouchableOpacity
            onPress={() => navigation.navigate("InLoginScreen")}
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
                Нэвтрэх{" "}
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({});
