import { Icon } from 'native-base'
import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import { Shadow } from 'react-native-shadow-2'
import {responsiveHeight , responsiveWidth} from 'react-native-responsive-dimensions'

const PopularMeal = (props) => {

    return (
        <View
        style={{
          backgroundColor: '#FEB500',
          width: '45%',
          height: '85%',
          position: 'relative',
          borderRadius: 10,
        }}
        
        >
        <Image
          source={{uri : props.Image}}
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

        <View style={{marginTop: 70, paddingLeft: 10}} >
        <TouchableOpacity onPress={props.mealDitail} >
          <Text  style={{fontSize: 14}}>{props.name}</Text>
          <Text style={{fontSize: 8, marginVertical: 10}}>
            {props.desc}
          </Text>
          <Text>${props.price}</Text>
          </TouchableOpacity>

        </View>

        <Shadow
        distance={10} startColor={'#FEB500'} finalColor={'#FEB500'}
        radius={25}
        // setting={{
        //   width: 50,
        //   height: 50,
        //   color: '#FEB500',
        //   border: 10,
        //   radius: 25,
        //   opacity: 0.5,
        //   x: 1,
        //   y: 1,
        //   style: {
        //     marginVertical: 5,
        //     position: 'absolute',
        //     bottom: -15,
        //     right: -12,
        //   },
        // }}
        >
        <TouchableOpacity
        onPress={props.shopMeal}
          style={{
            backgroundColor: '#000',
           
            width:50,
            height:50,
            borderRadius: 50,
            justifyContent:"center",
            alignItems:"center"
            
          }}>
          <Icon
            type="FontAwesome5"
            name="shopping-cart"
            style={{color: '#FEB500', fontSize: 20}}
            
          />
        </TouchableOpacity>
          </Shadow>

      </View>
    )
}

export default PopularMeal
