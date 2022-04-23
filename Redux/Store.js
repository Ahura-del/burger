import {createStore , combineReducers } from 'redux'
import userReducer from './User/Reducer'
import productReducer from './Products/Reducer'


const rootReducer = combineReducers({
  
  userState:userReducer,
  productState:productReducer
 
})

const Store = createStore(rootReducer)
export default Store