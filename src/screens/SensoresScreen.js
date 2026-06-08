import { useCallback, useState } from "react";
import { FlatList, StyleSheet, View, Alert } from "react-native";
import { useFocusEffect } from "@react-navigation/native";

import ScreenContainer from "../components/ScreenContainer";
import Title from "../components/Title";
import Card from "../components/Card";
import Button from "../components/Button";
import { api } from "../services/api";

export default function SensoresScreen({ navigation }) {
  const [sensores, setSensores] = useState([]);

  const carregarSensores = async () => {
    try {
      const response = await api.get("/sensor/todos");
      setSensores(response.data);
    } catch (error) {
      Alert.alert("Erro", "Não foi possível carregar os sensores.");
    }
  };

  useFocusEffect(
    useCallback(() => {
      carregarSensores();
    }, [])
  );

  return (
    <ScreenContainer>
      <Title>Sensores 📡</Title>

      <FlatList
        data={sensores}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.list}
        renderItem={({ item }) => (
          <Card
            title={item.tipoSensor}
            value={item.status}
            icon="thermostat"
            onPress={() =>
              navigation.navigate("EditSensor", {
                sensor: item,
              })
            }
          />
        )}
      />

      <View style={styles.buttonContainer}>
        <Button
          title="Adicionar Sensor 📡"
          onPress={() => navigation.navigate("CreateSensor")}
        />
      </View>
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({
  list: {
    paddingBottom: 20,
  },
  buttonContainer: {
    marginTop: 10,
  },
});