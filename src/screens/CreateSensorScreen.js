import { useState } from "react";
import { View, StyleSheet, Alert } from "react-native";
import { Picker } from "@react-native-picker/picker";

import ScreenContainer from "../components/ScreenContainer";
import Title from "../components/Title";
import Input from "../components/Input";
import Button from "../components/Button";
import { api } from "../services/api";

export default function CreateSensorScreen({ navigation }) {
  const [id, setId] = useState("");
  const [tipoSensor, setTipoSensor] = useState("");
  const [status, setStatus] = useState("ATIVO");
  const [localId, setLocalId] = useState(1);

  const handleCreate = async () => {
    if (!id || !tipoSensor) {
      Alert.alert("Erro", "Preencha todos os campos");
      return;
    }

    try {
      await api.post("/sensor/novo", {
        id: Number(id),
        tipoSensor,
        status,
        local: {
          id: localId,
        },
      });

      Alert.alert(
        "Sucesso",
        "Sensor criado com sucesso!"
      );

      navigation.goBack();
    } catch (error) {
      console.log(error.response?.data);

      Alert.alert(
        "Erro",
        "Não foi possível criar o sensor."
      );
    }
  };

  return (
    <ScreenContainer>
      <Title>➕ Novo Sensor</Title>

      <View style={styles.form}>
        <Input
          placeholder="ID do Sensor"
          keyboardType="numeric"
          value={id}
          onChangeText={setId}
        />

        <Input
          placeholder="Tipo do Sensor"
          value={tipoSensor}
          onChangeText={setTipoSensor}
        />

        <Picker
          selectedValue={status}
          onValueChange={(itemValue) => setStatus(itemValue)}
        >
          <Picker.Item label="ATIVO" value="ATIVO" />
          <Picker.Item label="INATIVO" value="INATIVO" />
          <Picker.Item label="MANUTENÇÃO" value="MANUTENCAO" />
        </Picker>

        <Picker
          selectedValue={localId}
          onValueChange={(itemValue) => setLocalId(itemValue)}
        >
          <Picker.Item label="Fazenda Verde - Manaus" value={1} />
          <Picker.Item label="Fazenda Sol Nascente - Goiânia" value={2} />
          <Picker.Item label="Sítio Sertão Forte - Juazeiro" value={3} />
          <Picker.Item label="Fazenda Atlântica - Campinas" value={4} />
          <Picker.Item label="Estância Sul - Pelotas" value={5} />
          <Picker.Item label="Fazenda Pantaneira - Corumbá" value={6} />
        </Picker>
      </View>

      <Button
        title="Salvar Sensor"
        onPress={handleCreate}
      />
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({
  form: {
    marginBottom: 20,
  },
});