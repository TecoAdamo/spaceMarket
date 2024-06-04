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
import { ProductsProps } from "../routes/Auth.Routes";

type Props = TouchableOpacityProps & {
  title: string;
  subTitle?: string;
  sections: { title: string; data: ProductsProps[] }[];
};

export default function Eletronics({ title, subTitle, sections }: Props) {
  return (
    <View style={styles.container}>
      <View style={styles.textBox}>
        <Text style={styles.textTitle}>{title}</Text>
        {subTitle && <Text style={styles.subTitle}>{subTitle}</Text>}
      </View>

      <SectionList
        horizontal
        sections={sections}
        keyExtractor={(item) => item.id}
        stickySectionHeadersEnabled={false}
        renderItem={({ item }) => <CardPhoto data={item} offer={item.offer} />}
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
});
