import ScreenContainer from "../components/ScreenContainer";
import Title from "../components/Title";
import Input from "../components/Input";
import Button from "../components/Button";

export default function LoginScreen({ navigation }) {

  const handleLogin = () => {
    navigation.navigate("Dashboard");
  };

  return (
    <ScreenContainer>
      <Title>🌱 Eco Monitor</Title>

      <Input placeholder="Email" />
      <Input placeholder="Senha" secureTextEntry />

      <Button title="Entrar" onPress={handleLogin} />
    </ScreenContainer>
  );
}