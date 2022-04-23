import {USER} from './Type'

const initialState = {
    user:{}
}

const userReducer = (state=initialState , action)=>{
    switch (action.type) {
        case USER:
            return{
                user:action.payload
            }
            
    
        default:
            return state
    }
}

export default userReducer