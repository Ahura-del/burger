import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {BoxShadow} from 'react-native-shadow';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';
import {library} from '@fortawesome/fontawesome-svg-core';
import {faShoppingCart} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';

library.add(faShoppingCart);

const PopularMeal = props => {
  return (
    <View
      style={{
        backgroundColor: '#FEB500',
        width: '45%',
        height: '85%',
        position: 'relative',
        borderRadius: 10,
      }}>
      <Image
        source={{uri: props.Image}}
        resizeMode="cover"
        style={{
          width: responsiveWidth(30),
          height: responsiveHeight(13),
          position: 'absolute',
          top: -40,
          right: -25,
          zIndex: 5,
        }}
      />

      <View style={{marginTop: 70, paddingLeft: 10}}>
        <TouchableOpacity onPress={props.mealDitail}>
          <Text style={{fontSize: responsiveFontSize(2), color: '#000'}}>
            {props.name}
          </Text>
          <Text
            style={{
              fontSize: responsiveFontSize(1.3),
              marginVertical: 10,
              color: '#000',
            }}>
            {props.desc}
          </Text>
          <Text style={{color: '#000', fontSize: responsiveFontSize(2.5)}}>
            ${props.price}
          </Text>
        </TouchableOpacity>
      </View>

      <BoxShadow
        setting={{
          width: 50,
          height: 50,
          color: '#FEB500',
          border: 10,
          radius: 25,
          opacity: 0.5,
          x: 1,
          y: 1,
          style: {
            marginVertical: 5,
            position: 'absolute',
            bottom: -15,
            right: -12,
          },
        }}>
        <TouchableOpacity
          onPress={props.shopMeal}
          style={{
            shadowColor: '#000',
            shadowOffset: {width: 0, height: 1},
            shadowOpacity: 0.8,
            shadowRadius: 2,
            elevation: 5,

            backgroundColor: '#000',

            width: 50,
            height: 50,
            borderRadius: 50,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <FontAwesomeIcon icon={faShoppingCart} color="#FEB500" size={24} />
        </TouchableOpacity>
      </BoxShadow>
    </View>
  );
};

export default PopularMeal;
