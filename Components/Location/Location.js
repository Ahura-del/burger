import {Button} from 'native-base';
import React, {useEffect, useRef, useState} from 'react';
import {Image, View, Text} from 'react-native';
import {responsiveScreenFontSize} from 'react-native-responsive-dimensions';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Location = ({navigation, route}) => {
  const [userId, setUserId] = useState();
  const mountedRef = useRef(true);
  useEffect(() => {
    const getUserId = async () => {
      const user = await AsyncStorage.getItem('userId');
      setUserId(user);
    };
    getUserId();
    return () => {
      mountedRef.current = false;
    };
  }, []);

  return (
    <View style={{flex: 1, flexDirection: 'column', backgroundColor: '#000'}}>
      <View style={{flex: 2}}>
        <Image
          source={require('../../assets/Image/location.png')}
          resizeMode="cover"
          style={{width: '100%', height: '100%', position: 'relative'}}
        />
      </View>
      <View
        style={{
          flex: 1,
          width: '90%',
          marginLeft: 'auto',
          marginRight: 'auto',
          justifyContent: 'space-around',
        }}>
        <View
          style={{
            flexDirection: 'row',
            paddingTop: 20,

            justifyContent: 'space-around',
            alignItems: 'center',
          }}>
          <View style={{flex: 2, marginRight: 10}}>
            <Text
              style={{
                color: '#FEB500',
                fontSize: responsiveScreenFontSize(2),
                fontFamily: 'Poppins',
                textTransform: 'capitalize',
              }}>
              {route.params === undefined ? 'Nana Varachha' : route.params.city}
            </Text>
            <Text
              style={{
                color: '#fff',
                fontSize: responsiveScreenFontSize(1.5),
                fontFamily: 'Poppins',
              }}>
              {route.params === undefined
                ? 'Yogi Chowk Ground, Chikuwadi'
                : route.params.address}
            </Text>
            <Text
              style={{
                color: '#fff',
                fontSize: responsiveScreenFontSize(1.5),
                fontFamily: 'Poppins',
              }}>
              {route.params === undefined
                ? 'Nana Varachha, Surat, Gujarat'
                : route.params.appartment}
              , {route.params === undefined ? 'India' : route.params.floor}
            </Text>
          </View>
          <View style={{flex: 1, marginTop: 20}}>
            <Button
              size="md"
              style={{backgroundColor: '#FEB500'}}
              onPress={() => {
                navigation.navigate('NewLocation', {userId});
              }}>
              <Text
                style={{
                  fontFamily: 'Poppins',
                  color: '#000',
                  fontSize: responsiveScreenFontSize(1.7),
                }}>
                CHANGE
              </Text>
            </Button>
          </View>
        </View>
        <View>
          <Button
            size="md"
            style={{backgroundColor: '#FEB500'}}
            onPress={() => {
              navigation.navigate('Home');
            }}>
            <Text
              style={{
                fontFamily: 'Poppins',
                color: '#000',
                fontSize: responsiveScreenFontSize(2),
              }}>
              Confirm Location
            </Text>
          </Button>
        </View>
      </View>
    </View>
  );
};

export default Location;
