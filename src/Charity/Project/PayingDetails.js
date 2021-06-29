import React from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { Header } from "react-native-elements";
import MyBackButton from "../../components/MyBackButton";
import MyNotiffButton from "../../components/MyNotiffButton";
import MyButton from "../../components/MyButton";

const PayingDetails = ({ navigation, route }) => {
  const data = route.params;
  const payData = () => {
    <View>
      <Text>Hi</Text>
    </View>;
  };
  return (
    <View>
      <Header
        backgroundImage={data.photo_url}
        backgroundImageStyle={{ width: 500, height: 250 }}
        containerStyle={{ height: 200 }}
        leftComponent={<MyBackButton onPress={() => navigation.goBack()} />}
        rightComponent={<MyNotiffButton onPress={() => console.log("hhelo")} />}
      />
      <View
        style={{
          backgroundColor: "white",
          borderRadius: 40,
        }}
      >
        <View
          style={{
            backgroundColor: "white",
            margin: 20,
            padding: 10,
            borderWidth: 1,
            borderColor: "#D2D2D2",
            borderRadius: 20,
          }}
        >
          <Text
            style={{
              fontFamily: "NunitoBold",
              fontSize: 20,
              color: "#FF8D1A",
              marginHorizontal: 20,
              marginVertical: 10,
            }}
          >
            Урамшуулалгүй хандив
          </Text>
          <Text
            style={{
              fontFamily: "Regular",
              fontSize: 14,
              color: "#5A5959",
              marginVertical: 20,
              marginHorizontal: 20,
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit...
          </Text>
          <View
            style={{
              backgroundColor: "#FF8D1A",
              padding: 15,
              marginHorizontal: 80,
              borderRadius: 20,
              marginVertical: 20,
            }}
          >
            <TouchableOpacity>
              <Text
                style={{
                  alignSelf: "center",
                  color: "white",
                  fontFamily: "NunitoBold",
                  fontSize: 18,
                }}
              >
                Сонгох
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <FlatList />
    </View>
  );
};

export default PayingDetails;

const styles = StyleSheet.create({});
