import {PRODUCTS, UPDATESTATE} from './Type'

const initialState = {
    products:[],
    productState:false
}

const productsReducer = (state = initialState , action)=>{
    switch (action.type) {
        case PRODUCTS:
            return{
                products:action.payload
            }
        case UPDATESTATE:
            return{
                productState:!state.productState
            }
    
        default:
            return state
    }
}

export default productsReducer