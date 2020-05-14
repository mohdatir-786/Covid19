import {combineReducers} from "redux";
import {reducer} from "redux-form";
import postReducer from "./postReducer";
import authReducer from "./authReducer";
import user_Reducer from "./user_reducer";

export default combineReducers({
    posts:postReducer,
    form:reducer,
    auth:authReducer,
    user_Reducer:user_Reducer
});