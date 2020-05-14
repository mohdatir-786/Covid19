const initial_state={
   token:null,
   loading:null,
   error:null
}
const AuthReducer=(state=initial_state, action)=>{
    switch(action.type){
        case "AUTH_START":
            return {...state,loading:true,token:null,error:false}
        case "AUTH_SUCCESS":
            return {...state,token:action.payload,error:null,loading:false}
        case "AUTH_FAILURE" :
            return {...state,error:action.payload,token:null,loading:false}
        case "AUTH_LOGOUT":
            return {...state,token:null,error: null,loading: false}
            default :
            return state;
    }

}
export default AuthReducer;
