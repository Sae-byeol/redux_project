import { ADD_VIEW } from "./types";

export const addView=(number)=>{
    return{
        type:ADD_VIEW,
        payload: Number(number) //number를 숫자로 변환하여 reducer로 전달하기 위함.
    }
}