import { View, Text, StyleSheet } from "react-native";
import { theme } from "../styles/theme";

export default function Title({ children }) {
  return <Text style={styles.title}>{children}</Text>;
}

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontFamily: theme.fonts.bold,
    color: theme.colors.primary
    }
});