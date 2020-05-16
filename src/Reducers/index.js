import {combineReducers} from "redux";
import {reducer} from "redux-form";
import postReducer from "./postReducer";
import authReducer from "./authReducer";
import user_Reducer from "./user_reducer";
import countryReducer from "./countryStatsReducer";
import worldReducer from "./CardReducer";

export default combineReducers({
    posts:postReducer,
    form:reducer,
    auth:authReducer,
    user_Reducer:user_Reducer,
    stats:countryReducer,
    worldReducer:  worldReducer
});