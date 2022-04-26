window.api = 'http://192.168.1.102:3000';
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
import MealDetail from './Components/Category/MealDetail/MealDetial';
import Profile from './Components/Profile/Profile';
import UpdateProfile from './Components/Profile/UpdateProfile/UpdateProfile';
import ChangePass from './Components/Profile/ChangePass/ChangePass';
import ProfileLocation from './Components/Profile/Location/Location';
import Location from './Components/Location/Location';
import NewLocation from './Components/Location/NewLocation/NewLocation';
import Preloader from './Components/Preloader/Preloader';
import Category from './Components/Category/Category';
import SubCategory from './Components/Category/SubCategory/SubCategory';
import Cart from './Components/Cart/Cart/Cart';
import Checkout from './Components/Cart/Checkout/Checkout';
import Payment from './Components/Profile/Payment/Payment';
import Notification from './Components/Notification/Notification';
import Welcome from './Components/Welcome/Welcome';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNetInfo} from '@react-native-community/netinfo';
import Connection from './Components/Connection/Connection';
import Loading from './config/Loading';
import {Provider} from 'react-redux';
import Store from './Redux/Store';
const Stack = createNativeStackNavigator();
const App = () => {
  const [loading, setLoading] = useState();
  const [conect, setConnect] = useState(false);
  const netInfo = useNetInfo().isConnected;
  const [storage, setStorage] = useState(false);
  const mountedRef = useRef(true);
  const mountedRef2 = useRef(true);

  useEffect(() => {
    if (netInfo) {
      setConnect(false);
    } else {
      setConnect(true);
    }

    return () => {
      mountedRef2.current = false;
    };
  }, [netInfo]);

  useEffect(() => {
    setLoading(true);
    const getStorage = async () => {
      const asyncStorage = await AsyncStorage.getItem('token');
      if (asyncStorage === null || asyncStorage.length === 0) {
        setLoading(false);
        setStorage(false);
      } else {
        setLoading(false);
        setStorage(true);
      }
    };
    getStorage();
    return () => {
      mountedRef.current = false;
    };
  }, [conect]);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <>
          {conect ? (
            <Connection />
          ) : (
            <Provider store={Store}>
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
                    <Stack.Screen options={{gestureEnabled:false}} name="Preloader" component={Preloader} />
                    <Stack.Screen options={{gestureEnabled:false}} name="Home" component={Home} />
                    <Stack.Screen
                      name="Notification"
                      component={Notification}
                    />
                    <Stack.Screen name="MealDetail" component={MealDetail} />
                    <Stack.Screen name="Category" component={Category} />
                    <Stack.Screen name="SubCategory" component={SubCategory} />
                    <Stack.Screen name="Cart" component={Cart} />
                    <Stack.Screen name="Checkout" component={Checkout} />
                    <Stack.Screen
                      name="UpdateProfile"
                      component={UpdateProfile}
                    />
                    <Stack.Screen name="Profile" component={Profile} />
                    <Stack.Screen name="ChangePass" component={ChangePass} />
                    <Stack.Screen
                      name="ProfileLocation"
                      component={ProfileLocation}
                    />
                    <Stack.Screen name="Payment" component={Payment} />
                  </Stack.Navigator>
                </NavigationContainer>
              </NativeBaseProvider>
            </Provider>
          )}
        </>
      )}
    </>
  );
};

export default App;
