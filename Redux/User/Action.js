import {DELUSER, UPDATEUSER, USER} from './Type'

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

export const delUSer = ()=>{
    return{
        type:DELUSER
    }
}