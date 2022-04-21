import React ,{ useEffect, useState } from 'react';
import { ScrollView} from 'react-native';
// import NetInfo from "@react-native-community/netinfo";

import WelcomePages from './WelcomePages';
// import Connection from '../Connection/Connection';
// import { Fragment } from 'react';

// {navigation}
const Welcome = ({navigation}) => {

  
 
  const setDelivery = ()=>{
      // console.log(net)
      navigation.navigate('Singup')
    // if(net){

    // }else{
    //   navigation.navigate('connection')
    // }
  }
  const setSingin=()=>{
    navigation.navigate('Login')
    
    // console.log(net)
    // if(net){

    // }else{
    //   navigation.navigate('connection')
    // }
  }
  return (
    <ScrollView horizontal  showsHorizontalScrollIndicator={false} pagingEnabled>
      <WelcomePages
        image={require('../../assets/Image/welcome1.png')}
        header="Delivery Address"
        title1="Start your order by typing "
        title2="your address"
        setDelivery= {setDelivery}
        setSingin = {setSingin}
      />
      <WelcomePages
        image={require('../../assets/Image/welcome2.png')}
        header="Customised Burger"
        title1="Customised your Pizza through the"
        title2="Burger Maker tool"
        setDelivery= {setDelivery}
        setSingin = {setSingin}
      />
      <WelcomePages
        image={require('../../assets/Image/welcome3.png')}
        header="Your Burger is Coming?"
        title1="Submit your order and just wait"
        title2="for your Burger?"
        setDelivery= {setDelivery}
        setSingin = {setSingin}
      />
    </ScrollView>
  );
};

export default Welcome;
