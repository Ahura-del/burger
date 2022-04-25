import {Button, Toast} from 'native-base';
import React, {useState} from 'react';
import {View, Text, TextInput} from 'react-native';
import {responsiveFontSize} from 'react-native-responsive-dimensions';
import {useNavigation} from '@react-navigation/native';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const ChangePass = () => {
  const navigation = useNavigation();
  const [currentPass, setCurrentPass] = useState('');
  const [newPass, setNewPass] = useState('');
  const [confirm, setConfirm] = useState('');

  const changePass = async () => {
    const userId = await AsyncStorage.getItem('userId');
    const token = await AsyncStorage.getItem('token');

    if (currentPass == '' || newPass == '' || confirm == '') {
      Toast.show({
        title: 'Please Fill All Fields',
        bg: 'red.600',
        placement: 'bottom',
        duration: 3000,
        variant: 'solid',
      });
      return;
    } else if (newPass !== confirm) {
      Toast.show({
        title: 'The new password does not match with confirm password',
        bg: 'red.600',
        placement: 'bottom',
        duration: 3000,
        variant: 'solid',
      });
      return;
    } else {
      axios
        .put(
          `${window.api}/auth/newPass/${userId}`,
          {oldPass: currentPass, newPass},
          {headers: {Authorization: 'Bearer ' + token}},
        )
        .then(res => {
          if (res.status === 200) {
            setCurrentPass('')
            setNewPass('')
            setConfirm('')
            Toast.show({
              title: res.data,
              bg: 'green.600',
              placement: 'bottom',
              duration: 2000,
              variant: 'solid',
            });

            setTimeout(() => {
              navigation.goBack();
            }, 2000);
          }
        })
        .catch(err => {
          Toast.show({
            title: err.response.data,
            bg: 'red.600',
            placement: 'bottom',
            duration: 3000,
            variant: 'solid',
          });
        });
    }
  };

  return (
    <View style={{backgroundColor: '#000', height: '100%'}}>
      <View
        style={{
          width: '90%',
          flexDirection: 'column',
          marginLeft: 'auto',
          marginRight: 'auto',
        }}>
        <View style={{marginVertical: 40}}>
          <Text style={{fontFamily: 'Poppins', color: '#FEB500', fontSize: 24}}>
            Change Password
          </Text>
        </View>
        <View style={{marginBottom: 50}}>
          <View style={{marginBottom: 15}}>
            <TextInput
              onChangeText={e => setCurrentPass(e)}
              secureTextEntry={true}
              placeholder="Old Password"
              placeholderTextColor="#bbb"
              style={{
                fontFamily: 'Poppins',
                width: '100%',
                height: 50,
                padding: 10,
                borderRadius: 10,
                backgroundColor: '#fff',
              }}
            />
          </View>
          <View style={{marginBottom: 15}}>
            <TextInput
              onChangeText={e => setNewPass(e)}
              secureTextEntry={true}
              placeholder="New Password"
              placeholderTextColor="#bbb"
              style={{
                fontFamily: 'Poppins',
                width: '100%',
                height: 50,
                padding: 10,
                borderRadius: 10,
                backgroundColor: '#fff',
              }}
            />
          </View>
          <View style={{marginBottom: 15}}>
            <TextInput
              onChangeText={e => setConfirm(e)}
              secureTextEntry={true}
              placeholder="Confirm Password"
              placeholderTextColor="#bbb"
              style={{
                fontFamily: 'Poppins',
                width: '100%',
                height: 50,
                padding: 10,
                borderRadius: 10,
                backgroundColor: '#fff',
              }}
            />
          </View>
        </View>
        <View style={{width: '70%', marginRight: 'auto', marginLeft: 'auto'}}>
          <Button
            size="lg"
            style={{backgroundColor: '#FEB500'}}
            onPress={changePass}>
            <Text
              style={{
                color: '#222',
                fontFamily: 'Poppins',
                textAlign: 'center',
                fontSize: responsiveFontSize(1.8),
              }}>
              Update Password
            </Text>
          </Button>
        </View>
      </View>
      <View style={{marginTop: 40, justifyContent: 'center'}}>
        <Text
          style={{fontFamily: 'Poppins', color: '#FEB500', textAlign: 'center'}}
          onPress={() => {
            navigation.goBack();
          }}>
          Back
        </Text>
      </View>
    </View>
  );
};

export default ChangePass;
