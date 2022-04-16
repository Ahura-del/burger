import React from 'react';
import {Button, Card} from 'native-base';
import {View, Text, StyleSheet, Image} from 'react-native';
import {
  responsiveScreenFontSize,
  responsiveScreenWidth,
} from 'react-native-responsive-dimensions';

const WelcomePages = ({
  image,
  header,
  title1,
  title2,
  setDelivery,
  setSingin,
}) => {
  return (
    <View style={style.container}>
      <View style={style.image}>
        <Image
          source={image}
          resizeMode="cover"
          style={{width: '100%', height: '100%'}}
        />
      </View>
      <View style={{height: '100%', flex: 1}}>
        <View style={{backgroundColor: '#000', width: '100%', height: '100%'}}>
          <Card style={{width: '100%'}}>
            <Text
              style={{
                color: '#fff',
                fontFamily: 'Poppins',
                marginVertical: 20,
                fontSize: responsiveScreenFontSize(3),
                textAlign: 'center',
              }}>
              {header}
            </Text>
            <Text
              style={{
                color: '#fff',
                fontFamily: 'Poppins',
                fontSize: responsiveScreenFontSize(1.8),
                textAlign: 'center',
              }}>
              {title1}
            </Text>
            <Text
              style={{
                color: '#fff',
                fontFamily: 'Poppins',
                fontSize: responsiveScreenFontSize(1.5),
                textAlign: 'center',
              }}>
              {' '}
              {title2}
            </Text>
            <Button
              
              size="lg"
              style={{marginVertical: 20, backgroundColor: '#FEB500'}}
              onPress={setDelivery}>
              <Text style={{color: '#000', fontFamily: 'Poppins'}}>
                Set Delivery Location
              </Text>
            </Button>
            <View>
              <Text
                style={{
                  color: '#fff',
                  fontFamily: 'Poppins',
                  textAlign: 'center',
                }}>
                Have an Account ?
                <Text style={{color: '#FEB500'}} onPress={setSingin}>
                  {' '}
                  LOGIN
                </Text>
              </Text>
            </View>
          </Card>
        </View>
      </View>
    </View>
  );
};
export default WelcomePages;

const style = StyleSheet.create({
  container: {
    width: responsiveScreenWidth(100),
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'column',
  },
  image: {
    flex: 2,
  },
  content: {
    width: '100%',
    flex: 1,
  },
});
