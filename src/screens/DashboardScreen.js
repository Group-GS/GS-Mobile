import ScreenContainer from "../components/ScreenContainer";
import Title from "../components/Title";
import Card from "../components/Card";
import { View, Text, StyleSheet } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

export default function DashboardScreen() {
  return (
    <ScreenContainer>
      <MaterialIcons name="thermostat" size={24} color="green" />
      <Title>Dashboard 🌍</Title>

      <Card title="Temperatura" value="25°C" />
      <Card title="Umidade" value="60%" />
      <Card title="Status" value="Normal" />
    </ScreenContainer>
  );
}