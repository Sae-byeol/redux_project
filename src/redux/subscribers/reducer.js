import { ADD_SUBSCRIBER, REMOVE_SUBSCRIBER } from "./types"

const initialState={
    count:370
}
//reducer: state, action을 받아 사용
const subscribersReducer=(state=initialState, action)=>{
    //받은 action의 type에 따라 다르게 handle
    switch(action.type){
        case ADD_SUBSCRIBER:
            return{
                ...state,
                count: state.count+1
            }
        case REMOVE_SUBSCRIBER:
            return{
                ...state, 
                count: state.count-1
            }
        default:
            return state
    }
}
export default subscribersReducer