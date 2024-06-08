import { StyleSheet, Text, View } from "react-native";

type Props = {
  offer: string;
};

export default function PriceOffers({ offer }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.textPrice}>{offer}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFE3E3",
    padding: 10,
    borderRadius: 20,
    marginTop: 8,
    width: "80%",
    marginBottom: 18,
    marginLeft: 10,
  },
  textPrice: {
    textAlign: "center",
    color: "#EB001B",
    fontWeight: "700",
    fontSize: 16,
  },
});
