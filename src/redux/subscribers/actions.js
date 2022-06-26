import { ADD_SUBSCRIBER, REMOVE_SUBSCRIBER } from "./types"
//action (외부에서 사용할 수 있도록 export)
export const addSubscriber=()=>{
    return {
        type:ADD_SUBSCRIBER
    }
}
export const removeSubscriber=()=>{
    return{
        type:REMOVE_SUBSCRIBER
    }
}