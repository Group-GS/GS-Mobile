import ScreenContainer from "../components/ScreenContainer";
import Title from "../components/Title";
import Card from "../components/Card";
import Button from "../components/Button";
import UserHeader from "../components/UserHeader";
import { View, StyleSheet } from "react-native";

export default function DashboardScreen({ navigation }) {
  return (
    <ScreenContainer>
      <Title>🌍 Dashboard Ambiental</Title>

      <UserHeader />

      <View style={styles.cards}>
        <Card title="Temperatura" value="25°C" icon="thermostat" />
        <Card title="Umidade" value="60%" icon="water-drop" />
        <Card title="Status" value="Normal" icon="check-circle" />
      </View>

      <Button
        title="Ver sensores ambientais 📡"
        onPress={() => navigation.navigate("Sensores")}
      />
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({
  cards: {
    marginTop: 10,
    marginBottom: 20
  }
});