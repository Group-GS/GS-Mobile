import ScreenContainer from "../components/ScreenContainer";
import Title from "../components/Title";
import Input from "../components/Input";
import Button from "../components/Button";
import { View, StyleSheet, Alert } from "react-native";

export default function EditSensorScreen({ route, navigation }) {
  const { sensor } = route.params;

  const handleUpdate = () => {
    Alert.alert("Atualizado!");
    navigation.goBack();
  };

  return (
    <ScreenContainer>
      <Title>✏️ Editar Sensor</Title>

      <View style={styles.form}>
        <Input defaultValue={sensor.nome} />
        <Input defaultValue={sensor.valor} />
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