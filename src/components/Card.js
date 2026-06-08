import { TouchableOpacity, View, Text, StyleSheet } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { theme } from "../styles/theme";

export default function Card({ title, value, icon, onPress }) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.card}>
      <View style={styles.row}>
        <MaterialIcons name={icon} size={28} color={theme.colors.primary} />
        <Text style={styles.title}>{title}</Text>
      </View>

      <Text style={styles.value}>{value}</Text>
    </TouchableOpacity>
  );
}