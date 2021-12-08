import { StatusBar as SBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  SafeAreaView,
  TouchableNativeFeedback,
  Image,
  Button,
  Alert,
  Dimensions,
  Platform,
  TextInput,
  Switch,
} from "react-native";
import {
  useDimensions,
  useDeviceOrientation,
} from "@react-native-community/hooks";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import WelcomeScreen from "./app/appScreens/WelcomeScreen";
import ViewImageScreen from "./app/appScreens/ViewImageScreen";
import MessagesScreen from "./app/appScreens/MessagesScreen";
import ListingDetailsScreen from "./app/appScreens/ListingDetailsScreen";
import AppText from "./app/components/AppText";
import AppButton from "./app/components/AppButton";
import Card from "./app/components/Card";
import Icon from "./app/components/Icon";
import Screen from "./app/components/Screen";
import ListItem from "./app/components/ListItem";
import AccountScreen from "./app/appScreens/AccountScreen";
import ListingsScreen from "./app/appScreens/ListingsScreen";
import AppTextInput from "./app/components/AppTextInput";
import AppPicker from "./app/components/AppPicker";
import LoginScreen from "./app/appScreens/LoginScreen";
import ListingEditScreen from "./app/appScreens/ListingEditScreen";

export default function App() {
  return <ListingEditScreen />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
