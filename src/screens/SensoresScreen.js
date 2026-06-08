import ScreenContainer from "../components/ScreenContainer";
import Title from "../components/Title";
import { FlatList, StyleSheet  } from "react-native";
import Card from "../components/Card";

export default function SensoresScreen() {
  const sensores = [
    { id: 1, nome: "Sensor 1", valor: "25°C" },
    { id: 2, nome: "Sensor 2", valor: "60%" }
  ];

  return (
    <ScreenContainer>
      <Title>Sensores 📡</Title>

      <FlatList
        data={sensores}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <Card title={item.nome} value={item.valor} />
        )}
      />
    </ScreenContainer>
  );
}