import axios from 'axios';
import {Button, Toast} from 'native-base';
import React, {useState} from 'react';
import {View, Text, Image, TextInput, TouchableOpacity} from 'react-native';
import {responsiveScreenFontSize} from 'react-native-responsive-dimensions';
import {useNetInfo} from '@react-native-community/netinfo';
import {useNavigation} from '@react-navigation/native';

const SingUp = () => {
  const navigation = useNavigation();
  const netInfo = useNetInfo();
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');

  const singUpBtn = () => {
    if (!netInfo.isConnected || netInfo.isConnected === null) {
      Toast.show({
        title: 'Please connect to the internet',
        bg: 'yellow.500',
        placement: 'bottom',
        duration: 2000,
        variant: 'solid',
      });
      return;
    }

    if (email == '' || name == '' || password == '') {
      Toast.show({
        title: 'Please Fill All Fields',
        bg: 'red.600',
        placement: 'bottom',
        duration: 2000,
        variant: 'solid',
      });
      return;
    }
    if (password.length < 6) {
      Toast.show({
        title: 'Please Enter Password With 6 Character',
        bg: 'red.600',
        placement: 'bottom',
        duration: 2000,
        variant: 'solid',
      });
      return;
    }

    axios
      .post(`${window.api}/auth/singup`, {
        name,
        email,
        password,
      })
      .then(res => {
        if (res.status === 200) {
          navigation.navigate('Verification', {
            code: res.data.code,
            userId: res.data.id,
            email,
          });
          setEmail('');
          setName('');
          setPassword('');
        }
      })
      .catch(err => {
        Toast.show({
          title: err.response.data,
          bg: 'red.600',
          placement: 'top',
          duration: 3000,
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
            Let's Create
          </Text>
          <Text
            style={{
              color: '#fff',
              fontFamily: 'Poppins',
              fontSize: responsiveScreenFontSize(2),
            }}>
            Your Account
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
              color: '#FEB500',
              fontFamily: 'Poppins',
              fontSize: responsiveScreenFontSize(1.8),
            }}>
            Enter Email
          </Text>
          <TextInput
            keyboardType="email-address"
            placeholder="hello@example.com"
            style={{
              color: '#fff',
              fontFamily: 'Poppins',
              fontSize: responsiveScreenFontSize(1.7),
            }}
            placeholderTextColor="#ccc"
            autoFocus={true}
            value={email}
            onChangeText={e => {
              setEmail(e);
            }}
          />

          <Text
            style={{
              color: '#FEB500',
              fontFamily: 'Poppins',
              fontSize: responsiveScreenFontSize(1.8),
            }}>
            Full Name
          </Text>
          <TextInput
            placeholder="Micra Solution"
            style={{
              color: '#fff',
              fontFamily: 'Poppins',
              fontSize: responsiveScreenFontSize(1.7),
            }}
            placeholderTextColor="#ccc"
            value={name}
            onChangeText={e => {
              setName(e);
            }}
          />

          <Text
            style={{
              color: '#FEB500',
              fontFamily: 'Poppins',
              fontSize: responsiveScreenFontSize(1.8),
            }}>
            Enter Password
          </Text>
          <TextInput
            placeholder="********"
            secureTextEntry={true}
            style={{
              color: '#fff',
              fontFamily: 'Poppins',
              fontSize: responsiveScreenFontSize(1.7),
            }}
            placeholderTextColor="#ccc"
            onChangeText={e => {
              setPassword(e);
            }}
          />
        </View>

        <View style={{alignItems: 'center' ,marginBottom:50 }}>
          <Button
            size="lg"
            style={{backgroundColor: '#FEB500'}}
            onPress={singUpBtn}>
            <Text
              style={{
                fontFamily: 'Poppins',
                fontSize: responsiveScreenFontSize(1.8),
                color: '#000',
                fontWeight: '500',
              }}>
              Sing Up
            </Text>
          </Button>
        </View>

        <View>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Login');
            }}>
            <Text
              style={{
                color: '#fff',
                fontFamily: 'Poppins',
                textAlign: 'center',
                fontSize: responsiveScreenFontSize(1.5),
              }}>
              Have Account?
            </Text>
          </TouchableOpacity>
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

export default SingUp;
