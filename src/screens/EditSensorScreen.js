import ScreenContainer from "../components/ScreenContainer";
import Title from "../components/Title";
import Input from "../components/Input";
import Button from "../components/Button";
import { Alert } from "react-native";

export default function EditSensorScreen({ navigation }) {

  const handleUpdate = () => {
    Alert.alert("Sucesso", "Sensor atualizado!");
    navigation.goBack();
  };

  return (
    <ScreenContainer>
      <Title>✏️ Editar Sensor</Title>

      <Input placeholder="Nome do sensor" />
      <Input placeholder="Valor (ex: 25°C)" />

      <Button title="Atualizar" onPress={handleUpdate} />
    </ScreenContainer>
  );
}