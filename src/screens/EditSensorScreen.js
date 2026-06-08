import ScreenContainer from "../components/ScreenContainer";
import Title from "../components/Title";
import Input from "../components/Input";
import Button from "../components/Button";
import { View, StyleSheet, Alert } from "react-native";

export default function EditSensorScreen({ route, navigation }) {
  const { sensor } = route.params;

  const handleUpdate = () => {
    Alert.alert(
      "Atualização concluída",
      "Os dados do sensor foram atualizados com sucesso."
    );

    navigation.goBack();
  };

  return (
    <ScreenContainer>
      <Title>✏️ Editar Sensor</Title>

      <View style={styles.form}>
        <Input placeholder="Nome do sensor" defaultValue={sensor.nome} />
        <Input placeholder="Valor atualizado" defaultValue={sensor.valor} />
      </View>

      <Button title="Atualizar" onPress={handleUpdate} />
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({
  form: {
    marginBottom: 20
  }
});