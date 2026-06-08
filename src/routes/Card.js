import { View, Text, StyleSheet } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { theme } from "../styles/theme";

export default function Card({ title, value, icon }) {
  return (
    <View style={styles.card}>
      <View style={styles.row}>
        <MaterialIcons name={icon} size={28} color={theme.colors.primary} />
        <Text style={styles.title}>{title}</Text>
      </View>

      <Text style={styles.value}>{value}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: theme.colors.card,
    padding: 20,
    borderRadius: 12,
    marginBottom: 15,
    elevation: 4
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10
  },
  title: {
    fontFamily: theme.fonts.regular,
    fontSize: 14,
    color: theme.colors.text
  },
  value: {
    fontFamily: theme.fonts.bold,
    fontSize: 22,
    color: theme.colors.primary,
    marginTop: 10
  }
});