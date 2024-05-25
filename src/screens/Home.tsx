import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import SearchProducts from "../components/SearchProducts";

export default function Home() {
  return (
    <View style={styles.container}>
      <SearchProducts />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f1f5f9",
    alignItems: "center",
    justifyContent: "center",
  },
});
