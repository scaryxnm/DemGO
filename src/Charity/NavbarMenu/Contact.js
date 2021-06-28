import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Modal,
  Pressable,
  ScrollView,
} from "react-native";
import { Header } from "react-native-elements";
import CenterHeaderText from "../../components/CenterHeaderText";
import MyBackButton from "../../components/MyBackButton";
import MyButton from "../../components/MyButton";
import MyNotiffButton from "../../components/MyNotiffButton";
import MyTextInput from "../../components/MyTextInput";
import Feather from "react-native-vector-icons/Feather";
import Icon from "react-native-vector-icons/AntDesign";

const Contact = ({ navigation }) => {
  const [value, onChangeText] = useState();
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <ScrollView>
      <Header
        backgroundImage={require("../../../assets/img/CharityIMG.png")}
        backgroundImageStyle={{ width: 500, height: 250 }}
        containerStyle={{ height: 200 }}
        centerComponent={<CenterHeaderText text="ХОЛБОО БАРИХ" />}
        leftComponent={<MyBackButton onPress={() => navigation.goBack()} />}
        rightComponent={<MyNotiffButton />}
      />
      <View style={{ backgroundColor: "#F5F5F5", borderRadius: 40 }}>
        <View style={{ marginTop: 40 }}>
          <MyTextInput placeholder="Таны нэр" />
          <MyTextInput placeholder="Утасны дугаар" />
          <MyTextInput placeholder="И-Мейл хаяг" />
          <TextInput
            maxLength={100}
            placeholder="Санал хүсэлтээ бичнэ үү"
            numberOfLines={10}
            value={value}
            multiline
            onChangeText={(text) => onChangeText(text)}
            editable
            style={{
              marginVertical: 15,
              borderWidth: 1,
              width: 295,
              height: 120,
              borderColor: "#E1E1E1",
              alignSelf: "center",
              textAlign: "left",
              textAlignVertical: "top",
              borderRadius: 10,
              fontSize: 14,
              fontWeight: "bold",
              backgroundColor: "white",
            }}
          />
          <MyButton
            title={"Илгээх"}
            style={{ backgroundColor: "#FF8D1A" }}
            onPress={() => setModalVisible(true)}
          />
          <View style={styles.centeredView}>
            <Modal
              animationType="slide"
              transparent={true}
              visible={modalVisible}
              onRequestClose={() => {
                Alert.alert("Modal has been closed.");
                setModalVisible(!modalVisible);
              }}
            >
              <View style={styles.centeredView}>
                <Pressable onPress={() => setModalVisible(false)}>
                  <Feather
                    name="x"
                    size={30}
                    color="white"
                    style={{
                      left: 160,
                    }}
                  />
                </Pressable>
                <View style={styles.modalView}>
                  <Text style={styles.modalText}>
                    Таны саналыг хүлээн авлаа. Бид тантай удахгүй холбогдох
                    болно. Танд баярлалаа
                  </Text>

                  <MyButton
                    title={"Нүүр хуудас руу буцах"}
                    style={{ backgroundColor: "#FF8D1A" }}
                    onPress={() => navigation.navigate("Charity")}
                  />
                </View>
              </View>
            </Modal>
          </View>
          <View
            style={{ flexDirection: "row", justifyContent: "space-around" }}
          >
            <View>
              <Text
                style={{
                  fontSize: 12,
                  fontWeight: "100",
                  left: 7,
                  marginVertical: 5,
                }}
              >
                И-Мейл хаяг{" "}
              </Text>
              <Text style={{ fontSize: 14, fontFamily: "NunitoBold" }}>
                Info@dem.asia
              </Text>
            </View>
            <View>
              <Text
                style={{
                  fontSize: 12,
                  fontWeight: "100",
                  left: 9,
                  marginVertical: 5,
                }}
              >
                Утасны дугаар
              </Text>
              <Text style={{ fontSize: 14, fontFamily: "NunitoBold" }}>
                +(976)77497574
              </Text>
            </View>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-evenly",
              top: 35,
            }}
          >
            <Icon name="youtube" size={40} color={"#FF8D1A"} />

            <Icon name="facebook-square" size={40} color={"#FF8D1A"} />
            <Icon name="instagram" size={40} color={"#FF8D1A"} />
            <Icon name="twitter" size={40} color={"#FF8D1A"} />
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default Contact;

const styles = StyleSheet.create({
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
