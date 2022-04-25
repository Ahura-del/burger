import {Button, Toast} from 'native-base';
import React from 'react';
import {View, Text, TextInput, Image, ScrollView} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {responsiveFontSize} from 'react-native-responsive-dimensions';

const Payment = () => {
  const navigation = useNavigation();

  const setCart = () => {
    Toast.show({
      title: 'Your card was saved',
      bg: 'green.600',
      placement: 'bottom',
      duration: 3000,
      variant: 'solid',
    });
    setTimeout(() => {
      navigation.goBack();
    }, 3000);
  };

  return (
    <ScrollView style={{backgroundColor: '#000'}}>
      <View
        style={{
          width: '90%',
          marginLeft: 'auto',
          marginRight: 'auto',

          height: '100%',
        }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginVertical: 20,
          }}>
          <Text style={{color: '#FEB500', fontFamily: 'Poppins', fontSize: 24}}>
            Payment
          </Text>
        </View>

        <View style={{width: '100%', height: 200, marginBottom: 20}}>
          <Image
            source={require('../../../assets/Image/cart.png')}
            resizeMode="cover"
            style={{width: '100%', height: '100%'}}
          />
        </View>

        <View style={{marginBottom: 30}}>
          <View style={{marginBottom: 15}}>
            <TextInput
              placeholder="Card Number"
              placeholderTextColor="#bbb"
              keyboardType="number-pad"
              style={{
                fontFamily: 'Poppins',
                width: '100%',
                height: 50,
                padding: 10,
                borderRadius: 8,
                backgroundColor: '#fff',
              }}
            />
          </View>
          <View style={{marginBottom: 15}}>
            <TextInput
              placeholder="Holder Name"
              placeholderTextColor="#bbb"
              keyboardType="number-pad"
              style={{
                fontFamily: 'Poppins',
                width: '100%',
                height: 50,
                padding: 10,
                borderRadius: 8,
                backgroundColor: '#fff',
              }}
            />
          </View>
          <View style={{marginBottom: 15}}>
            <TextInput
              placeholder="Month/year"
              placeholderTextColor="#bbb"
              keyboardType="number-pad"
              style={{
                fontFamily: 'Poppins',
                width: '100%',
                height: 50,
                padding: 10,
                borderRadius: 8,
                backgroundColor: '#fff',
              }}
            />
          </View>
          <View style={{marginBottom: 15}}>
            <TextInput
              placeholder="CVC"
              placeholderTextColor="#bbb"
              keyboardType="number-pad"
              style={{
                fontFamily: 'Poppins',
                width: '100%',
                height: 50,
                padding: 10,
                borderRadius: 8,
                backgroundColor: '#fff',
              }}
            />
          </View>
        </View>

        <View style={{width: '70%', marginRight: 'auto', marginLeft: 'auto'}}>
          <Button
            size="lg"
            style={{backgroundColor: '#FEB500'}}
            onPress={setCart}>
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

        <View style={{marginTop: 40}}>
          <Text
            style={{color: '#FEB500', textAlign: 'center'}}
            onPress={() => {
              navigation.goBack();
            }}>
            Back
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default Payment;
