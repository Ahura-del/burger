import React from 'react'
import { View, Text } from 'react-native'
import { library } from '@fortawesome/fontawesome-svg-core'
import {faWifi} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
library.add(faWifi)
const Connection = () => {
    return (
        <View style={{flex:1 , flexDirection:"column" , backgroundColor:"#000" , justifyContent:"center"  }}>
           <View style={{alignItems:"center"}}>
           <View>
           <FontAwesomeIcon icon={faWifi} color="#FEB500" size={50}  />

           {/* <Icon type='FontAwesome' name="wifi" style={{color:"#FEB500" , fontSize:50}} /> */}
       </View>
       <View>
       <Text style={{color:"#FEB500" , fontSize:18 , marginTop:10}}> No Connection</Text>
       </View>
           
           </View>
        </View>
    )
}

export default Connection
