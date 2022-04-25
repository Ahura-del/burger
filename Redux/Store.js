import {createStore , combineReducers } from 'redux'
import userReducer from './User/Reducer'
import cartReducer from './Cart/Reducer'


const rootReducer = combineReducers({
  
  userState:userReducer,
  cartState : cartReducer,
 
})

const Store = createStore(rootReducer)
export default Store