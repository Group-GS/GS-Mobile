import ScreenContainer from "../components/ScreenContainer";
import Title from "../components/Title";
import { FlatList, StyleSheet, View } from "react-native";
import Card from "../components/Card";
import Button from "../components/Button";

export default function SensoresScreen({ navigation }) {
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
        contentContainerStyle={styles.list}
        renderItem={({ item }) => (
          <Card 
            title={item.nome}
            value={item.valor}
            icon="sensors"
            onPress={() => navigation.navigate("EditSensor", { sensor: item })}
          />
        )}
      />

      <View style={styles.buttonContainer}>
        <Button 
          title="Adicionar Sensor" 
          onPress={() => navigation.navigate("CreateSensor")} 
        />
      </View>
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({
  list: {
    paddingBottom: 20
  },
  buttonContainer: {
    marginTop: 10
  }
});