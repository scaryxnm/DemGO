import React from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
import { Header } from "react-native-elements";
import MyBackButton from "../../components/MyBackButton";
import MyNotiffButton from "../../components/MyNotiffButton";
import PayingData from "../../data/PayingData";
import CenterHeaderText from "../../components/CenterHeaderText";

const PayingDetails = ({ navigation, route }) => {
  const data = route.params;
  const Payings = ({ pay }) => {
    return (
      <View
        style={{
          backgroundColor: "white",
          margin: 20,
          borderRadius: 20,
          borderWidth: 1,
          borderColor: "#D2D2D2",
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            margin: 20,
          }}
        >
          <Text
            style={{ color: "#FF8D1A", fontSize: 20, fontFamily: "NunitoBold" }}
          >
            {pay.price}
          </Text>
          <Text
            style={{ color: "#FF8D1A", fontSize: 14, fontFamily: "Regular" }}
          >
            {pay.members}
          </Text>
        </View>
        <Text
          style={{
            color: "#5A5959",
            fontSize: 14,
            fontFamily: "Regular",
            marginHorizontal: 20,
            bottom: 25,
          }}
        >
          {pay.name}
        </Text>
        <Text
          style={{
            color: "#5A5959",
            fontSize: 14,
            fontFamily: "Regular",
            margin: 20,
          }}
        >
          {pay.content}
        </Text>
        <Image
          source={pay.photo_url}
          style={{
            width: 289,
            height: 289,
            alignSelf: "center",
            marginVertical: 0,
            borderRadius: 20,
          }}
        />
        <View
          style={{
            backgroundColor: "#FF8D1A",
            padding: 15,
            marginHorizontal: 80,
            borderRadius: 20,
            marginVertical: 20,
          }}
        >
          <TouchableOpacity
            onPress={() => navigation.navigate("PaySelected", data, pay)}
          >
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
    );
  };
  return (
    <ScrollView>
      <Header
        backgroundImage={data.photo_url}
        backgroundImageStyle={{ width: 500, height: 250 }}
        containerStyle={{ height: 200 }}
        centerComponent={<CenterHeaderText text="Хандив өгөх" />}
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
            <TouchableOpacity
              onPress={() => navigation.navigate("PaySelected", data)}
            >
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
        <FlatList
          data={PayingData}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => <Payings pay={item} />}
        />
      </View>
    </ScrollView>
  );
};

export default PayingDetails;

const styles = StyleSheet.create({});
