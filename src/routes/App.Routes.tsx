import React from "react";

import { createDrawerNavigator } from "@react-navigation/drawer";
import { FontAwesome } from "@expo/vector-icons";

import Home from "../screens/Home";
import { TouchableOpacity } from "react-native";

const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: "#EFF2F4",
        },
        headerTintColor: "#364D9D",
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}
    >
      <Drawer.Screen
        name="SpaceMarket"
        component={Home}
        options={{
          headerRight: () => (
            <TouchableOpacity>
              <FontAwesome
                name="opencart"
                size={24}
                color="#364D9D"
                style={{ marginRight: 8 }}
              />
            </TouchableOpacity>
          ),
        }}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigation;
