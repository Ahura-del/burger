import {PRODUCTS , UPDATESTATE} from './Type';

export const getProducts = (products)=>{
    return{
        type:PRODUCTS,
        payload:products
    }
}

export const updateProduct = ()=>{
    return{
        type:UPDATESTATE
    }
}