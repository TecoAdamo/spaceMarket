import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

type Props = {
  price: number;
};

export default function PriceProducts({ price }: Props) {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Text style={styles.textPrice}>R$ {price}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#d9f99d",
    padding: 10,
    borderRadius: 20,
    marginTop: 8,
    marginBottom: 4,
    width: "80%",
  },
  textPrice: {
    textAlign: "center",
    color: "#00B517",
    fontWeight: "700",
    fontSize: 16,
  },
});
