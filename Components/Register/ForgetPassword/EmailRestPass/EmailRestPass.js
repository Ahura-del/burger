import axios from 'axios';
import {Button, Toast} from 'native-base';
import React, {useState} from 'react';
import {View, Text, Image, TextInput} from 'react-native';
import {responsiveScreenFontSize} from 'react-native-responsive-dimensions';
import {useNavigation} from '@react-navigation/native';

const Password = () => {
  const [email, setEmail] = useState('');
  const navigation = useNavigation();
  const sendCode = () => {
    if (email === '') {
      Toast.show({
        title: "Please enter you'r email!",
        duration: 3000,
        bg: 'red.600',
        placement: 'bottom',
        variant: 'solid',
      });
      return;
    } else {
      axios
        .get(`${window.api}/auth/fPass/${email}`)
        .then(res => {
          if (res.status === 200) {
            navigation.navigate('RestPass', {
              code: res.data.code,
              userId: res.data.id,
              email,
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
          source={require('../../../../assets/Image/upshape.png')}
          style={{width: '33%', height: '100%'}}
        />
        <View>
          <Text
            style={{
              color: '#FEB500',
              fontFamily: 'Poppins',
              fontSize: responsiveScreenFontSize(2.7),
            }}>
            Reset
          </Text>
          <Text
            style={{
              color: '#fff',
              fontFamily: 'Poppins',
              fontSize: responsiveScreenFontSize(2),
            }}>
            Account Password
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
          <View style={{alignItems: 'center', marginTop: 100}}>
            <Button
              size="md"
              style={{backgroundColor: '#FEB500', width: 120, height: 45}}
              onPress={sendCode}>
              <Text
                style={{
                  fontFamily: 'Poppins',
                  color: '#000',
                  fontSize: responsiveScreenFontSize(2),
                }}>
                Send Code
              </Text>
            </Button>
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
          source={require('../../../../assets/Image/downshape.png')}
          style={{width: '33%', height: '100%'}}
        />
      </View>
    </View>
  );
};

export default Password;
