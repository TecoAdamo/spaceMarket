import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from "@react-navigation/native-stack";

import React from "react";

import { useNavigation } from "@react-navigation/native";

import Home from "../screens/Home";
import Cart from "../screens/Cart";
import Products from "../screens/Products";
import Profile from "../screens/Profile";
import { ImageProps } from "react-native";

export type ProductsProps = {
  title: string;
  price: number;
  thumbnail: ImageProps;
};

type AuthRoutes = {
  home: undefined;
  products: { data: ProductsProps };
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
