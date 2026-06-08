import ScreenContainer from "../components/ScreenContainer";
import Title from "../components/Title";
import Input from "../components/Input";
import Button from "../components/Button";
import { View, StyleSheet, Alert } from "react-native";
import { useState } from "react";

export default function CreateSensorScreen({ navigation }) {
  const [nome, setNome] = useState("");
  const [valor, setValor] = useState("");

  const handleCreate = () => {
    if (!nome || !valor) {
      Alert.alert("Erro", "Preencha todos os campos");
      return;
    }

    const novoSensor = {
      id: Date.now(),
      nome,
      valor
    };

    global.sensores.push(novoSensor);

    Alert.alert(
      "Sensor criado",
      "O sensor foi adicionado com sucesso!"
    );

    navigation.goBack();
  };

  return (
    <ScreenContainer>
      <Title>➕ Novo Sensor</Title>

      <View style={styles.form}>
        <Input
          placeholder="Nome do sensor (ex: Temperatura estufa)"
          onChangeText={setNome}
        />

        <Input
          placeholder="Valor atual (ex: 25°C ou 60%)"
          onChangeText={setValor}
        />
      </View>

      <Button title="Salvar" onPress={handleCreate} />
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({
  form: {
    marginBottom: 20
  }
});