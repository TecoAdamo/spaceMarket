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
import HomeProducts from "../components/HomeProducts";
import { MENU as HomeProductsMenu } from "../utils/HomeProductsDB";
import { MENU as DealsOffersMenu } from "../utils/DealsOffersDB";
import { MENU as OtherProductsMenu } from "../utils/EletronicsDB";
import Eletronics from "../components/Eletronics";

export default function Home() {
  const [groups, setGroups] = useState([
    "Todas categorias",
    "Celulares",
    "Roupas",
    "Notebooks",
    "Tenis",
  ]);

  const [groupSelected, setGroupSelected] = useState("costas");

  const dealsOffersProducts = DealsOffersMenu.flatMap(
    (section) => section.data
  ).slice(0, 3);
  const homeProductsItems = HomeProductsMenu.flatMap(
    (section) => section.data
  ).slice(0, 3);
  const otherProductsItems = OtherProductsMenu.flatMap(
    (section) => section.data
  ).slice(0, 3);

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
        <DealsOffers
          title="Promoções e ofertas"
          subTitle="Equipamentos Eletrônicos"
          products={dealsOffersProducts}
        />
        <HomeProducts title="Casa e exterior" products={homeProductsItems} />
        <Eletronics title="Eletrônicos" sections={OtherProductsMenu} />
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
  },
});
