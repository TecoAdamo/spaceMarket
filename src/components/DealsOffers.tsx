import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function DealsOffers() {
  return (
    <View style={styles.container}>
      <View style={styles.textBox}>
        <Text style={styles.textTitle}>Promoções e ofertas</Text>
        <Text style={styles.subTitle}>Equipamentos Eletrônicos</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 4,
    width: "100%",
    backgroundColor: "#FFFFFF",
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
    marginTop: 14,
    backgroundColor: "#979797",
  },
});
