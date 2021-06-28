import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
  Image,
} from "react-native";
import Projects from "../../data/ProjectData";
import { useNavigation } from "@react-navigation/native";

const Project = () => {
  const navigation = useNavigation();
  const Cart = ({ data }) => {
    return (
      <TouchableOpacity onPress={() => navigation.navigate("InProject", data)}>
        <View
          style={{
            flex: 1,
            marginTop: 40,
            backgroundColor: "#FFFFFF",

            borderWidth: 0.25,
            borderColor: "#D2D2D2",
            borderRadius: 30,
            marginHorizontal: 40,
          }}
        >
          <Image
            source={data.photo_url}
            style={{
              width: 335,
              height: 224,
              borderTopRightRadius: 30,
              borderTopLeftRadius: 30,
            }}
          />
          <Text
            style={{
              fontSize: 24,
              fontFamily: "ExtraBold",
              color: "#FF8D1A",
              alignSelf: "center",
              marginTop: 20,
            }}
          >
            {data.name}
          </Text>
          <Text
            style={{
              fontSize: 14,
              fontFamily: "Regular",
              color: "#5A5959",
              margin: 25,
            }}
          >
            {data.content}
          </Text>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <View style={{ marginLeft: 50 }}>
              <Text
                style={{
                  fontSize: 14,
                  fontFamily: "Regular",
                  color: "#161616",
                  marginLeft: 20,
                }}
              >
                Цугласан
              </Text>
              <Text
                style={{
                  fontSize: 24,
                  fontFamily: "SemiBold",
                  color: "#3389EE",
                }}
              >
                {data.collected_budget}
              </Text>
            </View>
            <Text
              style={{
                fontSize: 40,
                fontWeight: "300",
                color: "#F5F5F5",
              }}
            >
              |
            </Text>
            <View style={{ marginRight: 60 }}>
              <Text
                style={{
                  fontSize: 14,
                  fontFamily: "Regular",
                  color: "#161616",
                }}
              >
                Төлөвлөгөө
              </Text>
              <Text
                style={{
                  fontSize: 24,
                  fontFamily: "SemiBold",
                  color: "#FF8D1A",
                }}
              >
                {data.goal_budget}
              </Text>
            </View>
          </View>
          <Text
            style={{
              fontSize: 12,
              fontFamily: "Regular",
              color: "#FF8D1A",
              alignSelf: "center",
              margin: 30,
            }}
          >
            {data.end_date}
          </Text>
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <View style={{ backgroundColor: "#F5F5F5" }}>
      <FlatList
        data={Projects}
        renderItem={({ item }) => <Cart data={item} />}
      />
    </View>
  );
};

export default Project;

const styles = StyleSheet.create({});
