import axios from 'axios';
import {Button, Toast} from 'native-base';
import React, {useEffect, useState} from 'react';
import {View, Text, TextInput} from 'react-native';
import {
  responsiveScreenFontSize,
  responsiveScreenWidth,
} from 'react-native-responsive-dimensions';

const NewLocation = ({navigation, route}) => {
  const [city, setCity] = useState('');
  const [address, setAddress] = useState('');
  const [appartment, setAppartment] = useState('');
  const [floor, setFloor] = useState('');


  const locationBtn = () => {
    if (city === '' || address === '' || appartment === '' || floor === '') {
      Toast.show({
        title: 'Please Set Location',
        bg: 'red.600',
        placement: 'bottom',
        duration: 2000,
        variant: 'solid',
      });
      return;
    } else {
      const data = {
        city: city,
        address: address,
        appartment: appartment,
        floor: floor,
      };
      axios
        .put(
          `http://192.168.1.102:3000/auth/location/${route.params.userId}`,
          {location:JSON.stringify(data)}
        )
        .then(res => {
          if (res.status === 200) {
            navigation.navigate('Location', {city, address, appartment, floor});
          } else {
            Toast.show({
              title: 'Please check your connection',
              bg: 'red.600',
              placement: 'bottom',
              duration: 2000,
              variant: 'solid',
            });
            return;
          }
        })
        .catch(err => {
          console.log(err);
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
          <Text></Text>
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
              onChangeText={e => setFloor(e)}
            />
          </View>
        </View>
        <View style={{width: '70%', marginRight: 'auto', marginLeft: 'auto'}}>
          <Button
            size="md"
            style={{backgroundColor: '#FEB500'}}
            onPress={locationBtn}>
            <Text
              style={{
                fontFamily: 'Poppins',
                color: '#000',
                fontSize: responsiveScreenFontSize(1.7),
              }}>
              Set location
            </Text>
          </Button>
        </View>
        <View
          style={{
            width: responsiveScreenWidth(30),
            marginTop: 70,
            marginRight: 'auto',
            marginLeft: 'auto',
          }}>
          <Button
            size="md"
            style={{backgroundColor: '#FEB500'}}
            onPress={() => {
              navigation.navigate('Location');
            }}>
            <Text
              style={{
                fontFamily: 'Poppins',
                color: '#000',
                fontSize: responsiveScreenFontSize(1.7),
              }}>
              Back
            </Text>
          </Button>
        </View>
      </View>
    </View>
  );
};

export default NewLocation;
