import {
  Image,
  ImageProps,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
  View,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { AuthNavigatorRoutesProps, ProductsProps } from "../routes/Auth.Routes";
import React from "react";

type Props = TouchableOpacityProps & {
  data?: ProductsProps;
};

export default function CardPhoto({ data, ...rest }: Props) {
  const navigation = useNavigation<AuthNavigatorRoutesProps>();

  return (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      showsVerticalScrollIndicator={false}
    >
      <TouchableOpacity style={styles.buttonBtn} {...rest}>
        {data && data.thumbnail && (
          <Image source={data.thumbnail} style={styles.imgBlazer} />
        )}
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  buttonBtn: {
    borderRadius: 15,
  },
  imgBlazer: {
    borderRadius: 10,
    marginBottom: 6,
  },

  textTitle: {
    marginLeft: 10, // Adicione esta linha para dar espaço entre a imagem e o texto
  },
});
