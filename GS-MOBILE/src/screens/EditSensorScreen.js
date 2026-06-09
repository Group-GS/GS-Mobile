import { useState } from "react";
import {
  View,
  StyleSheet,
  Alert,
  TouchableOpacity,
} from "react-native";

import { MaterialIcons } from "@expo/vector-icons";
import { Picker } from "@react-native-picker/picker";

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
    sensor.tipoSensor || ""
  );

  const [status, setStatus] = useState(
    sensor.status || "ATIVO"
  );

  const [localId, setLocalId] = useState(
    sensor.local?.id || 1
  );

  const handleUpdate = async () => {
    try {
      console.log({
        id: sensor.id,
        tipoSensor,
        status,
        local: {
          id: localId,
        },
      });

      await api.put(
        `/sensor/atualizar/${sensor.id}`,
        {
          id: sensor.id,
          tipoSensor,
          status,
          local: {
            id: localId,
          },
        }
      );

      Alert.alert(
        "Sucesso",
        "Sensor atualizado com sucesso!"
      );

      navigation.goBack();
    } catch (error) {
      console.log(
        "STATUS:",
        error.response?.status
      );

      console.log(
        "DATA:",
        error.response?.data
      );

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
      console.log(
        "STATUS:",
        error.response?.status
      );

      console.log(
        "DATA:",
        error.response?.data
      );

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
          placeholder="Tipo do Sensor"
          value={tipoSensor}
          onChangeText={setTipoSensor}
        />

        <Picker
          selectedValue={status}
          onValueChange={(itemValue) =>
            setStatus(itemValue)
          }
        >
          <Picker.Item label="ATIVO" value="ATIVO" />
          <Picker.Item label="INATIVO" value="INATIVO" />
          <Picker.Item label="MANUTENÇÃO" value="MANUTENCAO" />
        </Picker>

        <Picker
          selectedValue={localId}
          onValueChange={(itemValue) =>
            setLocalId(itemValue)
          }
        >
          <Picker.Item
            label="Fazenda Verde - Manaus"
            value={1}
          />

          <Picker.Item
            label="Fazenda Sol Nascente - Goiânia"
            value={2}
          />

          <Picker.Item
            label="Sítio Sertão Forte - Juazeiro"
            value={3}
          />

          <Picker.Item
            label="Fazenda Atlântica - Campinas"
            value={4}
          />

          <Picker.Item
            label="Estância Sul - Pelotas"
            value={5}
          />

          <Picker.Item
            label="Fazenda Pantaneira - Corumbá"
            value={6}
          />
        </Picker>
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

  form: {
    marginTop: 20,
    marginBottom: 20,
  },
});