import React, {useRef} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {responsiveScreenFontSize} from 'react-native-responsive-dimensions';
import AsyncStorage from '@react-native-async-storage/async-storage';
import CodeInput from 'react-native-confirmation-code-input';
import axios from 'axios';
import {Toast} from 'native-base';
import {useNavigation, useRoute} from '@react-navigation/native';

const Verification = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const verifyCode = route.params.code;
  const userId = route.params.userId;
  const stCode = String(verifyCode);
  const inputRef = useRef('codeInputRef2');

  const onFinishCheckingCode2 = code => {
    if (code) {
      axios
        .put(`${window.api}/auth/verify/${userId}`, {verify: true})
        .then(async res => {
          if (res.status === 200) {
            await AsyncStorage.setItem('token', res.data.token);
            await AsyncStorage.setItem('userId', userId);
            navigation.navigate('Location');
          }
        })
        .catch(err => {
          console.log(err.message);
          Toast.show({
            title: err.response.data,
            bg: 'red.600',
            placement: 'bottom',
            duration: 2000,
            variant: 'solid',
          });
        });
    } else {
      Toast.show({
        title: 'Code is invalid!',
        bg: 'red.600',
        placement: 'bottom',
        duration: 2000,
        variant: 'solid',
      });
    }
  };

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#000',
        justifyContent: 'center',
        flexDirection: 'column',
        alignContent: 'center',
      }}>
      <View style={{flex: 1, flexDirection: 'row', alignItems: 'center'}}>
        <Image
          source={require('../../../assets/Image/upshape.png')}
          style={{width: '33%', height: '100%'}}
        />

        <View>
          <Text
            style={{
              color: '#FEB500',
              fontFamily: 'Poppins',
              fontSize: responsiveScreenFontSize(2.5),
            }}>
            Enter
          </Text>
          <Text
            style={{
              color: '#fff',
              fontFamily: 'Poppins',
              fontSize: responsiveScreenFontSize(2.0),
            }}>
            Verification code
          </Text>
        </View>
      </View>

      <View
        style={{
          flex: 2,
          flexDirection: 'column',
          justifyContent: 'space-between',
          width: '85%',
          marginLeft: 'auto',
          marginRight: 'auto',
        }}>
        <View style={{marginTop: 20}}>
          <Text
            style={{
              color: '#fff',
              fontFamily: 'Poppins',
              fontSize: responsiveScreenFontSize(2.2),
            }}>
            Enter code we just sent via Email to
          </Text>
          <Text
            style={{
              marginTop: 15,
              color: '#FEB500',
              fontFamily: 'Poppins',
              fontSize: responsiveScreenFontSize(2.0),
            }}>
            {route.params.email}
          </Text>
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
          <CodeInput
            ref={inputRef}
            keyboardType="numeric"
            codeLength={4}
            size={70}
            className="border-box"
            activeColor="#FEB500"
            inactiveColor="#FEB500"
            compareWithCode={stCode}
            cellBorderWidth={2}
            autoFocus={false}
            codeInputStyle={{
              fontWeight: '800',
              fontSize: 20,
              color: '#fdfdfdfd',
            }}
            onFulfill={isValid => onFinishCheckingCode2(isValid)}
          />
        </View>
        <View
          style={{
            alignItems: 'flex-end',
            justifyContent: 'center',
            marginTop: 20,
          }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              width: '100%',
            }}>
            <TouchableOpacity
              onPress={() => navigation.navigate('Singup')}
              style={{
                backgroundColor: '#FEB500',
                paddingVertical: 12,
                paddingHorizontal: 50,
                borderRadius: 10,
              }}>
              <Text
                style={{
                  fontFamily: 'Poppins',
                  color: '#000',
                  fontSize: responsiveScreenFontSize(2.0),
                }}>
                Back
              </Text>
            </TouchableOpacity>
          </View>
        </View>
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
          style={{width: '33%', height: '100%'}}
        />
      </View>
    </View>
  );
};

export default Verification;
