import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


import About from './src/screens/About'
import Register from './src/screens/Register'
import Login from './src/screens/Login'

const Stack = createStackNavigator();

export default function App() {
  return (

    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
          <Stack.Screen name = "About"component={About}/>
          <Stack.Screen name = "Register" component={Register}/>
          <Stack.Screen name = "Login"component={Login}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

