import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { Header } from "react-native-elements";
import MyNotiffButton from "../../components/MyNotiffButton";
import MyBackButton from "../../components/MyBackButton";
import AntDesign from "react-native-vector-icons/AntDesign";
import ReadMore from "@fawazahmed/react-native-read-more";
import MyButton from "../../components/MyButton";
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons";

const InProject = ({ navigation, route }) => {
  const data = route.params;
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
          backgroundColor: "#F5F5F5",
          borderTopLeftRadius: 40,
          borderTopRightRadius: 40,
        }}
      >
        <View
          style={{
            alignSelf: "center",
            marginVertical: 40,
            flexDirection: "row",
          }}
        >
          <Text
            style={{
              fontSize: 24,
              fontFamily: "NunitoBold",
              color: "#FF8D1A",
            }}
          >
            {data.name}
          </Text>
          <AntDesign
            name="heart"
            size={27}
            color="#FF8D1A"
            style={{ left: 30 }}
          />
        </View>
        <View style={{ flexDirection: "row" }}>
          <Image
            source={data.user_profile}
            style={{ width: 36, height: 36, borderRadius: 50, marginLeft: 20 }}
          />
          <View
            style={{
              flexDirection: "row",
            }}
          >
            <View style={{ marginLeft: 10 }}>
              <Text style={{ fontSize: 14, fontFamily: "NunitoBold" }}>
                {data.created_user_name}
              </Text>
              <Text
                style={{
                  fontSize: 12,
                  fontFamily: "Regular",
                  color: "#5A5959",
                }}
              >
                {data.user_role}
              </Text>
            </View>

            <View style={{ paddingHorizontal: 110 }}>
              <Text
                style={{
                  fontSize: 12,
                  fontFamily: "Regular",
                  color: "#5A5959",
                }}
              >
                <AntDesign name="tag" size={15} color={"#000000"} />
                Төрөл {data.created_user_id}
              </Text>
              <Text
                style={{
                  fontSize: 12,
                  fontFamily: "Regular",
                  color: "#5A5959",
                }}
              >
                <AntDesign name="pushpin" size={15} color={"#000000"} />
                {data.location}
              </Text>
            </View>
          </View>
        </View>
        <ReadMore
          numberOfLines={4}
          style={{
            fontSize: 12,
            margin: 35,
            fontFamily: "Regular",
            color: "#5A5959",
          }}
          seeMoreText="Дэлгэрэнгүй"
          seeMoreStyle={{ color: "#FF8D1A" }}
          seeLessText="Хураах"
          seeLessStyle={{ color: "#FF8D1A" }}
        >
          {
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
          }
        </ReadMore>
        <View style={{ flexDirection: "row" }}>
          <TouchableOpacity>
            <View
              style={{
                borderWidth: 2,
                borderColor: "#FF8D1A",
                fontSize: 16,
                height: 50,
                width: 150,
                marginHorizontal: 10,
                marginLeft: 35,
                borderRadius: 10,
                justifyContent: "center",
                alignItems: "center",
                alignContent: "center",
                alignSelf: "center",
                backgroundColor: "white",
                flexDirection: "row",
              }}
            >
              <Text
                style={{
                  color: "#FF8D1A",
                  fontSize: 14,
                  fontFamily: "Regular",
                }}
              >
                Үйл явц
                <SimpleLineIcons
                  name="arrow-right-circle"
                  color="#FF8D1A"
                  size={15}
                  style={{}}
                />
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View
              style={{
                borderWidth: 2,
                borderColor: "#FF8D1A",
                fontSize: 16,
                height: 50,
                width: 150,
                marginHorizontal: 10,
                marginLeft: 35,
                borderRadius: 10,
                justifyContent: "center",
                alignItems: "center",
                alignContent: "center",
                alignSelf: "center",
                backgroundColor: "white",
                flexDirection: "row",
              }}
            >
              <Text
                style={{
                  color: "#FF8D1A",
                  fontSize: 14,
                  fontFamily: "Regular",
                }}
              >
                Сэтгэгдэл
                <SimpleLineIcons
                  name="arrow-right-circle"
                  color="#FF8D1A"
                  size={15}
                  style={{}}
                />
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default InProject;

const styles = StyleSheet.create({});
