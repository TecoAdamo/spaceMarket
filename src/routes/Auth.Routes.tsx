import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from "@react-navigation/native-stack";

import React from "react";
import { TouchableOpacity } from "react-native";
import { DrawerActions, useNavigation } from "@react-navigation/native";

import Ionicons from "@expo/vector-icons/Ionicons";

import Home from "../screens/Home";
import Cart from "../screens/Cart";
import Products from "../screens/Products";
import Profile from "../screens/Profile";

type AuthRoutes = {
  home: undefined;
  products: undefined;
  cart: undefined;
  profile: undefined;
};

export type AuthNavigatorRoutesProps = NativeStackNavigationProp<AuthRoutes>;

const { Navigator, Screen } = createNativeStackNavigator<AuthRoutes>();

export function AuthRoutes() {
  const navigation = useNavigation();
  return (
    <Navigator initialRouteName="home">
      <Screen name="home" component={Home} />
      <Screen name="products" component={Products} />
      <Screen name="cart" component={Cart} />
      <Screen name="profile" component={Profile} />
    </Navigator>
  );
}
