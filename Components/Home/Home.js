import React, { useState,Fragment} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import { library } from '@fortawesome/fontawesome-svg-core'
import {faUser , faShoppingCart , faThLarge, faHome, faHeart, faBell} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import {
    responsiveScreenFontSize,

  } from 'react-native-responsive-dimensions';
import PopularMeal from './PopularMeal/PopularMeal';
// import {useDispatch, useSelector} from 'react-redux';
// import {addCart, addNotify, delNotify, fetchUser } from '../../Redux';
// import {withBadge} from 'react-native-elements';
// import messaging from '@react-native-firebase/messaging';
// import AsyncStorage from '@react-native-community/async-storage';
import {useNetInfo} from "@react-native-community/netinfo";
import Connection from '../Connection/Connection';

// import Connection from '../Connection/Connection';
// import axios from 'axios';
library.add(faUser,faShoppingCart,faThLarge,faHome,faHeart,faBell)
const Home =  ({navigation}) => {
//   const dispatch = useDispatch();
 const netInfo = useNetInfo()
 console.log(netInfo)
//   const notifySate = useSelector(state => state.notify.notify);
//   const checkNotify = 'title' in notifySate;
 
//   useEffect(()=>{
 
//     const getEmail = async()=>{
//       try {
//        const loginEmail = await AsyncStorage.getItem("user")
      
//        if(loginEmail){
//          if(loginEmail.includes('"')){
//            const firstChar = loginEmail.substring(0 , loginEmail.length-1);
//            const fulChar = firstChar.substring(1);
//           dispatch(fetchUser(`http://papaberger.ir/api/user/${fulChar}`))
//          }else{
//           const fulChar1 = loginEmail
//           dispatch(fetchUser(`http://papaberger.ir/api/user/${fulChar1}`))

//          }
         
//        }
    
//       } catch (error) {
        
//       }
    
//     }
 
//     getEmail()
//   },[])

//   messaging().setBackgroundMessageHandler(async remoteMessage => {
//     navigation.navigate('notify', {
//       title: remoteMessage.notification.title,
//       desc: remoteMessage.notification.body,
//       img: remoteMessage.notification.android.imageUrl,
//     });
//   });


//   useEffect(() => {
//     const unsubscribe = messaging().onMessage(async remoteMessage => {
//       dispatch(addNotify(remoteMessage.notification));


//     });

//     return unsubscribe;
    
//   }, []);

  const [data, setData] = useState([]);
//   const stateCart = useSelector(state => state.cart.cart);
//   const BadgeIcon = withBadge(stateCart.length)(Icon);
  // const fetchData = useSelector(state => state.product.homeProduct);
//   const BadgeIconNotify = withBadge()(Icon);
  // const [isLoading , setisLoading] = useState()
  // useEffect(() => {
  //   const test = [];

  //   for (let i = 0; i < 2; i++) {
  //   test.push(fetchData[i]);
  //   }
  //   setData(test);
  // }, [fetchData]);

//   useEffect(()=>{
//     const fetchItem = async ()=>{
//       try {
//         await axios.get('http://papaberger.ir/api/product')
//         .then(res => {
//           const responseData = res.data.reverse()
//           const homeProduct = []
//           for( let i=0 ; i<2 ; i++){
//             homeProduct.push(responseData[i])
//           }
//           setData(homeProduct)
//         })
//         .catch(err=> console.log(err))
//       } catch (error) {
//         console.log(error);
//       }
//     }
//     fetchItem()
//   },[])

// useEffect(()=>{
//   NetInfo.fetch().then(state => {
//     setisLoading(state.isConnected)

//   });
  
// },[])

 
 const loadingData = ()=>{
     
        
  if(!netInfo.isConnected){

    return (
      <Fragment>
      <Connection />
      </Fragment>
    )
  }else{
   
    return (
<Fragment>
<View style={{flex: 1, flexDirection: 'column'}}>
<View style={{flex: 2, flexDirection: 'column', position: 'relative'}}>
  <Image
    source={require('../../assets/Image/welcome2.png')}
    resizeMode="cover"
    style={{width: '100%', height: '100%'}}
  />
  <View
    style={{
      // height:"100%",
      width: '100%',
      position: 'absolute',
      top: 0,
      left: 0,
      zIndex: 3,
      marginTop: 20,
    }}>
    <View
      style={{
        display:"flex",
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems:"center"
      }}>
      <View>
        {/* <H2 style={{marginBottom: 10}}>Explore</H2> */}
        <Text style={{
          fontFamily: 'Poppins',fontWeight:"600" , color:"#000",fontSize: responsiveScreenFontSize(2.7)}}>
          What would you like to eat?
        </Text>
      </View>
      <View style={{
        alignItems:"center",

        flexDirection: 'row'}}
        >

      <View >
      <FontAwesomeIcon icon={faHeart} color='black' size={22} style={{marginRight:15}} />

        {/* <Icon
          type="FontAwesome5"
          name="heart"
          style={{fontSize: 25, marginRight: 15}}
          
        /> */}
        {/* {checkNotify ? ( */}
        </View>
        <View >

          <TouchableOpacity
            // style={{width: 30, height: 30}}
            onPress={() => {
              navigation.navigate('notify', {
                title: notifySate.title,
                desc: notifySate.body,
                img: notifySate.android.imageUrl,
              });
              
              dispatch(delNotify());
            }}>
              <FontAwesomeIcon icon={faBell} color='black' size={22} />

            {/* <BadgeIconNotify
              type="FontAwesome"
              name="bell"
              style={{fontSize: 25, color: 'red'}}
            /> */}
          </TouchableOpacity>
        {/* ) : ( */}
          {/* <TouchableOpacity
            style={{width: 30, height: 30}}
            onPress={() => navigation.navigate('notify')}>
            <Icon
              type="FontAwesome5"
              name="bell"
              style={{fontSize: 25}}
            />
            </TouchableOpacity>
          )} */}
      </View>
          </View>
    </View>
  </View>
</View>
<View style={{flex: 1, backgroundColor: '#000'}}>
  <View
    style={{
      position: 'absolute',
      top: -85,
      borderTopLeftRadius: 30,
      borderTopRightRadius: 30,
      width: '100%',
      height: '50%',
      backgroundColor: '#000',
    }}>
    <View
      style={{
        marginTop: 20,
        flexDirection: 'row',

        justifyContent: 'space-between',
        width: '85%',
        marginRight: 'auto',
        marginLeft: 'auto',
      }}>
      <Text
        style={{color: '#FEB500', fontFamily: 'Poppins', fontSize: responsiveScreenFontSize(1.7)}}
        
        >
        Popular Today
      </Text>

      <TouchableOpacity
        onPress={() => {
          alert('hi')
          // navigation.navigate('category');
        }}>
        <Text
          style={{color: '#fff', fontFamily: 'Poppins', fontSize: responsiveScreenFontSize(1.7)}}>
          See All
        </Text>
      </TouchableOpacity>
    </View>
  </View>

  <View
    style={{
      height: '100%',
      backgroundColor: '#000',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      width: '85%',
      marginRight: 'auto',
      marginLeft: 'auto',
    }}>
    {data.map(item => (
      <PopularMeal
        key={item.id}
        Image={item.pic}
        name={item.name}
        desc={item.info}
        price={item.price}
        mealDitail={() => {
          navigation.navigate('fullDetail', {
            item,
          });
        }}
        shopMeal={() => {
          dispatch(addCart(item));
        }}
      />
    ))}
  </View>
</View>

<View style={{backgroundColor: '#FEB500', width: '100%'}}>
  <View
    style={{
      width: '100%',
      justifyContent: 'space-around',
      flexDirection: 'row',
      paddingVertical:5,
      alignItems:"center",
    }}>
    <TouchableOpacity
      onPress={() => {
        navigation.navigate('home');
      }}
      style={{
        padding: 10,
        
        fontSize: 20,
        borderRadius: 10,
        // color: '#FEB500',
        backgroundColor: '#000',
      }}
      >
               <FontAwesomeIcon icon={faHome} color='#FEB500' size={26} />
               </TouchableOpacity>

      {/* <Icon
        type="FontAwesome5"
        name="home"
        style={{
          backgroundColor: '#000',
          fontSize: 20,
          padding: 8,
          borderRadius: 10,
          color: '#FEB500',
        }}
      /> */}

    <TouchableOpacity
      onPress={() => {
        navigation.navigate('category');
      }}>
     <FontAwesomeIcon icon={faThLarge} color='black' size={26} />
     </TouchableOpacity>

      {/* <Icon
        type="FontAwesome5"
        name="th-large"
        style={{
            padding: 8,
            fontSize: 20,
          borderRadius: 10,
          color: '#000',
        }}
      /> */}

    {/* {stateCart.length !== 0 ? ( */}
      {/* <TouchableOpacity onPress={() => navigation.navigate('cart')}> */}
        {/* <BadgeIcon
          type="FontAwesome5"
          name="shopping-cart"
          style={{
              padding: 8,
            fontSize: 20,
            borderRadius: 10,
            color: '#000',
        }}
    /> */}
      {/* </TouchableOpacity> */}
    {/* ) : ( */}
      <TouchableOpacity
        onPress={() => {
            navigation.navigate('cart');
        }}>
                    <FontAwesomeIcon icon={faShoppingCart} color='black' size={26} />

        {/* <Icon
          type="FontAwesome5"
          name="shopping-cart"
          style={{
              padding: 8,
              fontSize: 20,
              borderRadius: 10,
            color: '#000',
        }}
        /> */}
        </TouchableOpacity>
    {/* )} */}
    <TouchableOpacity
      onPress={() => {
        navigation.navigate('profile');
    }}>
        <FontAwesomeIcon icon={faUser} color='black' size={26} />
      {/* <Icon
      
        as={FontAwesome}
        name="user"
        style={{
              padding: 8,
          fontSize: 20,
          borderRadius: 10,
          color: '#000',
        }}
      /> */}
    </TouchableOpacity>
  </View>
</View>
</View>
 
</Fragment>
    )
  }
      
}
  return (
   <Fragment>
   {loadingData()}
   </Fragment>
  );
};

export default Home;
