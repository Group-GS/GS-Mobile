import { TouchableOpacity, View, Text, StyleSheet } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { theme } from "../styles/theme";

export default function Card({ title, value, icon, onPress }) {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={onPress}
      style={styles.card}
    >
      <View style={styles.header}>
        <View style={styles.iconBox}>
          <MaterialIcons name={icon} size={26} color={theme.colors.primary} />
        </View>

        <Text style={styles.title}>{title}</Text>
      </View>

      <Text style={styles.value}>{value}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: theme.colors.card,
    padding: 18,
    borderRadius: 14,
    marginBottom: 12,
    elevation: 3
  },

  header: {
    flexDirection: "row",
    alignItems: "center"
  },

  iconBox: {
    width: 38,
    height: 38,
    borderRadius: 10,
    backgroundColor: "#E8F5E9",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 10
  },

  title: {
    fontFamily: theme.fonts.regular,
    fontSize: 14,
    color: theme.colors.text
  },

  value: {
    fontFamily: theme.fonts.bold,
    fontSize: 24,
    color: theme.colors.primary,
    marginTop: 10
  }
});