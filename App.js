import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {NativeBaseProvider} from 'native-base'
import Singup from './Components/Register/Singup/Singup'
import Login from './Components/Register/Login/Login'
import RestPass from './Components/Register/ForgetPassword/ForgetPassword'
import EmailRestPass from './Components/Register/ForgetPassword/EmailRestPass/EmailRestPass'

import Verification from './Components/Register/Verification/Verification'
import Location from './Components/Location/Location'
import NewLocation from './Components/Location/NewLocation/NewLocation'
import Home from './Components/Home/Home'



import Welcome from './Components/Welcome/Welcome'

const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Welcome" screenOptions={{headerShown:false}}>
        <Stack.Screen name='Welcome' component={Welcome} />
        <Stack.Screen name='Singup' component={Singup} />
        <Stack.Screen name='Login' component={Login} />
        <Stack.Screen name='Verification' component={Verification} />
        <Stack.Screen name='Location' component={Location} />
        <Stack.Screen name='NewLocation' component={NewLocation} />
        <Stack.Screen name='Home' component={Home} />

        <Stack.Screen name='RestPass' component={RestPass} />
        <Stack.Screen name='EmailRestPass' component={EmailRestPass} />


        </Stack.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  )
};

export default App;
