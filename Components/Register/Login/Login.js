import {Button, Toast} from 'native-base';
import React, {useState} from 'react';
import {View, Text, Image, TextInput} from 'react-native';
import {
    responsiveScreenFontSize,

  } from 'react-native-responsive-dimensions';
// import {LoginManager, AccessToken} from 'react-native-fbsdk-next';
// import { LoginManager, AccessToken } from 'react-native-fbsdk';
// import {GoogleSignin} from '@react-native-google-signin/google-signin';
// import auth from '@react-native-firebase/auth';
// import AsyncStorage from '@react-native-community/async-storage';
// import axios from 'axios';

// GoogleSignin.configure({
//   webClientId:
//     '1094087401782-257rntom9tn79abfagg636ognss5fues.apps.googleusercontent.com',
// });

const Login = ({navigation}) => {
  const [email, setEmail] = useState('');

  const continueBtn = () => {
    if (email == '') {
      Toast.show({
        title: 'Please Enter The Email!',
        placement:'bottom',
        duration: 2000,
        variant:'solid'
      });
      return;
    } else {
        console.log(email , 'back')
    //   axios.get(`http://papaberger.ir/api/user/${email}`)
    //   .then(res=>{
    //     if(res.status === 200){
    //       navigation.navigate('pass',{email , photo: res.data.profilePicture });
    //     }
    //   })
      // 
    }
  };

//   const onGoogleButtonPress = async () => {
//     // Get the users ID token
//     const {idToken} = await GoogleSignin.signIn();

//     // Create a Google credential with the token
//     const googleCredential = auth.GoogleAuthProvider.credential(idToken);

//     // Sign-in the user with the credential
//     return auth().signInWithCredential(googleCredential);
//   };

//   const onFacebookButtonPress = async () => {
//     try {
//       // Attempt login with permissions
//     const result = await LoginManager.logInWithPermissions([
//       'public_profile',
//       'email',
//     ]);

//     if (result.isCancelled) {
//       throw 'User cancelled the login process';
//     }

//     // Once signed in, get the users AccesToken
//     const data = await AccessToken.getCurrentAccessToken();
  
//     if (!data) {
//       throw 'Something went wrong obtaining access token';
//     }

//     // Create a Firebase credential with the AccessToken
//     const facebookCredential = auth.FacebookAuthProvider.credential(
//       data.accessToken,
//     );

//     // Sign-in the user with the credential
//   return auth().signInWithCredential(facebookCredential);
   
//     } catch (error) {
//       console.log(error);
//     }
    
//   };

  return (
    // <Root>
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
            <Text style={{color: '#FEB500', fontFamily: 'Poppins',fontSize:responsiveScreenFontSize(2.5)}}>
              Sing in
            </Text>
            <Text style={{color: '#fff', fontFamily: 'Poppins',fontSize:responsiveScreenFontSize(2.3)}}>Account</Text>
            <Text style={{color: '#FEB500', fontFamily: 'Poppins',fontSize:responsiveScreenFontSize(1.9)}}>
              Don't have account?{' '}
              <Text onPress={() => {navigation.navigate("singup")}}>Sing up</Text>
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
            <Text style={{color: '#FEB500', fontFamily: 'Poppins',fontSize:responsiveScreenFontSize(1.8)}}>
              Email Address
            </Text>
            <TextInput
              placeholder="hello@example.com"
              style={{color: '#e1e1e1', fontFamily: 'Poppins',fontSize:responsiveScreenFontSize(1.7)}}
              placeholderTextColor="#fff"
              onChangeText={e => setEmail(e)}
              keyboardType="email-address"
            />
          </View>

          <View style={{alignItems: 'center'}}>

            <Button size='md' style={{backgroundColor:"#FEB500"}} onPress={continueBtn}>
              <Text style={{fontFamily: 'Poppins',color:"#000",fontSize:responsiveScreenFontSize(2)}}>Countinue</Text>
            </Button>
      
            {/* <Text
              style={{
                color: '#fff',
                paddingVertical: 15,
                fontFamily: 'Poppins',
              }}>
              or
            </Text> */}

              {/* {Platform.OS === "android" ? (<View style={{flexDirection: 'row'}}>
              <TouchableOpacity
                onPress={() => onFacebookButtonPress().then(async(res)=>{
                const data = res.user
                  navigation.navigate("phoneNum" , {name:data.displayName , email:data.email , pic:data.photoURL})
                }).catch(err=>{
                  if(err.code === "auth/-"){
                    Toast.show({text:"Please check your connection!" , type:"danger" , duration:3000})
                  }
                })}
                style={{
                  backgroundColor: '#007FFF',
                  height: 50,
                  width: 50,
                  borderRadius: 8,
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginRight: 20,
                }}>
                <Icon
                  type="FontAwesome"
                  name="facebook-f"
                  style={{color: '#fff', fontSize: 20}}
                />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => onGoogleButtonPress().then(async(res)=>{
                
                  const data = res.additionalUserInfo.profile
                  
                    navigation.navigate("phoneNum" , {name : data.name , email:data.email , pic : data.picture})
                }).catch(err=>{
                  if(err.code === "auth/-"){
                    Toast.show({text:"Please check your connection!" , type:"danger" , duration:3000})
                  }
                })}
                style={{
                  backgroundColor: '#FF0000',
                  height: 50,
                  width: 50,
                  borderRadius: 8,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Icon
                  type="FontAwesome"
                  name="google-plus"
                  style={{color: '#fff', fontSize: 20}}
                />
              </TouchableOpacity>
            </View>) : null} */}
            


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
    // </Root>
  );
};

export default Login;
