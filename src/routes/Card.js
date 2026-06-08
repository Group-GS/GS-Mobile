import { View, Text, StyleSheet } from "react-native";
import { theme } from "../styles/theme";

export default function Card({ title, value }) {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.value}>{value}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: theme.colors.card,
    padding: 20,
    borderRadius: 12,
    marginBottom: 10,
    elevation: 3
  },
  title: {
    color: theme.colors.text,
    fontSize: 14
  },
  value: {
    fontSize: 22,
    fontWeight: "bold",
    color: theme.colors.primary
  }
});