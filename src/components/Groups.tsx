import {
  TouchableOpacity,
  TouchableOpacityProps,
  Text,
  StyleSheet,
} from "react-native";

type Props = TouchableOpacityProps & {
  name: string;
  isActive: boolean;
};

export function Group({ name, isActive, ...rest }: Props) {
  return (
    <TouchableOpacity style={styles.btn}>
      <Text
        style={{ color: isActive ? "#0D6EFD" : "gray", padding: 4 }}
        {...rest}
      >
        {name}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  btn: {
    marginRight: 8,
    marginTop: 18,
    marginBottom: 36,
    padding: 6,
    marginLeft: 8,
    height: 38,
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
  },
});
