import { View, Text, TextInput, Button } from 'react-native';

export default function LoginScreen() {
  return (
    <View>
      <Text>Login</Text>

      <TextInput placeholder="Email" />
      <TextInput placeholder="Senha" secureTextEntry />

      <Button title="Entrar" onPress={() => {}} />
    </View>
  );
}