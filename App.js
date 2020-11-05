import React from "react";
import { View, Text } from "react-native";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import {MaterialCommunityIcons} from '@expo/vector-icons';

import AppButtn from './app/component/AppButton';
import Card from "./app/component/Card";
import ListingDetails from "./app/screens/ListingDetails";

export default function App() {
  return (
    <ListingDetails/>
  );
}
