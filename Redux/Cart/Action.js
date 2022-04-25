import {ADD_CART,DEL_CART,DECREASE, DEL_ALL } from './Type'

export const decreaseCart = (item)=>{
    return{
        type:DECREASE,
        payload:item
    }
}


export const addCart = (item)=>{
   
    return{
        type:ADD_CART,
        payload:item,
       
    }
}


export const delCart = (id)=>{
    return{
        type:DEL_CART,
        payload:id
    }
}

export const delAllCart = ()=>{
    return{
        type:DEL_ALL,
    }
}