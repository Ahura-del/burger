import React, { useEffect, useState } from 'react'
import {useNetInfo} from '@react-native-community/netinfo'
import Connection from '../Connection/Connection'
import axios from 'axios'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { ActivityIndicator } from 'react-native'
import Home from '../Home/Home'


const Preloader = () => {
    const netInfo = useNetInfo()
    const [loading , setLoading] = useState(false)

    const logout = ()=>{
        AsyncStorage.clear()
    }


    useEffect(()=>{
        const id = AsyncStorage.getItem('userId')
        const token = AsyncStorage.getItem('token')
        const getAllData = ()=>{
            setLoading(true)
                axios.get(`http://192.168.1.102:3000/auth/user/${id}` , {headers:{'Authorization': 'Bearer ' +token}})
                .then(res=>console.log(res.data))
                .catch(err=>console.log(err.response.data))

                axios.get('http://192.168.1.102:3000/products')
                .then(res => console.log(res.data))
                .catch(err=>console.log(err.response.data))
            
        }

        if(token && id){
            if(netInfo.isConnected){
                getAllData().then(()=>setLoading(false))
            }else{
                return <Connection/>
            }
        }else{
            logout()
        }

    },[])
  
 if(loading){
     return <ActivityIndicator color='#FEB500' />
 }else{
     return <Home/>
 }
}

export default Preloader