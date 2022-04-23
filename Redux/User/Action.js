import {USER} from './Type'

export const getUser = (user)=>{
    return{
        type:USER,
        payload:user
    }
}