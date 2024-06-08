import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
  View,
} from "react-native";
import CardPhoto from "./CardPhoto";
import { ProductsProps } from "../utils/DealsOffersDB";
import PriceOffers from "./PriceOffers";
import { useNavigation } from "@react-navigation/native";
import { AuthNavigatorRoutesProps } from "../routes/Auth.Routes";

type Props = {
  title: string;
  subTitle?: string;
  offer?: string;
  products: ProductsProps[];
};

export default function DealsOffers({
  title,
  subTitle,
  products,
  ...rest
}: Props) {
  const navigation = useNavigation<AuthNavigatorRoutesProps>();

  const handleProductScreen = (product: ProductsProps) => {
    console.log("Navigating to product:", product);
    navigation.navigate("products", { data: product });
  };

  return (
    <View style={styles.container}>
      <View style={styles.textBox}>
        <Text style={styles.textTitle}>{title}</Text>
        {subTitle && <Text style={styles.subTitle}>{subTitle}</Text>}
      </View>

      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {products.map((item) => (
          <View key={item.id} style={styles.boxProductOffers}>
            <TouchableOpacity
              onPress={() => handleProductScreen(item)}
              {...rest}
            >
              <CardPhoto key={item.id} data={item} />
            </TouchableOpacity>
            <PriceOffers offer={item.offer} />
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: "#FFFFFF",
    marginTop: 6,
  },
  textBox: {
    marginLeft: "8%",
    marginTop: 8,
  },
  textTitle: {
    fontSize: 20,
    fontWeight: "700",
    marginTop: 10,
  },
  subTitle: {
    color: "gray",
  },
  boxProductOffers: {
    flexDirection: "column",
  },
});
