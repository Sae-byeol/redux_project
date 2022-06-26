import Display from "../../components/Display";
import { FETCH_COMMENTS, FETCH_COMMENTS_REQUEST, FETCH_COMMENTS_FAILURE, FETCH_COMMENTS_SUCCESS } from "./types";

const fetchCommentSuccess=(comments)=>{
    return {
        type:FETCH_COMMENTS_SUCCESS,
        payload: comments
    }
}
const fetchCommentFailure=(error)=>{
    return {
        type:FETCH_COMMENTS_FAILURE,
        payload:error
    }
}
const fetchCommentRequest=()=>{
    return {
        type:FETCH_COMMENTS_REQUEST
    }
}
export const fetchComments=()=>{ 
    //thunk 사용하였으므로 action에서 dispatch를 인자로 넘겨받은 함수를 return 가능
    return (dispatch)=> {
        dispatch(fetchCommentRequest())
        fetch("https://jsonplaceholder.typicode.com/comments")
            .then(response =>response.json())
            .then(comments=> 
                dispatch(fetchCommentSuccess(comments)))
            .catch(error=>
                dispatch(fetchCommentFailure(error)))
    }
}