import { combineReducers } from "redux";
import subscribersReducer from "./subscribers/reducer";
import viewsReducer from "./views/reducer";
import commentsReducer from "./comments/reducer";
//reducer 두개 합치기
const rootReducer=combineReducers({
    views: viewsReducer,
    subscribers: subscribersReducer,
    comments: commentsReducer
})

export default rootReducer