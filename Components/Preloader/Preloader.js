import React, {  useEffect, useRef } from 'react'

import axios from 'axios'
import AsyncStorage from '@react-native-async-storage/async-storage'
import Home from '../Home/Home'
import { DevSettings } from 'react-native'
import { useDispatch } from 'react-redux'
import { getProducts, getUser } from '../../Redux'


const Preloader = () => {
    const dispatch = useDispatch()
    const restMount = useRef(false)
    // const [loading , setLoading] = useState()
    const logout = ()=>{
        AsyncStorage.clear()
        DevSettings.reload()
    }
  
    
    useEffect(()=>{
        const getStorage = async()=>{
            
            const userId = await AsyncStorage.getItem('userId')
            const token = await AsyncStorage.getItem('token')
            
            if(token && userId){
            // setLoading(true)
            axios.get(`http://192.168.1.102:3000/auth/user/${userId}` , {headers:{'Authorization': 'Bearer ' + token}})
            .then(res=>{
                if(res.status === 200){
                    // setLoading(false)
                    // console.log(res.data)
                    dispatch(getUser(res.data))

                }
            })
            .catch(err=>{
                 console.log(err)
                })

                axios.get('http://192.168.1.102:3000/products', {headers:{'Authorization': 'Bearer ' + token}})
                .then(res => {
                    if(res.status === 200){
                        dispatch(getProducts(res.data))
                    }
                })
                .catch(err=>console.log(err.response.data))
            }else{
                logout()
            }
            
        } 
        getStorage()
        return ()=> {restMount.current = true}
        },[])
        
// const getAllDataCallback = useCallback(()=>{

//     const id = AsyncStorage.getItem('userId')
//     const token = AsyncStorage.getItem('token')
//     const getAllData = ()=>{
//         setLoading(false)
//             axios.get(`http://192.168.1.102:3000/auth/user/${id}` , {headers:{'Authorization': 'Bearer ' +token}})
//             .then(res=>console.log(res.data))
//             .catch(err=>console.log(err.response.data))
    
            // axios.get('http://192.168.1.102:3000/products')
            // .then(res => console.log(res.data))
            // .catch(err=>console.log(err.response.data))
        
//     }
    
//     if(token && id){
//         if(netInfo.isConnected){
//             getAllData().then(()=>setLoading(false))
//         }else{
//             return <Connection/>
//         }
//     }else{
//         logout()
//     }
// },[])

//     useEffect(()=>{
//         getAllDataCallback()
//         return ()=> restMount.current(true)
//     },[])
  
//  if(!loading){
//      return <Home/>
// }
// else{
//      return <Loading />
//  }

return(<Home />)

}

export default Preloader