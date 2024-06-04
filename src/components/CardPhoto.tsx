import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
  View,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { AuthNavigatorRoutesProps, ProductsProps } from "../routes/Auth.Routes";
import React from "react";
import PriceOffers from "./PriceOffers";

type Props = TouchableOpacityProps & {
  data?: ProductsProps;
  title?: ProductsProps;
  offer?: string;
};

export default function CardPhoto({ data, title, offer, ...rest }: Props) {
  const navigation = useNavigation<AuthNavigatorRoutesProps>();

  return (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      showsVerticalScrollIndicator={false}
    >
      <TouchableOpacity style={styles.buttonBtn} {...rest}>
        {data && data.thumbnail && (
          <View style={styles.boxProducts}>
            <Image source={data.thumbnail} style={styles.img} />
            <Text style={styles.boxProductsText}>{data.title}</Text>
          </View>
        )}
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  buttonBtn: {
    borderRadius: 15,
  },
  boxProducts: {
    alignItems: "center",
  },
  boxProductsText: {
    marginTop: 8,
  },
  img: {
    width: 120,
    height: 120,
    marginRight: 20,
    marginLeft: 12,
    marginTop: 28,
    borderRadius: 10,
    resizeMode: "cover",
  },

  textTitle: {
    marginLeft: 10,
  },
});
