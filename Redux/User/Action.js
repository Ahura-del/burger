import {UPDATEUSER, USER} from './Type'

export const getUser = (user)=>{
    return{
        type:USER,
        payload:user
    }
}

export const updateUser = ()=>{
    return{
        type:UPDATEUSER,
    }
}