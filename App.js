import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {NativeBaseProvider} from 'native-base'
import Singup from './Components/Register/Singup/Singup'
import Login from './Components/Register/Login/Login'
import Password from './Components/Register/Password/Password'
import Verification from './Components/Register/Verification/Verification'

import Welcome from './Components/Welcome/Welcome'

const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="welcome" screenOptions={{headerShown:false}}>
        <Stack.Screen name='welcome' component={Welcome} />
        <Stack.Screen name='Singup' component={Singup} />
        <Stack.Screen name='Login' component={Login} />
        <Stack.Screen name='Verification' component={Verification} />

        <Stack.Screen name='Password' component={Password} />


        </Stack.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  )
};

export default App;
