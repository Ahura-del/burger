import React, {useRef, useState} from 'react';
import {View, Text, Image, TextInput} from 'react-native';
import {Button, Toast} from 'native-base';
import {responsiveScreenFontSize} from 'react-native-responsive-dimensions';
import CodeInput from 'react-native-confirmation-code-input';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const ForgetPassword = ({navigation, route}) => {
  const [resendCode, setResendCode] = useState('');
  const email = route.params.email;
  const userId = route.params.userId;
  let code = resendCode === '' ? route.params.code : resendCode;
  const [pass, setPass] = useState('');
  const [rePass, setRePass] = useState('');
  const stCode = String(code);
  const inputRef = useRef('codeInputRef2');
  const onFinishCheckingCode2 = e => {
    if (pass === '' || rePass === '') {
      Toast.show({
        title: 'Please set password and re-password',
        bg: 'red.600',
        placement: 'bottom',
        duration: 3000,
        variant: 'solid',
      });
      return;
    }
    if (pass.length < 6) {
      Toast.show({
        title: "You'r password must over 6 characters",
        bg: 'red.600',
        placement: 'bottom',
        duration: 3000,
        variant: 'solid',
      });
      return;
    }
    if (pass !== rePass) {
      Toast.show({
        title: "Password and re-password don't match",
        bg: 'red.600',
        placement: 'bottom',
        duration: 3000,
        variant: 'solid',
      });
      return;
    }
    if (!e) {
      Toast.show({
        title: "Please check you'r email and enter the code",
        bg: 'red.600',
        placement: 'bottom',
        duration: 3000,
        variant: 'solid',
      });
      return;
    }

    axios
      .put(`http://192.168.1.102:3000/auth/fPass/${userId}`, {password: pass})
      .then(async res => {
        if (res.status === 200) {
          setResendCode('');
          await AsyncStorage.setItem('token', res.data.token);
          await AsyncStorage.setItem('userId', res.data.id);
          navigation.navigate('Home');
        }
      })
      .catch(err => {
        Toast.show({
          title: err.response.data,
          duration: 3000,
          bg: 'red.600',
          placement: 'bottom',
          variant: 'solid',
        });
      });
  };

  const resndCode = () => {
    axios
      .get(`http://192.168.1.102:3000/auth/fPass/${email}`)
      .then(res => {
        if (res.status === 200) {
          setResendCode(res.data.code);
          Toast.show({
            title: 'Validation code sent to your email',
            duration: 3000,
            bg: 'green.600',
            placement: 'bottom',
            variant: 'solid',
          });
        }
      })
      .catch(err => {
        Toast.show({
          title: err.response.data,
          duration: 3000,
          bg: 'red.600',
          placement: 'bottom',
          variant: 'solid',
        });
      });
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
            Change
          </Text>
          <Text
            style={{
              color: '#fff',
              fontFamily: 'Poppins',
              fontSize: responsiveScreenFontSize(2),
            }}>
            Password
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
        <View style={{marginBottom: 20, marginTop: 20}}>
          <Text
            style={{color: '#FEB500', fontSize: responsiveScreenFontSize(1.7)}}>
            New Password
          </Text>
          <TextInput
            placeholder="*********"
            style={{color: '#fff', fontSize: responsiveScreenFontSize(2)}}
            placeholderTextColor="#ccc"
            autoFocus={true}
            onChangeText={e => setPass(e)}
            secureTextEntry={true}
          />
        </View>

        <View style={{marginBottom: 20}}>
          <Text
            style={{color: '#FEB500', fontSize: responsiveScreenFontSize(1.7)}}>
            Re-Password
          </Text>
          <TextInput
            placeholder="*********"
            style={{color: '#fff', fontSize: responsiveScreenFontSize(2)}}
            placeholderTextColor="#ccc"
            onChangeText={e => setRePass(e)}
            secureTextEntry={true}
          />
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
            alignItems: 'center',
            marginTop: 20,
          }}>
          <View
            style={{
              marginTop: 20,
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              width: '100%',
            }}>
            <Button
              size="lg"
              style={{
                // width: 125,
                // height: 45,
                backgroundColor: '#FEB500',
              }}
              onPress={resndCode}>
              <Text
                style={{
                  fontFamily: 'Poppins',
                  color: '#000',
                  textAlign: 'center',
                  fontSize: responsiveScreenFontSize(1.7),
                }}>
                Resend code
              </Text>
            </Button>
          </View>
          {/* <View style={{marginTop: 40}}>
            <TouchableOpacity onPress={() => alert('text')}>
              <Text
                style={{
                  color: '#fff',
                  fontSize: responsiveScreenFontSize(2),
                }}>
                Resend code
              </Text>
            </TouchableOpacity>
          </View> */}
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

export default ForgetPassword;
