import ScreenContainer from "../components/ScreenContainer";
import Title from "../components/Title";
import Input from "../components/Input";
import Button from "../components/Button";
import { View, StyleSheet, Alert } from "react-native";
import { useState } from "react";

export default function RegisterScreen({ navigation }) {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const handleRegister = () => {
    if (!email || !senha) {
      Alert.alert(
        "Campos obrigatórios",
        "Preencha seu e-mail e senha para continuar."
      );
      return;
    }

    global.user = { email, senha };

    Alert.alert(
      "Conta criada com sucesso 🎉",
      "Agora você já pode fazer login no sistema."
    );

    navigation.goBack();
  };

  return (
    <ScreenContainer>
      <Title>📝 Criar Conta</Title>

      <View style={styles.form}>
        <Input
          placeholder="Seu melhor e-mail"
          autoCapitalize="none"
          onChangeText={setEmail}
        />

        <Input
          placeholder="Crie uma senha segura"
          secureTextEntry
          onChangeText={setSenha}
        />
      </View>

      <View style={styles.buttons}>
        <Button title="Cadastrar" onPress={handleRegister} />

        <Button
          title="Já tenho conta"
          onPress={() => navigation.goBack()}
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