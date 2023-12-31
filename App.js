import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Login from './src/Pages/Login';
import Registro from './src/Pages/Registro';
import Recuperar from './src/Pages/Recuperar';
import Dashboard from './src/Pages/Dashboard';

const Stack = createNativeStackNavigator();

export default function App() {
   return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} options={{headerShown: false}}/>
        <Stack.Screen name="Registro" component={Registro} options={{headerShown: false}}/>
        <Stack.Screen name="Recuperar" component={Recuperar} options={{headerShown: false}}/>
        <Stack.Screen name="Dashboard" component={Dashboard} options={{headerShown: false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}