import React, {useEffect, useRef, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NativeBaseProvider} from 'native-base';
import Singup from './Components/Register/Singup/Singup';
import Login from './Components/Register/Login/Login';
import RestPass from './Components/Register/ForgetPassword/ForgetPassword';
import EmailRestPass from './Components/Register/ForgetPassword/EmailRestPass/EmailRestPass';
import Home from './Components/Home/Home';
import Verification from './Components/Register/Verification/Verification';
import Location from './Components/Location/Location';
import NewLocation from './Components/Location/NewLocation/NewLocation';
import Preloader from './Components/Preloader/Preloader';

import Welcome from './Components/Welcome/Welcome';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNetInfo} from '@react-native-community/netinfo';
import {ActivityIndicator, Text} from 'react-native';
import Connection from './Components/Connection/Connection';
const Stack = createNativeStackNavigator();
const App = () => {
  const [loading, setLoading] = useState();
  const [conect, setConnect] = useState();
  const netInfo = useNetInfo().isConnected;
  const [storage, setStorage] = useState(false);
  const mountedRef = useRef(true);
  useEffect(()=>{
    if(netInfo){
      setConnect(false)
    }else{
      setConnect(true)
    }
  },[netInfo])
  useEffect(() => {
    setLoading(true);
    const getStorage = async () => {
      const asyncStorage = await AsyncStorage.getItem('token');
     
        if (asyncStorage === null || asyncStorage.length === 0) {
         
          setLoading(false);

          setStorage(false);
        } else {

          setStorage(true);
        }
     
    };
    getStorage();
    return () => {
      mountedRef.current = false;
    };
  }, []);
 

  return (
    <>
      {loading ? (
        <ActivityIndicator />
      ) : (
        <>
          {conect ? (
            <Connection />
          ) : (
            <NativeBaseProvider>
              <NavigationContainer>
                <Stack.Navigator
                  initialRouteName={storage ? 'Preloader' : 'Welcome'}
                  screenOptions={{headerShown: false}}>
                  <Stack.Screen
                    name="Welcome"
                    component={storage ? Preloader : Welcome}
                  />
                  <Stack.Screen
                    name="Singup"
                    component={storage ? Preloader : Singup}
                  />
                  <Stack.Screen
                    name="Login"
                    component={storage ? Preloader : Login}
                  />
                  <Stack.Screen
                    name="Verification"
                    component={storage ? Preloader : Verification}
                  />
                  <Stack.Screen
                    name="Location"
                    component={storage ? Preloader : Location}
                  />
                  <Stack.Screen
                    name="NewLocation"
                    component={storage ? Preloader : NewLocation}
                  />
                  <Stack.Screen
                    name="RestPass"
                    component={storage ? Preloader : RestPass}
                  />
                  <Stack.Screen
                    name="EmailRestPass"
                    component={storage ? Preloader : EmailRestPass}
                  />
                  <Stack.Screen name="Preloader" component={Preloader} />
                  <Stack.Screen name="Home" component={Home} />
                </Stack.Navigator>
              </NavigationContainer>
            </NativeBaseProvider>
          )}
        </>
      )}
    </>
  );
};

export default App;
