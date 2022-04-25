import {Button, Toast} from 'native-base';
import React, {useState} from 'react';
import {View, Text, TextInput} from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/native';
import {responsiveFontSize} from 'react-native-responsive-dimensions';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import {useDispatch} from 'react-redux';
import {updateUser} from '../../../Redux';
const Shipping = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const dispatch = useDispatch();
  const location = JSON.parse(route.params.user.location);
  const [city, setCity] = useState(location.city);
  const [address, setAddress] = useState(location.address);
  const [appartment, setAppartment] = useState(location.appartment);
  const [floor, setFloor] = useState(location.floor);

  const changeLocation = async () => {
    const userId = await AsyncStorage.getItem('userId');
    const token = await AsyncStorage.getItem('token');

    const data = {
      city: city ? city : location.city,
      address: address ? address : location.address,
      appartment: appartment ? appartment : location.appartment,
      floor: floor ? floor : location.floor,
    };

    axios
      .put(
        `${window.api}/auth/${userId}`,
        {location: JSON.stringify(data)},
        {headers: {Authorization: 'Bearer ' + token}},
      )
      .then(res => {
        if (res.status === 200) {
          Toast.show({
            title: res.data.msg,
            bg: 'green.600',
            placement: 'bottom',
            duration: 3000,
            variant: 'solid',
          });
          setTimeout(() => {
            dispatch(updateUser());
            navigation.goBack();
          }, 3000);
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
        <View
          style={{
            marginVertical: 40,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <Text style={{fontFamily: 'Poppins', color: '#FEB500', fontSize: 24}}>
            Location
          </Text>
        </View>
        <View style={{marginBottom: 50}}>
          <View style={{marginBottom: 15}}>
            <TextInput
              placeholder="City"
              placeholderTextColor="#bbb"
              style={{
                fontFamily: 'Poppins',
                width: '100%',
                height: 50,
                padding: 10,
                borderRadius: 10,
                backgroundColor: '#fff',
              }}
              value={city}
              onChangeText={e => setCity(e)}
            />
          </View>
          <View style={{marginBottom: 15}}>
            <TextInput
              placeholder="Address"
              placeholderTextColor="#bbb"
              style={{
                fontFamily: 'Poppins',
                width: '100%',
                height: 50,
                padding: 10,
                borderRadius: 10,
                backgroundColor: '#fff',
              }}
              value={address}
              onChangeText={e => setAddress(e)}
            />
          </View>
          <View style={{marginBottom: 15}}>
            <TextInput
              placeholder="Appartment"
              placeholderTextColor="#bbb"
              style={{
                fontFamily: 'Poppins',
                width: '100%',
                height: 50,
                padding: 10,
                borderRadius: 10,
                backgroundColor: '#fff',
              }}
              value={appartment}
              onChangeText={e => setAppartment(e)}
            />
          </View>
          <View style={{marginBottom: 15}}>
            <TextInput
              placeholder="Floor"
              placeholderTextColor="#bbb"
              style={{
                fontFamily: 'Poppins',
                width: '100%',
                height: 50,
                padding: 10,
                borderRadius: 10,
                backgroundColor: '#fff',
              }}
              value={floor}
              onChangeText={e => setFloor(e)}
            />
          </View>
        </View>
        <View style={{width: '70%', marginRight: 'auto', marginLeft: 'auto'}}>
          <Button
            size="lg"
            style={{backgroundColor: '#FEB500'}}
            onPress={changeLocation}>
            <Text
              style={{
                color: '#222',
                fontFamily: 'Poppins',
                textAlign: 'center',
                fontSize: responsiveFontSize(1.8),
              }}>
              Update Profile
            </Text>
          </Button>
        </View>
        <View style={{marginTop: 50, justifyContent: 'center'}}>
          <Text
            style={{
              fontFamily: 'Poppins',
              color: '#FEB500',
              textAlign: 'center',
            }}
            onPress={() => {
              navigation.goBack();
            }}>
            Back
          </Text>
        </View>
      </View>
    </View>
  );
};

export default Shipping;
