// HomeProducts.js
import {
  ScrollView,
  SectionList,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
  View,
} from "react-native";
import CardPhoto from "./CardPhoto";
import { ProductsProps } from "../utils/HomeProductsDB";
import PriceProducts from "./PriceProducts";

type Props = TouchableOpacityProps & {
  title: string;
  subTitle?: string;
  offer?: string;
  products: ProductsProps[];
  price: number;
};

export default function HomeProducts({
  title,
  subTitle,
  products,
  offer,
  price,
}: Props) {
  return (
    <View style={styles.container}>
      <View style={styles.textBox}>
        <Text style={styles.textTitle}>{title}</Text>
        {subTitle && <Text style={styles.subTitle}>{subTitle}</Text>}
      </View>

      <SectionList
        horizontal
        sections={[{ data: products }]}
        keyExtractor={(item) => item.id}
        stickySectionHeadersEnabled={false}
        renderItem={({ item }) => (
          <View style={styles.productContainer}>
            <CardPhoto data={item} />
            <PriceProducts price={item.price} />
          </View>
        )}
        contentContainerStyle={{ paddingBottom: 20 }}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 312,
    backgroundColor: "#FFFFFF",
    marginTop: 6,
  },
  containerText: {
    fontSize: 20,
    color: "white",
    fontWeight: "700",
    marginLeft: 12,
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
  cardPhoto: {
    backgroundColor: "#979797",
  },
  productContainer: {
    alignItems: "center",
  },
});
