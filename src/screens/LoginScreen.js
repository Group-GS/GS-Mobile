import ScreenContainer from "../components/ScreenContainer";
import Title from "../components/Title";
import Input from "../components/Input";
import Button from "../components/Button";
import { View, StyleSheet, Alert } from "react-native";
import { useState } from "react";

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = () => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);

      if (!global.user || email !== global.user.email) {
        Alert.alert(
          "E-mail não encontrado",
          "Verifique se o e-mail está correto ou crie uma nova conta."
        );
        return;
      }

      if (senha !== global.user.senha) {
        Alert.alert(
          "Senha incorreta",
          "A senha informada não está correta. Tente novamente."
        );
        return;
      }

      navigation.navigate("Dashboard");
    }, 1200);
  };

  return (
    <ScreenContainer>
      <Title>🌱 Eco Monitor</Title>

      <View style={styles.form}>
        <Input
          placeholder="Digite seu e-mail cadastrado"
          autoCapitalize="none"
          onChangeText={setEmail}
        />

        <Input
          placeholder="Sua senha de acesso"
          secureTextEntry
          onChangeText={setSenha}
        />
      </View>

      <View style={styles.buttons}>
        <Button
          title={loading ? "Entrando..." : "Entrar"}
          onPress={handleLogin}
        />

        <Button
          title="Criar conta"
          onPress={() => navigation.navigate("Register")}
        />
      </View>
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({
  form: {
    marginBottom: 20,
    marginTop: 20
  },
  buttons: {
    gap: 10
  }
});