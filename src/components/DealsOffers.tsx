import {
  ScrollView,
  SectionList,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
  View,
} from "react-native";
import { MENU } from "../utils";
import CardPhoto from "./CardPhoto";
import { ProductsProps } from "../routes/Auth.Routes";

type Props = TouchableOpacityProps & {
  data?: ProductsProps;
};

export default function DealsOffers({ data }: Props) {
  return (
    <View style={styles.container}>
      <View style={styles.textBox}>
        <Text style={styles.textTitle}>Promoções e ofertas</Text>
        <Text style={styles.subTitle}>Equipamentos Eletrônicos</Text>
      </View>

      <SectionList
        horizontal
        sections={MENU}
        keyExtractor={(item) => item.id}
        stickySectionHeadersEnabled={false}
        renderItem={({ item }) => <CardPhoto data={item} />}
        renderSectionHeader={({ section: { title } }) => (
          <Text style={styles.textTitle}>{data?.title}</Text>
        )}
        contentContainerStyle={{ paddingBottom: 20 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFFFFF",
    width: "100%",
    height: "50%",
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
    height: "30%",
  },
  subTitle: {
    color: "gray",
  },
  cardPhoto: {
    backgroundColor: "#979797",
  },

  priceText: {
    color: "white",
    fontSize: 16,
    textAlign: "center",
    marginTop: 20,
  },
});
