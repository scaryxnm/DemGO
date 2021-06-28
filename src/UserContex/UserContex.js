import React, { useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";

const UserContext = React.createContext();

export const UserStore = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [token, setToken] = useState(null);
  const [email, setEmail] = useState(null);
  const [userName, setUserName] = useState(null);
  const [userRole, setUserRole] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const logout = async () => {
    await AsyncStorage.removeItem("user");
    await axios.get(`http://178.128.48.206/api/v1/auth/logout`);
    setIsLoggedIn(false);
    setToken(null);
    setEmail(null);
    setUserName(null);
    setUserRole(null);
  };

  const login = (email, password) => {
    axios
      .post(`http://178.128.48.206/api/v1/auth/login`, {
        email: email,
        password: password,
      })
      .then((result) => {
        console.log(result.data);

        loginUserSuccessful(
          result.data.token,
          email,
          result.data.user.name,
          result.data.user.role
        );
      })
      .catch((err) => {
        loginFailed(err.message);
      });
  };

  const signUp = (name, email, password) => {
    axios
      .post(`http://178.128.48.206/api/v1/auth/register`, {
        name: name,
        email: email,
        password: password,
        role: "user",
      })
      .then((result) => {
        console.log(result.data);
        loginUserSuccessful(result.data.token, email, name, "admin");
      })
      .catch((err) => {
        loginFailed(err.message);
      });
  };

  const loginFailed = (error) => {
    console.log(error);
    setIsLoggedIn(false);
    setEmail(null);
    setUserName(null);
    setUserRole(null);
  };

  const loginUserSuccessful = async (token, email, userName, userRole) => {
    setToken(token);
    setEmail(email);
    setUserName(userName);
    setUserRole(userRole);
    setIsLoggedIn(true);
    try {
      await AsyncStorage.setItem(
        "user",
        JSON.stringify({ token, userName, email, userRole })
      );
    } catch (err) {
      console.log("Утас руу хадгалж чадсангүй...");
    }
  };

  return (
    <UserContext.Provider
      value={{
        isLoggedIn,
        setIsLoggedIn,
        token,
        setToken,
        login,
        userRole,
        userName,
        email,
        signUp,
        logout,
        isLoading,
        setIsLoading,
        setEmail,
        setUserName,
        setUserRole,
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
};

export default UserContext;
