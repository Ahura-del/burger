import React from 'react';
import {ScrollView} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import WelcomePages from './WelcomePages';

const Welcome = () => {
  const navigation = useNavigation();

  const setDelivery = () => {
    navigation.navigate('Singup');
  };
  const setSingin = () => {
    navigation.navigate('Login');
  };
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false} pagingEnabled>
        <WelcomePages
        image={require('../../assets/Image/welcome1.png')}
        header="Delivery Address"
        title1="Start your order by typing "
        title2="your address"
        setDelivery={setDelivery}
        setSingin={setSingin}
      />
      <WelcomePages
        image={require('../../assets/Image/welcome2.png')}
        header="Customised Burger"
        title1="Customised your Pizza through the"
        title2="Burger Maker tool"
        setDelivery={setDelivery}
        setSingin={setSingin}
      />
      <WelcomePages
        image={require('../../assets/Image/welcome3.png')}
        header="Your Burger is Coming?"
        title1="Submit your order and just wait"
        title2="for your Burger?"
        setDelivery={setDelivery}
        setSingin={setSingin}
      />
    </ScrollView>
  );
};

export default Welcome;
