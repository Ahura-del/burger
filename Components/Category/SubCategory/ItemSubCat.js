import React from 'react';
import {TouchableOpacity} from 'react-native';
import {View, Text, Image} from 'react-native';
import {BoxShadow} from 'react-native-shadow';
import {library} from '@fortawesome/fontawesome-svg-core';
import {faShoppingCart} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';
library.add(faShoppingCart);
const ItemSubCategory = props => {
  return (
    <View
      style={{
        backgroundColor: '#FEB500',
        width: '44%',
        height: 170,
        position: 'relative',
        zIndex: 10,
        borderRadius: 10,
      }}>
      <Image
        source={props.pic}
        resizeMode="cover"
        style={{
          width: responsiveWidth(27),
          height: responsiveHeight(12),
          position: 'absolute',
          top: -30,
          right: -20,
          zIndex: 5,
        }}
      />

      <TouchableOpacity style={{marginTop: 60, paddingLeft: 10}} onPress={props.mealDitail} >
        <Text
          style={{
            fontSize: responsiveFontSize(2),
            color: '#000',
            fontWeight: '400',
          }}>
          {props.name}
        </Text>
        <Text style={{fontSize: responsiveFontSize(1.3), marginVertical: 5}}>
          {props.desc}
        </Text>
        <Text
          style={{
            fontSize: responsiveFontSize(2.5),
            color: '#222',
            fontWeight: '500',
          }}>
          ${props.price}
        </Text>
      </TouchableOpacity>
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
        <View
          style={{
            backgroundColor: '#000',

            width: 50,
            height: 50,
            borderRadius: 50,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <TouchableOpacity onPress={props.shopMeal}>
            <FontAwesomeIcon icon={faShoppingCart} color="#FEB500" size={20} />
          </TouchableOpacity>
        </View>
      </BoxShadow>
    </View>
  );
};

export default ItemSubCategory;
