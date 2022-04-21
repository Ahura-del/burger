import React, { useEffect, useRef, useState } from 'react';
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
import AsyncStorage from '@react-native-async-storage/async-storage';

const Stack = createNativeStackNavigator();
const App = () => {
  const [storage , setStorage]=useState(false)
  const mountedRef = useRef(true)
  useEffect(()=>{
    const getStorage = async ()=>{
      const asyncStorage = await AsyncStorage.getItem('token')
      if(asyncStorage.length > 0){
        setStorage(true)
      }else{
        setStorage(false)
      }
    }
    getStorage()
    return () => { mountedRef.current = false }
  },[])
  return (

    <NativeBaseProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName={storage ? "Home" : "Welcome"} screenOptions={{headerShown:false}}>
        <Stack.Screen name='Welcome' component={storage ? Home :Welcome} />
        <Stack.Screen name='Singup' component={storage ? Home :Singup} />
        <Stack.Screen name='Login' component={storage ? Home :Login} />
        <Stack.Screen name='Verification' component={storage ? Home :Verification} />
        <Stack.Screen name='Location' component={storage ? Home :Location} />
        <Stack.Screen name='NewLocation' component={storage ? Home :NewLocation} />
        <Stack.Screen name='RestPass' component={storage ? Home :RestPass} />
        <Stack.Screen name='EmailRestPass' component={storage ? Home :EmailRestPass} />
        <Stack.Screen name='Home' component={!storage ? Welcome :Home} />


        </Stack.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
    
  )
};

export default App;
