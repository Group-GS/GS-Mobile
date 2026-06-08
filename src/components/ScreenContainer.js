import { View, StyleSheet } from "react-native";
import { theme } from "../styles/theme";

export default function ScreenContainer({ children }) {
  return <View style={styles.container}>{children}</View>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
    padding: 20
  }
});