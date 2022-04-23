import {PRODUCTS} from './Type';

export const getProducts = (products)=>{
    return{
        type:PRODUCTS,
        payload:products
    }
}