import {Button, Toast} from 'native-base';
import React, {useState} from 'react';
import {
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  Switch,
  BackHandler,
  Modal,
  TextInput,
} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {Badge} from 'react-native-elements';
import {useNavigation} from '@react-navigation/native';

import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

import {library} from '@fortawesome/fontawesome-svg-core';
import {
  faUser,
  faShoppingCart,
  faThLarge,
  faHome,
  faHeart,
  faBell,
  faPencilAlt,
} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import { delUSer } from '../../Redux';
library.add(
  faUser,
  faShoppingCart,
  faThLarge,
  faHome,
  faHeart,
  faBell,
  faPencilAlt,
);

const Profile = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const getUser = useSelector(state => state.userState.user);
  const stateCart = useSelector(state => state.cartState.cart);
  const [modalVisible, setModalVisible] = useState(false);
  const [password, setPassword] = useState('');
  const [toggle1, setToggle1] = useState(false);
  const [toggle2, setToggle2] = useState(false);

  //unavalabl services
  const unavalableService = () => {
    Toast.show({
      title: 'Service not available',
      bg: 'yellow.500',
      placement: 'bottom',
      duration: 3000,
      variant: 'solid',
    });
  };

  // Log out
  const logOut = async () => {
    await AsyncStorage.removeItem('userId');
    await AsyncStorage.removeItem('token');
    dispatch(delUSer())
    BackHandler.exitApp();
  };

  // remove account
  const showModal = () => {
    setModalVisible(true);
  };
  const reauthenticat = currentPass => {
    const user = auth().currentUser;
    const cred = auth.EmailAuthProvider.credential(user.email, currentPass);
    return user.reauthenticateWithCredential(cred);
  };

  const removeAccount = async () => {
    const userId = await AsyncStorage.getItem('userId');
    const token = await AsyncStorage.getItem('token');

    if (password === '') {
      Toast.show({
        title: 'Please enter your password!',
        bg: 'red.600',
        placement: 'bottom',
        duration: 3000,
        variant: 'solid',
      });
      return;
    } else {
      axios
        .delete(`${window.api}/auth/${userId}`, {
          headers: {Authorization: 'Bearer ' + token},
          data:{
            delPass:password
          }
        })
        .then(res => {
          if (res.status === 200) {
            Toast.show({
              title: 'The account deleted for ever',
              bg: 'green.500',
              placement: 'bottom',
              duration: 3000,
              variant: 'solid',
            });
            setTimeout(() => {
              logOut();
            }, 3000);
          }
        })
        .catch(err => {
          Toast.show({
            title: err.response.data,
            bg: 'red.500',
            placement: 'bottom',
            duration: 3000,
            variant: 'solid',
          });
        });
    }
  };

  return (
    <View style={{backgroundColor: '#000', height: '100%'}}>
      <View style={{height: 400, marginTop: -80}}>
        <Image
          source={require('../../assets/Image/jgy2.png')}
          resizeMode="cover"
          style={{width: '100%', height: '100%', overlayColor: '#000'}}
          blurRadius={50}
        />
      </View>

      <View
        style={{
          zIndex: 10,
          height: '100%',
          width: '100%',
          position: 'absolute',
        }}>
        <View
          style={{
            flex: 1,
            width: '90%',
            marginRight: 'auto',
            marginLeft: 'auto',
          }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginTop: 30,
            }}>
            <Text style={{fontFamily: 'Poppins', fontSize: 22, color: '#000'}}>
              Profile
            </Text>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-around'}}>
              <View>
                <TouchableOpacity
                  onPress={() => navigation.navigate('Notification')}>
                  <FontAwesomeIcon icon={faBell} color="#333" size={22} />
                </TouchableOpacity>
              </View>
            </View>
          </View>

          <View
            style={{
              flexDirection: 'column',
              marginTop: 50,
              marginBottom: 30,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <View style={{width: 150, height: 150, borderRadius: 100}}>
              <View>
                <Image
                  source={
                    getUser?.picture
                      ? {uri: getUser.picture}
                      : require('../../assets/Image/profile.png')
                  }
                  resizeMode="cover"
                  style={{width: '100%', height: '100%', borderRadius: 100}}
                />
                {/* <TouchableOpacity
                  onPress={() =>
                    navigation.navigate('UpdateProfile', {
                      user: getUser,
                    })
                  }
                  style={{
                    fontSize: 16,
                    padding: 10,
                    borderRadius: 100,
                    backgroundColor: '#FFF',
                    position: 'absolute',
                    bottom: 15,
                    right: 15,
                  }}>
                  <FontAwesomeIcon icon={faPencilAlt} color="#555" />
                </TouchableOpacity> */}
              </View>
            </View>
            <View
              style={{
                flexDirection: 'column',
                width: '100%',
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: 15,
              }}>
              <Text
                style={{
                  fontFamily: 'Poppins',
                  color: '#FEB500',
                  marginBottom: 10,
                }}>
                {/* {getUser.name} */}
                Ahura 
              </Text>

              <Text style={{fontFamily: 'Poppins', color: '#fff'}}>
                {/* {getUser.email} */}
                ahuradelnava@gmail.com
              </Text>
            </View>
          </View>

          <ScrollView showsVerticalScrollIndicator={false}>
            <View>
              <Text
                style={{
                  fontFamily: 'Poppins',
                  color: '#FEB500',
                  marginBottom: 15,
                  marginLeft: 10,
                  fontSize: 16,
                }}>
                Account
              </Text>

              <View
                style={{
                  backgroundColor: '#fff',
                  borderRadius: 10,
                  marginBottom: 20,
                }}>
                <TouchableOpacity
                  style={{padding: 15}}
                  // onPress={() => {
                  //   navigation.navigate('ProfileLocation', {user: getUser});
                  // }}
                >
                  <Text style={{fontFamily: 'Poppins'}}>Location</Text>
                </TouchableOpacity>
                <View
                  style={{
                    width: '100%',
                    height: 1,
                    backgroundColor: '#e1e1e1',
                  }}></View>

                <TouchableOpacity
                  style={{padding: 15}}
                  // onPress={() => {
                  //   navigation.navigate('ChangePass');
                  // }}
                >
                  <Text style={{fontFamily: 'Poppins'}}>Change Password</Text>
                </TouchableOpacity>
                <View
                  style={{
                    width: '100%',
                    height: 1,
                    backgroundColor: '#e1e1e1',
                  }}></View>
                <TouchableOpacity
                  style={{padding: 15}}
                  onPress={() => {
                    navigation.navigate('Payment');
                  }}
                >
                  <Text style={{fontFamily: 'Poppins'}}>Payment</Text>
                </TouchableOpacity>
                <View
                  style={{
                    width: '100%',
                    height: 1,
                    backgroundColor: '#e1e1e1',
                  }}></View>

                <TouchableOpacity style={{padding: 15}} onPress={logOut}>
                  <Text style={{fontFamily: 'Poppins'}}>Logout</Text>
                </TouchableOpacity>
                <View
                  style={{
                    width: '100%',
                    height: 1,
                    backgroundColor: '#e1e1e1',
                  }}></View>

                <TouchableOpacity style={{padding: 15}} onPress={showModal}>
                  <Text style={{fontFamily: 'Poppins'}}>Remove Account</Text>
                </TouchableOpacity>
              </View>

              <Modal
                animationType="fade"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                  setModalVisible(false);
                }}>
                <View
                  style={{
                    width: '90%',
                    marginLeft: 'auto',
                    marginRight: 'auto',
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <View
                    style={{
                      width: '80%',
                      borderRadius: 10,
                      backgroundColor: '#000',
                      padding: 20,
                    }}>
                    <View>
                      <Text
                        style={{
                          color: '#FFF',
                          textAlign: 'center',
                          paddingBottom: 20,
                          fontFamily: 'Poppins',
                        }}>
                        please enter your password for remove your account{' '}
                      </Text>
                    </View>
                    <View style={{marginBottom: 20}}>
                      <TextInput
                        placeholder="Type your password!"
                        style={{
                          borderRadius: 10,
                          backgroundColor: '#fff',
                          textAlign: 'center',
                          fontFamily: 'Poppins',
                        }}
                        secureTextEntry
                        onChangeText={e => setPassword(e)}
                      />
                    </View>
                    <View>
                      <Button
                        size="lg"
                        style={{backgroundColor: 'red'}}
                        onPress={logOut}>
                        <Text style={{color: '#fff', fontFamily: 'Poppins'}}>
                          Remove
                        </Text>
                      </Button>
                    </View>
                  </View>
                </View>
              </Modal>
            </View>

            <View>
              <Text
                style={{
                  color: '#FEB500',
                  marginBottom: 15,
                  marginLeft: 10,
                  fontSize: 16,
                  fontFamily: 'Poppins',
                }}>
                Notification
              </Text>

              <View
                style={{
                  backgroundColor: '#fff',
                  borderRadius: 10,
                  marginBottom: 20,
                }}>
                <View
                  style={{
                    padding: 15,
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignContent: 'center',
                  }}>
                  <Text style={{fontFamily: 'Poppins'}}>App Notification</Text>
                  <View>
                    <Switch
                      trackColor={{false: 'gray', true: '#FEB500'}}
                      thumbColor="#FEB500"
                      ios_backgroundColor="gray"
                      onValueChange={value => setToggle1(value)}
                      value={toggle1}
                    />
                  </View>
                </View>
                <View
                  style={{
                    width: '100%',
                    height: 1,
                    backgroundColor: '#e1e1e1',
                  }}></View>
                <View
                  style={{
                    padding: 15,
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignContent: 'center',
                  }}>
                  <Text style={{fontFamily: 'Poppins'}}>Location Tracking</Text>
                  <View>
                    <Switch
                      trackColor={{false: 'gray', true: '#FEB500'}}
                      thumbColor="#FEB500"
                      ios_backgroundColor="gray"
                      onValueChange={value => setToggle2(value)}
                      value={toggle2}
                    />
                  </View>
                </View>
              </View>
            </View>

            <View style={{marginBottom: 20}}>
              <Text
                style={{
                  color: '#FEB500',
                  marginBottom: 15,
                  marginLeft: 10,
                  fontSize: 16,
                  fontFamily: 'Poppins',
                }}>
                Other
              </Text>
              <View
                style={{
                  backgroundColor: '#fff',
                  borderRadius: 10,
                  marginBottom: 20,
                }}>
                <TouchableOpacity
                  style={{padding: 15}}
                  onPress={unavalableService}>
                  <Text style={{fontFamily: 'Poppins'}}>Language</Text>
                </TouchableOpacity>
                <View
                  style={{
                    width: '100%',
                    height: 1,
                    backgroundColor: '#e1e1e1',
                  }}></View>

                <TouchableOpacity
                  style={{padding: 15}}
                  onPress={unavalableService}>
                  <Text style={{fontFamily: 'Poppins'}}>Currency</Text>
                </TouchableOpacity>
              </View>
            </View>
          </ScrollView>
        </View>

        <View style={{backgroundColor: '#FEB500', width: '100%'}}>
          <View
            style={{
              width: '100%',
              justifyContent: 'space-around',
              flexDirection: 'row',
              paddingVertical: 5,
              alignItems: 'center',
            }}>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Home');
              }}>
              <FontAwesomeIcon icon={faHome} color="#000" size={26} />
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Category');
              }}>
              <FontAwesomeIcon icon={faThLarge} color="black" size={26} />
            </TouchableOpacity>

            {stateCart.length !== 0 ? (
              <TouchableOpacity onPress={() => navigation.navigate('Cart')}>
                <Badge
                  value={stateCart.length}
                  status="error"
                  containerStyle={{position: 'absolute', top: -10, left: 25}}
                />
                <FontAwesomeIcon icon={faShoppingCart} color="#000" size={26} />
              </TouchableOpacity>
            ) : (
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('Cart');
                }}>
                <FontAwesomeIcon icon={faShoppingCart} color="#000" size={26} />
              </TouchableOpacity>
            )}
            <TouchableOpacity
              style={{
                padding: 10,
                fontSize: 20,
                borderRadius: 10,
                backgroundColor: '#000',
              }}
              onPress={() => {
                navigation.navigate('Profile');
              }}>
              <FontAwesomeIcon icon={faUser} color="#FEB500" size={26} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Profile;
