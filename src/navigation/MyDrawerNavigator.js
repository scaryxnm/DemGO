import React, { useContext } from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import MyStackNavigator from "./MyStackNavigator";
import DrawerContent from "../components/DrawerContent";
import MyProject from "../Charity/NavbarMenu/MyProject";
import Lists from "../Charity/NavbarMenu/Lists";
import Search from "../Charity/NavbarMenu/Search";
import Contact from "../Charity/NavbarMenu/Contact";
import Question from "../Charity/NavbarMenu/Question";
import Service from "../Charity/NavbarMenu/Service";
import LoginDetailScreen from "../Charity/screens/LoginDetailScreen";
import InLoginScreen from "../Charity/screens/InLoginScreen";
import RegisterScreen from "../Charity/screens/RegisterScreen";
import UserContex from "../UserContex/UserContex";

const Drawer = createDrawerNavigator();

export default (props) => {
  const state = useContext(UserContex);
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      drawerContent={(props) => <DrawerContent {...props} />}
    >
      <Drawer.Screen name="Home" component={MyStackNavigator} />
      {state.isLoggedIn ? (
        <>
          <Drawer.Screen name="MyProject" component={MyProject} />
          <Drawer.Screen name="Lists" component={Lists} />
          <Drawer.Screen name="Search" component={Search} />
          <Drawer.Screen name="Service" component={Service} />
          <Drawer.Screen name="Question" component={Question} />
          <Drawer.Screen name="Contact" component={Contact} />
        </>
      ) : (
        <>
          <Drawer.Screen name="MyProject" component={MyProject} />
          <Drawer.Screen name="Lists" component={Lists} />
          <Drawer.Screen name="Search" component={Search} />
          <Drawer.Screen name="Service" component={Service} />
          <Drawer.Screen name="Question" component={Question} />
          <Drawer.Screen name="Contact" component={Contact} />
          <Drawer.Screen
            name="LoginDetailScreen"
            component={LoginDetailScreen}
          />
          <Drawer.Screen name="InLoginScreen" component={InLoginScreen} />
          <Drawer.Screen name="RegisterScreen" component={RegisterScreen} />
        </>
      )}
    </Drawer.Navigator>
  );
};
