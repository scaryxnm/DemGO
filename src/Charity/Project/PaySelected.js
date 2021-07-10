import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Pressable,
  Modal,
  Alert,
} from "react-native";
import { Header } from "react-native-elements";
import MyBackButton from "../../components/MyBackButton";
import MyNotiffButton from "../../components/MyNotiffButton";
import CenterHeaderText from "../../components/CenterHeaderText";
import AntDesign from "react-native-vector-icons/AntDesign";
import MyButton from "../../components/MyButton";
import { RadioButton } from "react-native-paper";
import Feather from "react-native-vector-icons";

const PaySelected = ({ route, navigation }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [checked, setChecked] = useState("first");
  const data = route.params;
  const pay = route.params;
  return (
    <View>
      <Header
        backgroundImage={data.photo_url}
        backgroundImageStyle={{ width: 500, height: 250 }}
        containerStyle={{ height: 200 }}
        centerComponent={<CenterHeaderText text="Хандив өгөх" />}
        leftComponent={<MyBackButton onPress={() => navigation.goBack()} />}
        rightComponent={<MyNotiffButton onPress={() => console.log("hhelo")} />}
      />
      <View style={{ backgroundColor: "#F5F5F5", borderRadius: 20 }}>
        <View style={{ backgroundColor: "#F5F5F5", borderRadius: 20 }}>
          <Text
            style={{
              fontSize: 16,
              fontFamily: "Regular",
              alignSelf: "center",
              marginTop: 30,
            }}
          >
            Хандивлах дүн
          </Text>
          <Text
            style={{
              alignSelf: "center",
              color: "#FF8D1A",
              fontSize: 36,
              fontFamily: "NunitoBold",
            }}
          >
            {pay.price}
          </Text>
        </View>
        <View>
          <TouchableOpacity onPress={() => setChecked("first")}>
            <View style={styles.container}>
              <Image
                source={require("../../../assets/img/pay/cashless-payment.png")}
              />
              <View style={{ flexDirection: "row", alignSelf: "center" }}>
                <Text
                  style={{ fontSize: 16, fontFamily: "NunitoBold", left: 20 }}
                >
                  Дансаар шилжүүлэх
                </Text>
                <View
                  style={{
                    borderWidth: 1,
                    left: 100,
                    borderColor: "#E1E1E1",
                    borderRadius: 50,
                  }}
                >
                  <RadioButton
                    value="first"
                    status={checked === "first" ? "checked" : "unchecked"}
                  />
                </View>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setChecked("second")}>
            <View style={styles.container}>
              <Image source={require("../../../assets/img/pay/qpay.png")} />
              <View style={{ flexDirection: "row", alignSelf: "center" }}>
                <Text
                  style={{ fontSize: 16, fontFamily: "NunitoBold", left: 20 }}
                >
                  qPay
                </Text>
                <View
                  style={{
                    borderWidth: 1,
                    left: 225,
                    borderColor: "#E1E1E1",
                    borderRadius: 50,
                  }}
                >
                  <RadioButton
                    value="second"
                    status={checked === "second" ? "checked" : "unchecked"}
                    onPress={() => setChecked("second")}
                  />
                </View>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setChecked("third")}>
            <View style={styles.container}>
              <Image
                source={require("../../../assets/img/pay/socialpay.png")}
              />
              <View style={{ flexDirection: "row", alignSelf: "center" }}>
                <Text
                  style={{ fontSize: 16, fontFamily: "NunitoBold", left: 20 }}
                >
                  SocialPay
                </Text>
                <View
                  style={{
                    borderWidth: 1,
                    left: 190,
                    borderColor: "#E1E1E1",
                    borderRadius: 50,
                  }}
                >
                  <RadioButton
                    value="third"
                    status={checked === "third" ? "checked" : "unchecked"}
                    onPress={() => setChecked("third")}
                  />
                </View>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setChecked("fourth")}>
            <View style={styles.container}>
              <Image source={require("../../../assets/img/pay/Khanbank.png")} />
              <View style={{ flexDirection: "row", alignSelf: "center" }}>
                <Text
                  style={{ fontSize: 16, fontFamily: "NunitoBold", left: 20 }}
                >
                  Хаан Банк
                </Text>
                <View
                  style={{
                    borderWidth: 1,
                    left: 180,
                    borderColor: "#E1E1E1",
                    borderRadius: 50,
                  }}
                >
                  <RadioButton
                    value="fourth"
                    status={checked === "fourth" ? "checked" : "unchecked"}
                    onPress={() => setChecked("fourth")}
                  />
                </View>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setChecked("fifth")}>
            <View style={styles.container}>
              <Image
                source={require("../../../assets/img/pay/golomtbank.png")}
              />
              <View style={{ flexDirection: "row", alignSelf: "center" }}>
                <Text
                  style={{ fontSize: 16, fontFamily: "NunitoBold", left: 20 }}
                >
                  Голомт Банк
                </Text>
                <View
                  style={{
                    borderWidth: 1,
                    left: 160,
                    borderColor: "#E1E1E1",
                    borderRadius: 50,
                  }}
                >
                  <RadioButton
                    value="fifth"
                    status={checked === "fifth" ? "checked" : "unchecked"}
                    onPress={() => setChecked("fifth")}
                  />
                </View>
              </View>
            </View>
          </TouchableOpacity>
          <View
            style={{
              backgroundColor: "white",
              borderRadius: 20,
              marginTop: 50,
              shadowColor: "#000000",
              shadowOpacity: 0.3,
            }}
          >
            <MyButton
              title={"Хандив өгөх"}
              style={{ backgroundColor: "orange", width: 380 }}
              onPress={() => setModalVisible(true)}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

export default PaySelected;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: "white",
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#E1E1E1",
    padding: 10,
    marginHorizontal: 20,
    marginVertical: 10,
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 20,
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
    fontSize: 15,
    marginHorizontal: 30,
  },
});
