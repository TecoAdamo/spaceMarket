import { useState } from "react";

import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  View,
  Image,
  FlatList,
  Text,
  ScrollView,
} from "react-native";
import SearchProducts from "../components/SearchProducts";

import BANNER from "../assets/banner.png";
import { Group } from "../components/Groups";
import DealsOffers from "../components/DealsOffers";

export default function Home() {
  const [groups, setGroups] = useState([
    "Todas categorias",
    "Celulares",
    "Roupas",
    "Notebooks",
    "Tenis",
  ]);

  const [groupSelected, setGroupSelected] = useState("costas");
  return (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      showsVerticalScrollIndicator={false}
    >
      <View style={styles.container}>
        <StatusBar style="auto" />
        <SearchProducts />
        <FlatList
          data={groups}
          keyExtractor={(item) => item}
          renderItem={({ item }) => (
            <Group
              name={item}
              isActive={
                groupSelected.toLocaleUpperCase() === item.toLocaleUpperCase()
              }
              onPress={() => setGroupSelected(item)}
            />
          )}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
        <Image source={BANNER} style={styles.bannerImg} />
        <DealsOffers />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#EFF2F4",
    alignItems: "center",
    justifyContent: "center",
  },
  bannerImg: {
    height: 200,
    width: "100%",
    marginBottom: 8,
    marginTop: 18,
  },
});
