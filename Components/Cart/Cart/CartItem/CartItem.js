
import React from 'react';
import {View, Text, Image,TouchableOpacity} from 'react-native';
import { library } from '@fortawesome/fontawesome-svg-core'
import {faTimes} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';
import {useDispatch } from 'react-redux'
import { delCart } from '../../../../Redux';
library.add(faTimes)

const CartItem = props => {
  const dispatch = useDispatch()

  return (
    <View
      style={{
        width: '90%',
        marginBottom: 40,
        backgroundColor: '#FEB500',
        flexDirection: 'row',
        position: 'relative',
        justifyContent: 'flex-end',
        height: 100,
        borderRadius: 10,
      }}>
      <Image
        source={props.pic}
        style={{
          width: responsiveWidth(32),
          height: responsiveHeight(15),
          position: 'absolute',
          top: -35,
          left: -55,
          zIndex: 10,
        }}
      />

      <View
        style={{
          width: '70%',
          height: '100%',
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <View
          style={{
            width: '70%',
            flexDirection: 'column',
            justifyContent: 'space-around',
          }}>
          <View>
            <Text
              style={{fontFamily: 'Poppins', fontSize: responsiveFontSize(2),color:"#222" ,paddingBottom: 10}}>
              {props.name}
            </Text>
            <Text style={{fontFamily: 'Poppins', fontSize: responsiveFontSize(1.5)}}>
              By Navgivan Hotel
            </Text>
          </View>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text style={{fontFamily: 'Poppins', color:"#111" ,fontSize: responsiveFontSize(2.3)}}>${props.price}</Text>
            <Text style={{color:"#111"}} >X {props.count}</Text>
          </View>
        </View>
        <View style={{paddingRight: 10, paddingTop: 8}}>
         <TouchableOpacity onPress={() => dispatch(delCart(props.id))} style={{ width:20 , height:20}} >
         <FontAwesomeIcon icon={faTimes}  size={18} />

         {/* <Icon
         type="FontAwesome5"
         name="times"
         style={{fontSize: 18}}
         
       /> */}
         
         </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default CartItem;
