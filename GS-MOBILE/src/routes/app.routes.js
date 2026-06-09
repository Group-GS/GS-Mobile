import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import DashboardScreen from '../screens/DashboardScreen';
import SensoresScreen from '../screens/SensoresScreen';
import CreateSensorScreen from '../screens/CreateSensorScreen';
import EditSensorScreen from '../screens/EditSensorScreen';

const Stack = createNativeStackNavigator();

// 🔐 função de proteção simples
function isLogged() {
  return !!global.loggedUser;
}

export default function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen
          name="Dashboard"
          component={DashboardScreen}
          options={{
            headerShown: false
          }}
          listeners={({ navigation }) => ({
            focus: () => {
              if (!isLogged()) {
                navigation.replace("Login");
              }
            }
          })}
        />

        <Stack.Screen
          name="Sensores"
          component={SensoresScreen}
          listeners={({ navigation }) => ({
            focus: () => {
              if (!isLogged()) {
                navigation.replace("Login");
              }
            }
          })}
        />

        <Stack.Screen
          name="CreateSensor"
          component={CreateSensorScreen}
          listeners={({ navigation }) => ({
            focus: () => {
              if (!isLogged()) {
                navigation.replace("Login");
              }
            }
          })}
        />

        <Stack.Screen
          name="EditSensor"
          component={EditSensorScreen}
          listeners={({ navigation }) => ({
            focus: () => {
              if (!isLogged()) {
                navigation.replace("Login");
              }
            }
          })}
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
}