import { View, Text, StyleSheet } from "react-native";
import { theme } from "../styles/theme";

export default function UserHeader() {
  const user = global.loggedUser;

  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        👤 {user ? user : "Usuário não logado"}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 15,
    padding: 10,
    backgroundColor: "#E8F5E9",
    borderRadius: 8
  },
  text: {
    fontFamily: theme.fonts.regular,
    color: theme.colors.text
  }
});