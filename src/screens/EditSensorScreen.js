import { useState } from "react";
import {
  View,
  StyleSheet,
  Alert,
  TouchableOpacity,
} from "react-native";

import { MaterialIcons } from "@expo/vector-icons";

import ScreenContainer from "../components/ScreenContainer";
import Title from "../components/Title";
import Input from "../components/Input";
import Button from "../components/Button";
import { api } from "../services/api";

export default function EditSensorScreen({
  route,
  navigation,
}) {
  const { sensor } = route.params;

  const [tipoSensor, setTipoSensor] = useState(
    sensor.tipoSensor
  );

  const [status, setStatus] = useState(
    sensor.status
  );

  const handleUpdate = async () => {
    try {
      await api.put(
        `/sensor/atualizar/${sensor.id}`,
        {
          id: sensor.id,
          tipoSensor,
          status,
        }
      );

      Alert.alert(
        "Sucesso",
        "Sensor atualizado com sucesso!"
      );

      navigation.goBack();
    } catch (error) {
      Alert.alert(
        "Erro",
        "Não foi possível atualizar o sensor."
      );
    }
  };

  const handleDelete = async () => {
    try {
      await api.delete(
        `/sensor/remover/${sensor.id}`
      );

      Alert.alert(
        "Sucesso",
        "Sensor removido com sucesso!"
      );

      navigation.goBack();
    } catch (error) {
      Alert.alert(
        "Erro",
        "Não foi possível remover o sensor."
      );
    }
  };

  const confirmarExclusao = () => {
    Alert.alert(
      "Excluir Sensor",
      "Tem certeza que deseja excluir este sensor?",
      [
        {
          text: "Cancelar",
          style: "cancel",
        },
        {
          text: "Excluir",
          style: "destructive",
          onPress: handleDelete,
        },
      ]
    );
  };

  return (
    <ScreenContainer>
      <View style={styles.header}>
        <Title>✏️ Editar Sensor</Title>

        <TouchableOpacity
          onPress={confirmarExclusao}
          style={styles.trashButton}
        >
          <MaterialIcons
            name="delete-outline"
            size={34}
            color="#d32f2f"
          />
        </TouchableOpacity>
      </View>

      <View style={styles.form}>
        <Input
          value={tipoSensor}
          onChangeText={setTipoSensor}
          placeholder="Tipo do Sensor"
        />

        <Input
          value={status}
          onChangeText={setStatus}
          placeholder="Status"
        />
      </View>

      <Button
        title="Atualizar Sensor"
        onPress={handleUpdate}
      />
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  trashButton: {
    padding: 4,
  },

  form: {
    marginTop: 20,
    marginBottom: 20,
  },
});