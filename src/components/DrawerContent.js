import React, { useState, useContext } from "react";
import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
import {
  View,
  Text,
  Modal,
  TouchableOpacity,
  Alert,
  StyleSheet,
} from "react-native";
import { Avatar, Caption, Drawer } from "react-native-paper";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import Ionicons from "react-native-vector-icons/Ionicons";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import UserContext from "../UserContex/UserContex";

const DrawerContent = (props) => {
  const [modalVisible, setModalVisible] = useState(false);
  const state = useContext(UserContext);
  return (
    <View style={{ flex: 1 }}>
      <DrawerContentScrollView>
        <Drawer.Section>
          <View>
            {state.isLoggedIn ? (
              <TouchableOpacity onPress={() => Alert.alert("Hi")}>
                <Avatar.Image
                  size={100}
                  source={require("../../assets/img/user1.jpeg")}
                  style={{
                    alignSelf: "center",
                    marginTop: 20,
                  }}
                />
                <Text
                  style={{
                    alignSelf: "center",
                    fontSize: 18,
                    fontWeight: "200",
                    marginVertical: 25,
                  }}
                >
                  Тавтай морил!{" "}
                  <Text style={{ color: "#FF8D1A", fontWeight: "700" }}>
                    {state.userName}
                  </Text>
                </Text>
              </TouchableOpacity>
            ) : (
              <TouchableOpacity
                onPress={() => props.navigation.navigate("LoginDetailScreen")}
              >
                <Avatar.Image
                  size={100}
                  source={require("../../assets/img/user1.jpeg")}
                  style={{ backgroundColor: "red", marginHorizontal: 80 }}
                />
                <View
                  style={{
                    marginLeft: 20,
                    marginVertical: 15,
                    flex: 1,
                    flexDirection: "row",
                  }}
                >
                  <Caption style={styles.useg2}>Бүртгүүлэх </Caption>
                  <Caption style={styles.useg}>эсвэл </Caption>
                  <Caption style={styles.useg2}>Нэвтрэх </Caption>
                </View>
              </TouchableOpacity>
            )}
          </View>
          {state.isLoggedIn ? (
            <View style={{ flex: 1 }}>
              <DrawerItem
                label="Миний төслүүд"
                onPress={() => props.navigation.navigate("MyProject")}
                icon={() => (
                  <Ionicons
                    name="rocket"
                    color={"#FF8D1A"}
                    size={20}
                    style={{ marginHorizontal: 10 }}
                  />
                )}
                style={{ marginVertical: 7 }}
              />
              <DrawerItem
                label="Ангилал"
                onPress={() => setModalVisible(true)}
                icon={() => (
                  <Icon
                    name="tag"
                    color={"#FF8D1A"}
                    size={20}
                    style={{ marginHorizontal: 10 }}
                  />
                )}
                style={{ marginVertical: 7 }}
              />
              <DrawerItem
                label="Хайлт"
                onPress={() => props.navigation.navigate("Search")}
                icon={() => (
                  <Ionicons
                    name="ios-search"
                    color={"#FF8D1A"}
                    size={20}
                    style={{ marginHorizontal: 10 }}
                  />
                )}
                style={{ marginVertical: 7 }}
              />
              <DrawerItem
                label="Бидний тухай "
                onPress={() => props.navigation.navigate("Service")}
                icon={() => (
                  <Ionicons
                    name="ios-people"
                    color={"#FF8D1A"}
                    size={20}
                    style={{ marginHorizontal: 10 }}
                  />
                )}
                style={{ marginVertical: 7 }}
              />
              <DrawerItem
                label="Асуулт, хариулт "
                onPress={() => props.navigation.navigate("Question")}
                icon={() => (
                  <FontAwesome
                    name="question-circle"
                    color={"#FF8D1A"}
                    size={20}
                    style={{ marginHorizontal: 10 }}
                  />
                )}
                style={{ marginVertical: 7 }}
              />
              <DrawerItem
                label="Холбоо барих"
                onPress={() => props.navigation.navigate("Contact")}
                icon={() => (
                  <Icon
                    name="phone"
                    color={"#FF8D1A"}
                    size={20}
                    style={{ marginHorizontal: 10 }}
                  />
                )}
                style={{ marginVertical: 7 }}
              />
              <DrawerItem
                label="Системээс гарах"
                onPress={() => state.logout()}
                icon={() => (
                  <Icon
                    name="exit-to-app"
                    color={"#FF8D1A"}
                    size={20}
                    style={{ marginHorizontal: 10 }}
                  />
                )}
                style={{ marginVertical: 50 }}
              />
            </View>
          ) : (
            <View>
              <DrawerItem
                label="Ангилал"
                onPress={() => setModalVisible(true)}
                icon={() => (
                  <Icon
                    name="tag"
                    color={"#FF8D1A"}
                    size={20}
                    style={{ marginHorizontal: 10 }}
                  />
                )}
                style={{ marginVertical: 7 }}
              />
              <DrawerItem
                label="Хайлт"
                onPress={() => props.navigation.navigate("Search")}
                icon={() => (
                  <Ionicons
                    name="ios-search"
                    color={"#FF8D1A"}
                    size={20}
                    style={{ marginHorizontal: 10 }}
                  />
                )}
                style={{ marginVertical: 7 }}
              />
              <DrawerItem
                label="Бидний тухай "
                onPress={() => props.navigation.navigate("Service")}
                icon={() => (
                  <Ionicons
                    name="ios-people"
                    color={"#FF8D1A"}
                    size={20}
                    style={{ marginHorizontal: 10 }}
                  />
                )}
                style={{ marginVertical: 7 }}
              />
              <DrawerItem
                label="Асуулт, хариулт "
                onPress={() => props.navigation.navigate("Question")}
                icon={() => (
                  <FontAwesome
                    name="question-circle"
                    color={"#FF8D1A"}
                    size={20}
                    style={{ marginHorizontal: 10 }}
                  />
                )}
                style={{ marginVertical: 7 }}
              />
              <DrawerItem
                label="Холбоо барих"
                onPress={() => props.navigation.navigate("Contact")}
                icon={() => (
                  <Icon
                    name="phone"
                    color={"#FF8D1A"}
                    size={20}
                    style={{ marginHorizontal: 10 }}
                  />
                )}
                style={{ marginVertical: 7 }}
              />
            </View>
          )}
        </Drawer.Section>
      </DrawerContentScrollView>
      <View
        style={{
          flex: 0.2,
          justifyContent: "center",
          alignItems: "center",
          marginTop: 22,
        }}
      >
        <View style={{ backgroundColor: "red", flex: 1 }}>
          <Modal
            animationType="none"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
              Alert.alert("Modal has been closed.");
              setModalVisible(!modalVisible);
            }}
          >
            <View
              style={{ backgroundColor: "white", flex: 1, marginRight: 140 }}
            >
              <View>
                <Text style={{ fontSize: 20, margin: 25, marginTop: 70 }}>
                  {" "}
                  <Icon
                    name="tag"
                    color={"#FF8D1A"}
                    size={20}
                    style={{ marginHorizontal: 10 }}
                  />
                  Ангилал
                </Text>
                <Text style={{ fontSize: 20, margin: 25 }}>
                  {" "}
                  <Icon
                    name="tag"
                    color={"#FF8D1A"}
                    size={20}
                    style={{ marginHorizontal: 10 }}
                  />
                  Ангилал
                </Text>
                <Text style={{ fontSize: 20, margin: 25 }}>
                  {" "}
                  <Icon
                    name="tag"
                    color={"#FF8D1A"}
                    size={20}
                    style={{ marginHorizontal: 10 }}
                  />
                  Ангилал
                </Text>
                <Text style={{ fontSize: 20, margin: 25 }}>
                  {" "}
                  <Icon
                    name="tag"
                    color={"#FF8D1A"}
                    size={20}
                    style={{ marginHorizontal: 10 }}
                  />
                  Ангилал
                </Text>
                <Text style={{ fontSize: 20, margin: 25 }}>
                  {" "}
                  <Icon
                    name="tag"
                    color={"#FF8D1A"}
                    size={20}
                    style={{ marginHorizontal: 10 }}
                  />
                  Ангилал
                </Text>
                <Text style={{ fontSize: 20, margin: 25 }}>
                  {" "}
                  <Icon
                    name="tag"
                    color={"#FF8D1A"}
                    size={20}
                    style={{ marginHorizontal: 10 }}
                  />
                  Ангилал
                </Text>
                <Text style={{ fontSize: 20, margin: 25 }}>
                  {" "}
                  <Icon
                    name="tag"
                    color={"#FF8D1A"}
                    size={20}
                    style={{ marginHorizontal: 10 }}
                  />
                  Ангилал
                </Text>
                <Text style={{ fontSize: 20, margin: 25 }}>
                  {" "}
                  <Icon
                    name="tag"
                    color={"#FF8D1A"}
                    size={20}
                    style={{ marginHorizontal: 10 }}
                  />
                  Ангилал
                </Text>
                <Text style={{ fontSize: 20, margin: 25 }}>
                  {" "}
                  <Icon
                    name="tag"
                    color={"#FF8D1A"}
                    size={20}
                    style={{ marginHorizontal: 10 }}
                  />
                  Ангилал
                </Text>
                <Text style={{ fontSize: 20, margin: 25 }}>
                  {" "}
                  <Icon
                    name="tag"
                    color={"#FF8D1A"}
                    size={20}
                    style={{ marginHorizontal: 10 }}
                  />
                  Ангилал
                </Text>
                <Text style={{ fontSize: 20, margin: 25 }}>
                  {" "}
                  <Icon
                    name="tag"
                    color={"#FF8D1A"}
                    size={20}
                    style={{ marginHorizontal: 10 }}
                  />
                  Ангилал
                </Text>
              </View>
              <View style={{ position: "absolute" }}>
                <TouchableOpacity
                  onPress={() => setModalVisible(!modalVisible)}
                >
                  {/* <Icon
                    name="alpha-x"
                    size={50}
                    style={{
                      margin: 50,
                      alignSelf: "center",
                      left: 220,
                    }}
                    color={"black"}
                  /> */}
                  <Text
                    style={{
                      margin: 50,
                      alignSelf: "center",
                      left: 250,
                      fontFamily: "NunitoBold",
                      fontSize: 40,
                      color: "white",
                    }}
                  >
                    {" "}
                    X{" "}
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </Modal>
        </View>
      </View>
    </View>
  );
};

export default DrawerContent;
const styles = StyleSheet.create({
  useg: {
    fontSize: 16,
    marginHorizontal: 0.2,
  },
  useg2: {
    fontSize: 17,
    marginHorizontal: 0.2,

    color: "#FF8D1A",
  },
});
