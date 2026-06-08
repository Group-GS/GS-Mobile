import { TouchableOpacity, Text, StyleSheet } from "react-native";
import { theme } from "../styles/theme";

export default function Button({ title, onPress }) {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: theme.colors.primary,
    padding: 15,
    borderRadius: 8
  },
  text: {
    color: "#fff",
    textAlign: "center",
    fontWeight: "bold"
  }
});