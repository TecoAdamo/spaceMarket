import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import CardPhoto from "./CardPhoto";
import { ProductsProps } from "../utils/DealsOffersDB";
import PriceOffers from "./PriceOffers";

type Props = {
  title: string;
  subTitle?: string;
  offer?: string;
  products: ProductsProps[];
};

export default function DealsOffers({ title, subTitle, products }: Props) {
  return (
    <View style={styles.container}>
      <View style={styles.textBox}>
        <Text style={styles.textTitle}>{title}</Text>
        {subTitle && <Text style={styles.subTitle}>{subTitle}</Text>}
      </View>

      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {products.map((item) => (
          <CardPhoto key={item.id} data={item} offer={item.offer} />
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
});
