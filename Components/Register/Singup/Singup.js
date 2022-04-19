import axios from 'axios';
import {Button, Toast} from 'native-base';
import React, {useState } from 'react';
import {View, Text, Image, TextInput, TouchableOpacity } from 'react-native';
import {
    responsiveScreenFontSize,

  } from 'react-native-responsive-dimensions';
const SingUp = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  
  


 const singUpBtn = () => {


    
    if (email == '' || name == '' || password == '') {
      Toast.show({
        title: 'Please Fill All Fields',
        bg:"red.600",
        placement:'top',
        duration: 2000,
        variant:'solid'
        
      });
      return;
    }
    if (password.length < 6) {
      Toast.show({
        title: 'Please Enter Password With 6 Character',
        bg:"red.600",
          placement:'top',
        duration: 2000,
        variant:'solid'
      });
      return;
    }
   
      // const data = {
      //   name,
      //   email,
      //   password
      // }
  
      axios.post('http://192.168.1.102:3000/auth/singup' , {
        name,
        email,
        password
      })
      .then(res=>{
        if(res.status === 200){
          navigation.navigate('Verification',{code:res.data.code})
          setEmail('')
          setName('')
          setPassword('')
        }
      })
      .catch(err=>{
        Toast.show({
          title: err.response.data,
          bg:"red.600",
          placement:'top',
          duration: 3000,
          variant:'solid',
        });
      })
      // console.log(data)
      // const res = await axios.post('http://localhost:3000/auth/singup' , data ,{headers:{
      //   'Content-Type':"application/json",
      //   "Accept":"application/json"
      // }})
      // console.log(res)
      // if(res.status === 200){
      //   console.log(res , 'try')
      // }
   
    
  }
       
    //   const res = await auth()
    //   .createUserWithEmailAndPassword(email1, password )
    //   .then(async(response)=>{
    //     if(response.additionalUserInfo.isNewUser){
          
    //        navigation.navigate('phoneNum',{email , name});
    //     }


    //   })
    //   .catch(error => {
    //     if (error.code === 'auth/email-already-in-use') {
         
    //       Toast.show({text:'That email address is already in use!' , buttonText: 'Ok',
    //       type: 'danger',
    //       duration: 3000,})
    //     }
    
    //     if (error.code === 'auth/invalid-email') {
         
    //       Toast.show({text:'That email address is invalid!' , buttonText: 'Ok',
    //       type: 'danger',
    //       duration: 3000,})
    //     }
    
        
    //   });
      
    
  

 


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


            <Text
              style={{color: '#FEB500', fontFamily: 'Poppins', fontSize:responsiveScreenFontSize(2.5)}}>
              Let's Create
            </Text>
            <Text style={{color: '#fff', fontFamily: 'Poppins', fontSize: responsiveScreenFontSize(2)}}>
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
            <Text style={{color: '#FEB500', fontFamily: 'Poppins',fontSize: responsiveScreenFontSize(1.8)}}>
              Enter Email
            </Text>
            <TextInput
              keyboardType="email-address"
              placeholder="hello@example.com"
              style={{color: '#fff', fontFamily: 'Poppins' , fontSize: responsiveScreenFontSize(1.7)}}
              placeholderTextColor="#ccc"
              autoFocus={true}
              value={email}
              onChangeText={e => {
                setEmail(e);
              }}
            />

            <Text style={{color: '#FEB500', fontFamily: 'Poppins',fontSize: responsiveScreenFontSize(1.8)}}>
              Full Name
            </Text>
            <TextInput
              placeholder="Micra Solution"
              style={{color: '#fff', fontFamily: 'Poppins' , fontSize: responsiveScreenFontSize(1.7)}}
              placeholderTextColor="#ccc"
              value={name}
              onChangeText={e => {
                setName(e);
              }}
            />

            <Text style={{color: '#FEB500', fontFamily: 'Poppins' , fontSize: responsiveScreenFontSize(1.8)}}>
              Enter Password
            </Text>
            <TextInput
              placeholder="********"
              secureTextEntry={true}
              style={{color: '#fff', fontFamily: 'Poppins' , fontSize: responsiveScreenFontSize(1.7)}}
              placeholderTextColor="#ccc"
              onChangeText={e => {
                setPassword(e);
              }}
            />
          </View>

          <View style={{alignItems: 'center'}}>
            <Button size="lg" style={{backgroundColor:'#FEB500'}} onPress={singUpBtn}>
              <Text style={{fontFamily: 'Poppins',fontSize: responsiveScreenFontSize(2),color:"#000" , fontWeight:'500'}}>Sing Up</Text>
            </Button>
          </View>

          <View style={{marginTop:10}}>
          <TouchableOpacity onPress={()=>{navigation.navigate("Login")}}>
          <Text style={{color:"#fff", fontFamily: 'Poppins', textAlign:"center" , fontSize: responsiveScreenFontSize(2)}}>Have Account?</Text>
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
    // </Root>
  );
};

export default SingUp;
