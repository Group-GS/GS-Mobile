import ScreenContainer from "../components/ScreenContainer";
import Title from "../components/Title";
import Input from "../components/Input";
import Button from "../components/Button";
import { View, StyleSheet, Alert } from "react-native";

export default function CreateSensorScreen({ navigation }) {
  const handleCreate = () => {
    Alert.alert(
      "Sensor criado com sucesso",
      "O novo sensor já está disponível na lista."
    );

    navigation.goBack();
  };

  return (
    <ScreenContainer>
      <Title>➕ Novo Sensor</Title>

      <View style={styles.form}>
        <Input placeholder="Nome do sensor (ex: Temperatura estufa)" />
        <Input placeholder="Valor atual (ex: 25°C ou 60%)" />
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