import React, {useState} from 'react';
import {Button, Toast} from 'native-base';
import {View, TextInput, Image, Text, TouchableOpacity} from 'react-native';
import {launchImageLibrary} from 'react-native-image-picker';
import axios from 'axios';
import {useDispatch} from 'react-redux';
import {responsiveFontSize} from 'react-native-responsive-dimensions';
import {library} from '@fortawesome/fontawesome-svg-core';
import {faBell, faPencilAlt} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
library.add(faBell, faPencilAlt);

import {useNavigation, useRoute} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {updateUser} from '../../../Redux';

const UpdateProfile = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const [name, setName] = useState(route.params.user.name);

  const dispatch = useDispatch();

  const [photo, setPhoto] = useState('');

  const imageChoose = () => {
    const options = {
      mediaType: 'photo',
      maxWidth: 150,
      maxHeight: 150,
    };
    launchImageLibrary(options, response => {
      if (response.assets) {
        setPhoto(response.assets[0].uri);
      }
    });
  };

  const update = async () => {
    const userId = await AsyncStorage.getItem('userId');
    const token = await AsyncStorage.getItem('token');
    axios
      .put(
        `${window.api}/auth/${userId}`,
        {
          name,
          picture: route.params.user.picture
            ? route.params.user.picture
            : photo,
        },
        {headers: {Authorization: 'Bearer ' + token}},
      )
      .then(res => {
        if (res.status === 200) {
          dispatch(updateUser());
          navigation.goBack();
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
    <View style={{flex: 1, backgroundColor: '#000'}}>
      <View
        style={{
          width: '90%',
          marginLeft: 'auto',
          marginTop: 30,
          marginRight: 'auto',
          alignItems: 'center',
        }}>
        <View style={{width: 150, height: 150, borderRadius: 100}}>
          {photo.length === 0 ? (
            <View>
              <Image
                source={
                  route.params.user.picture
                    ? {uri: route.params.user.picture}
                    : require('../../../assets/Image/profile.png')
                }
                resizeMode="cover"
                style={{width: '100%', height: '100%', borderRadius: 100}}
              />
              <TouchableOpacity
                onPress={imageChoose}
                style={{
                  padding: 10,
                  borderRadius: 100,
                  backgroundColor: '#FFF',
                  position: 'absolute',
                  bottom: 15,
                  right: 15,
                }}>
                <FontAwesomeIcon icon={faPencilAlt} color="#555" size={16} />
              </TouchableOpacity>
            </View>
          ) : (
            <View>
              <Image
                source={{uri: photo}}
                resizeMode="cover"
                style={{width: '100%', height: '100%', borderRadius: 100}}
              />
              <TouchableOpacity
                onPress={imageChoose}
                style={{
                  padding: 10,
                  borderRadius: 100,
                  backgroundColor: '#FFF',
                  position: 'absolute',
                  bottom: 15,
                  right: 15,
                }}>
                <FontAwesomeIcon icon={faPencilAlt} color="#555" size={16} />
              </TouchableOpacity>
            </View>
          )}
        </View>

        <View style={{width: '100%', marginTop: 40}}>
          <View style={{marginBottom: 15}}>
            <TextInput
              placeholder="Full Name"
              placeholderTextColor="#bbb"
              style={{
                fontFamily: 'Poppins',
                width: '100%',
                height: 50,
                padding: 10,
                borderRadius: 10,
                backgroundColor: '#fff',
                textAlign: 'center',
              }}
              value={name}
              onChangeText={e => setName(e)}
            />
          </View>
          <View style={{marginBottom: 15}}>
            <TextInput
              editable={false}
              placeholderTextColor="#000"
              style={{
                fontFamily: 'Poppins',
                width: '100%',
                height: 50,
                padding: 10,
                borderRadius: 10,
                backgroundColor: '#fff',
                textAlign: 'center',
              }}
              value={route.params.user.email}
            />
          </View>
        </View>

        <View style={{width: '60%', marginTop: 50}}>
          <Button
            size="lg"
            style={{backgroundColor: '#FEB500'}}
            onPress={update}>
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
        <View style={{marginTop: 30}}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Text style={{color: '#FEB500'}}>Back</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default UpdateProfile;
