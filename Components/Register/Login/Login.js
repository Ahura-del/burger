import {Button, Toast} from 'native-base';
import React, {useState} from 'react';
import {View, Text, Image, TextInput, TouchableOpacity} from 'react-native';
import {responsiveScreenFontSize} from 'react-native-responsive-dimensions';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation} from '@react-navigation/native';

const Password = () => {
  const navigation = useNavigation();
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const singInBtn = () => {
    if (password === '' || email === '') {
      Toast.show({
        title: 'Please fill all fields!',
        duration: 3000,
        bg: 'red.600',
        placement: 'bottom',
        variant: 'solid',
      });
      return;
    } else {
      axios
        .post(`${window.api}/auth/singin`, {
          email,
          password,
        })
        .then(async res => {
          if (res.status === 200) {
            const token = await AsyncStorage.setItem('token', res.data.token);
            const userId = await AsyncStorage.setItem('userId', res.data.id);

            navigation.navigate('Preloader');
            setEmail('');
            setPassword('');
          }
          if (res.status === 201) {
            navigation.navigate('Verification', {
              code: res.data.code,
              userId: res.data.id,
              email,
            });
            setEmail('');
            setPassword('');
          }
        })
        .catch(err => {
          console.log(err);
          Toast.show({
            title: err.response.data,
            duration: 3000,
            bg: 'red.600',
            placement: 'bottom',
            variant: 'solid',
          });
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
              fontSize: responsiveScreenFontSize(2.7),
            }}>
            Sing in
          </Text>
          <Text
            style={{
              color: '#fff',
              fontFamily: 'Poppins',
              fontSize: responsiveScreenFontSize(2),
            }}>
            Account
          </Text>
          <Text
            style={{
              color: '#FEB500',
              fontFamily: 'Poppins',
              fontSize: responsiveScreenFontSize(1.7),
            }}>
            Don't have account?{' '}
            <Text onPress={() => navigation.navigate('Singup')}>Sing up</Text>
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
        <View style={{marginBottom: -70}}>
          <View style={{marginBottom: 20, marginTop: 20}}>
            <Text
              style={{
                color: '#FEB500',
                fontSize: responsiveScreenFontSize(1.7),
              }}>
              Eamil Address
            </Text>
            <TextInput
              placeholder="hello@example.com"
              style={{
                color: '#e1e1e1',
                fontFamily: 'Poppins',
                fontSize: responsiveScreenFontSize(1.7),
              }}
              placeholderTextColor="#ccc"
              autoFocus={true}
              onChangeText={e => setEmail(e)}
              keyboardType="email-address"
            />
          </View>
          <View style={{marginBottom: 80}}>
            <Text
              style={{
                color: '#FEB500',
                fontSize: responsiveScreenFontSize(1.7),
              }}>
              Enter Password
            </Text>
            <TextInput
              placeholder="✶✶✶✶✶✶"
              placeholderTextColor="#ccc"
              secureTextEntry={true}
              style={{color: '#fff', width: '50%'}}
              onChangeText={e => setPassword(e)}
            />
          </View>
          <View style={{alignItems: 'center'}}>
            <Button
              size="md"
              style={{backgroundColor: '#FEB500', width: 120, height: 45}}
              onPress={singInBtn}>
              <Text
                style={{
                  fontFamily: 'Poppins',
                  color: '#000',
                  fontSize: responsiveScreenFontSize(2),
                }}>
                Sing in
              </Text>
            </Button>

            <View
              style={{
                flexDirection: 'column',
                alignItems: 'center',
                marginTop: 30,
              }}>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('EmailRestPass');
                }}>
                <Text
                  style={{
                    color: '#fff',
                    paddingVertical: 20,
                    fontSize: responsiveScreenFontSize(1.7),
                  }}>
                  Rest your Password
                </Text>
              </TouchableOpacity>
            </View>
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

export default Password;
