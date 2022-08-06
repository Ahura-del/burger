import {useNavigation} from '@react-navigation/native';
import {Button} from 'native-base';
import React from 'react';
import {View, Image, Text} from 'react-native';
import {responsiveScreenFontSize} from 'react-native-responsive-dimensions';

function NotRegister() {
  const navigation = useNavigation();
  const continueBtn = () => {
    navigation.navigate('Home');
  };
  return (
    <View
      style={{
        width: '100%',
        flex: 1,
        backgroundColor: '#000',
        justifyContent: 'center',
        flexDirection: 'column',
        alignContent: 'center',
      }}>
      <View style={{flex: 1, flexDirection: 'row', alignItems: 'center'}}>
        <Image
          source={require('../../../assets/Image/upshape.png')}
          style={{width: '45%', height: '100%'}}
        />
      </View>

      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text style={{color: '#FEB500', fontSize: 15}}>
          This is a demo app ,so there is no server{' '}
        </Text>
        <Text style={{color: '#FEB500', fontSize: 15}}>to sing up or sing in</Text>

        <Button
          size="md"
          style={{
            backgroundColor: '#FEB500',
            width: 120,
            height: 40,
            marginTop: 20,
          }}
          onPress={continueBtn}>
          <Text
            style={{
              fontFamily: 'Poppins',
              color: '#000',
              fontSize: responsiveScreenFontSize(1.8),
            }}>
            Continue
          </Text>
        </Button>
      </View>

      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <View></View>

        <Image
          source={require('../../../assets/Image/downshape.png')}
          style={{width: '45%', height: '100%'}}
        />
      </View>
    </View>
  );
}

export default NotRegister;
