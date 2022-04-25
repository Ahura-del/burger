import {DELUSER, UPDATEUSER, USER} from './Type'

const initialState = {
    user:{},
    update:false
}

const userReducer = (state=initialState , action)=>{
    switch (action.type) {
        case USER:
            return{
                user:action.payload
            }
        case UPDATEUSER:
            return{
                ...state,
                update:!state.update
            }
            case DELUSER:
                return{
                    user:{}
                }
        default:
            return state
    }
}

export default userReducer