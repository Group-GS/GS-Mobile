import { View, StyleSheet } from "react-native";
import ScreenContainer from "../components/ScreenContainer";
import Title from "../components/Title";
import Card from "../components/Card";
import { theme } from "../styles/theme";

export default function DashboardScreen() {
  return (
    <ScreenContainer>
      <Title>🌍 Dashboard Ambiental</Title>

      <View style={styles.cards}>
        <Card title="Temperatura" value="25°C" icon="thermostat" />
        <Card title="Umidade" value="60%" icon="water-drop" />
        <Card title="Status" value="Normal" icon="check-circle" />
      </View>
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({
  cards: {
    marginTop: 10
  }
});