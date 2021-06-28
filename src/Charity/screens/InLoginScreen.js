import React, { useState, useContext } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  TextInput,
} from "react-native";
import { Header } from "react-native-elements";
import CenterHeaderText from "../../components/CenterHeaderText";
import MyBackButton from "../../components/MyBackButton";
import MyTextInput from "../../components/MyTextInput";
import MyButton from "../../components/MyButton";
import Icon from "react-native-vector-icons/AntDesign";
import UserContext from "../../UserContex/UserContex";

const InLoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("a@gmail.com");
  const [password, setPassword] = useState("1234");
  const [error, setError] = useState(null);

  const state = useContext(UserContext);

  const loginHandler = () => {
    if (email.length === 0) {
      Alert.alert("Та имэйл хаягаа бичнэ үү");
      return;
    }

    if (password.length === 0) {
      Alert.alert("Та нууц үгээ бичнэ үү");
      return;
    }

    state.login(email, password);
  };
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
        <View>
          <MyTextInput
            placeholder="И-Мейл хаяг "
            keyboardType="email-address"
            onChangeText={setEmail}
            value={email}
          />
          <View style={{ flexDirection: "row", alignSelf: "center" }}>
            <MyTextInput
              placeholder="Нууц үг  "
              secureTextEntry
              onChangeText={setPassword}
              value={password}
            />
            <Icon
              name="exclamationcircle"
              size={20}
              style={{ right: 40, top: 25 }}
            />
          </View>
          <Text
            style={{
              fontSize: 12,
              textAlign: "center",
              textDecorationLine: "underline",
              fontWeight: "300",
              marginVertical: 20,
            }}
          >
            Нууц үг мартсан уу?
          </Text>
          <MyButton
            title={"Нэвтрэх"}
            style={{ backgroundColor: "#FF8D1A" }}
            onPress={loginHandler}
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
        </View>
      </View>
    </ScrollView>
  );
};

export default InLoginScreen;

const styles = StyleSheet.create({});
