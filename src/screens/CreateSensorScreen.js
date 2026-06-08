import ScreenContainer from "../components/ScreenContainer";
import Title from "../components/Title";
import Input from "../components/Input";
import Button from "../components/Button";
import { Alert } from "react-native";

export default function CreateSensorScreen({ navigation }) {

  const handleCreate = () => {
    Alert.alert("Sucesso", "Sensor criado!");
    navigation.goBack();
  };

  return (
    <ScreenContainer>
      <Title>➕ Novo Sensor</Title>

      <Input placeholder="Nome do sensor" />
      <Input placeholder="Valor (ex: 25°C)" />

      <Button title="Salvar" onPress={handleCreate} />
    </ScreenContainer>
  );
}