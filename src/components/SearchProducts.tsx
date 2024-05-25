import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { Ionicons } from "@expo/vector-icons";
export default function SearchProducts() {
  return (
    <View style={styles.container}>
      <TextInput placeholder="Search" style={styles.boxInput} />
      <View style={styles.boxBtn}>
        <TouchableOpacity>
          <Ionicons name="search-outline" size={24} color="gray" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "90%",
    alignItems: "center",
    borderWidth: 1,
    height: 40,
    borderRadius: 10,
    borderColor: "gray",
    backgroundColor: "#DEE2E7",
    marginTop: 12,
  },
  boxInput: {
    padding: 4,
    width: "100%",
    marginLeft: 60,
  },
  boxBtn: {
    marginRight: "90%",
    bottom: 30,
  },
});
