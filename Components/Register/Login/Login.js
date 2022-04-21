import {Button, Toast} from 'native-base';
import React, {useState} from 'react';
import {View, Text, Image, TextInput, TouchableOpacity} from 'react-native';
import {
    responsiveScreenFontSize,

  } from 'react-native-responsive-dimensions';
  import {useNetInfo} from '@react-native-community/netinfo'
import axios from 'axios';

// import {launchImageLibrary} from 'react-native-image-picker';
// import auth from '@react-native-firebase/auth';


// import AsyncStorage from '@react-native-community/async-storage';


const Password = ({navigation, route}) => {
  const netInfo = useNetInfo()
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

//   const priveEmail = route.params.email;


// console.log(route.params.photo);
// //   const [photo, setPhoto] = useState([]);
// //   const imageChoose = () => {
// //     const options = {
// //       noData: true,
// //     };
// //     launchImageLibrary(options, response => {
// //       if (response.uri) {
// //         setPhoto(response);
// //       }
// //     });
// //   };

  



  const singInBtn =  () => {
    // if(!netInfo.isConnected || netInfo.isConnected === null){
    //   Toast.show({
    //     title: 'Please connect to the internet',
    //     bg:"yellow.500",
    //     placement:'top',
    //     duration: 2000,
    //     variant:'solid'
        
    //   });
    //   return;
    // }

    if (password === '' || email === "") {
      Toast.show({
        title: 'Please fill all fields!',
        duration: 3000,
        bg:"red.600",
        placement:'bottom',
        variant:'solid'
      });
      return;
    } else {
      
        axios.post('http://192.168.1.102:3000/auth/singin' , {email , password})
        .then(async(res)=>{
          if(res.status === 200){
            await AsyncStorage.setItem('token' , res.data.token)
            await AsyncStorage.setItem('userId' , userId)
            navigation.navigate('Preloader')
            setEmail('')
            setName('')
            setPassword('')
          }
          if(res.status===201){
            navigation.navigate('Verification',{code:res.data.code , userId:res.data.id , email})
            setEmail('')
            setName('')
            setPassword('')
          }
        })
        .catch(err=>{
          Toast.show({
            title: err.response.data,
            duration: 3000,
            bg:"red.600",
            placement:'bottom',
            variant:'solid'
          });
        })
    //   const res = await auth()
    //     .signInWithEmailAndPassword(mail, pass)
    //     .then(response => {
    //       if (response.user.email) {
    //         const data = JSON.stringify(response.user.email);
    //         AsyncStorage.setItem('user', data);
    //         navigation.navigate('home');
    //       }
    //     })
    //     .catch(error => {
    //       if (error.code === 'auth/wrong-password') {
    //         Toast.show({
    //           text: 'The Password is Worng!',
    //           buttonText: 'Ok',
    //           type: 'danger',
    //           duration: 3000,
    //         });
    //       }
    //     });
    }
  };

  const restPass = async email => {
      console.log(email)
    // const res = await auth()
    //   .sendPasswordResetEmail(email)
    //   .then(res => {
    //     Toast.show({
    //       text: 'Please check your Email',
    //       type: 'success',
    //       buttonText: 'Ok',
    //       duration: 3000,
    //     });
    //   })
    //   .catch(err => {
    //     if (err.code === 'auth/user-not-found') {
    //       Toast.show({
    //         text: 'User not found!',
    //         type: 'danger',
    //         buttonText: 'close',
    //         duration: 3000,
    //       });
    //       return;
    //     }
    //   });
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
            <Text style={{color: '#FEB500', fontFamily: 'Poppins',fontSize:responsiveScreenFontSize(2.7)}}>
              Sing in
            </Text>
            <Text style={{color: '#fff', fontFamily: 'Poppins',fontSize:responsiveScreenFontSize(2)}}>Account</Text>
            <Text style={{color: '#FEB500', fontFamily: 'Poppins',fontSize:responsiveScreenFontSize(1.7)}}>
              Don't have account?{' '}
              <Text onPress={() => navigation.navigate("Singup")}>Sing up</Text>
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
          {/* <View
            style={{marginTop: 20, flexDirection: 'row', alignItems: 'center'}}> */}
            {/* {route.params.photo == "" ? ( */}
                {/* <View
                 
                  style={{
                    width: 100,
                    height: 100,
                    backgroundColor: '#fff',
                    borderRadius: 100,
                  }}></View> */}
              {/* ) : ( */}
                {/* <Image
                  source={{uri: route.params.photo}}
                  style={{height: 100, width: 100, borderRadius: 100}}
                />
              )} */}
            {/* <View style={{marginLeft: 20, width: '60%'}}>
              <Text style={{color: '#FEB500', fontFamily: 'Poppins',fontSize:responsiveScreenFontSize(1.7)}}>
                Email Address
              </Text>
              <Text style={{color: '#fff', fontFamily: 'Poppins'}}>
               
              </Text>
            </View>
          </View> */}

          <View style={{marginBottom: -70}}>
          <View style={{marginBottom: 20, marginTop: 20}}>
              <Text style={{color: '#FEB500',fontSize:responsiveScreenFontSize(1.7)}}>Eamil Address</Text>
              <TextInput
              placeholder="hello@example.com"
              style={{color: '#e1e1e1', fontFamily: 'Poppins',fontSize:responsiveScreenFontSize(1.7)}}
              placeholderTextColor="#ccc"
              autoFocus={true}
              onChangeText={e => setEmail(e)}
              keyboardType="email-address"
            />
            </View>
            <View style={{marginBottom: 80}}>
              <Text style={{color: '#FEB500',fontSize:responsiveScreenFontSize(1.7)}}>Enter Password</Text>
              <TextInput
                placeholder="✶✶✶✶✶✶"
                placeholderTextColor="#ccc"
                secureTextEntry={true}
                style={{color: '#fff', width: '50%'}}
                onChangeText={e => setPassword(e)}
              />
            </View>
            <View style={{alignItems: 'center'}}>
            <Button size='md' style={{backgroundColor:"#FEB500" , width: 120,
                height: 45,}}
             onPress={singInBtn}
             >
              <Text style={{fontFamily: 'Poppins',color:"#000",fontSize:responsiveScreenFontSize(2)}}>Sing in</Text>
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
                }}
                        //   onPress={() => restPass(priveEmail)}
                    >

                <Text
                  style={{color: '#fff', paddingVertical: 20,fontSize:responsiveScreenFontSize(1.7)}}
                  >
                  Rest your Password
                </Text>
                      </TouchableOpacity>

                {/* <TouchableOpacity
                    onPress={() => {
                        navigation.navigate('singin');
                      }}
                >

                <Text
                  style={{color: '#fff', marginBottom: -20,fontSize:responsiveScreenFontSize(1.7)}}
                    >
                  Sing in a different account
                </Text>
                      </TouchableOpacity> */}
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
