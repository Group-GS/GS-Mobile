import ScreenContainer from "../components/ScreenContainer";
import Title from "../components/Title";
import Input from "../components/Input";
import Button from "../components/Button";
import { View, StyleSheet } from "react-native";

export default function LoginScreen({ navigation }) {

  const handleLogin = () => {
    navigation.navigate("Dashboard");
  };

  return (
    <ScreenContainer>
      <Title>🌱 Eco Monitor</Title>

      <View style={styles.form}>
        <Input placeholder="Email" />
        <Input placeholder="Senha" secureTextEntry />
      </View>

      <Button title="Entrar" onPress={handleLogin} />
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({
  form: {
    marginBottom: 20
  }
});