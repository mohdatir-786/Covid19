import post from "../apis/post";
import {userprofile_Actions} from "./profileActions"
import history from "../components/history";
const AuthStart=()=>{
    return {
        type:"AUTH_START"
    }
}
const AuthSuccess=(token)=>{
    return {
        type:"AUTH_SUCCESS",
        payload:token
    }
}
const AuthLogin=(token)=>{
    return{
        type:"AUTH_LOGIN",
        payload:token

    }
};
const AuthFailure=(error)=>{
    return {
        type:"AUTH_FAILURE",
        payload:error
    }
};
const AuthLogout=()=>{
    return {
        type:"AUTH_LOGOUT"
    }
}

export const authLogin = (formValues) =>
    async dispatch => {
    dispatch(AuthStart())
    try{
        const response=await post.post("/api/user/token/",{
            email:formValues.email,
            password:formValues.password
        });
        const token=response.data.token;
        localStorage.setItem("token",token);
        dispatch(AuthSuccess(token));
        dispatch(userprofile_Actions())
        history.push("/");
    }catch(err) {
       dispatch(AuthFailure(err))
    }

}

export const signup_Actions=(formValues)=>async  dispatch=>{
    dispatch(AuthStart())
    try {
        await post.post("/api/user/create/",{
            email:formValues.email,
            password:formValues.password,
            name:formValues.name
        });
        dispatch(AuthLogin(formValues.email, formValues.password));
    }
    catch(err){
        dispatch(AuthFailure(err))
    }

};



export const logout=()=>async dispatch=>{

    await post.get("/api/user/logout",{
            headers:{
                Authorization:`Token ${localStorage.getItem("token")}`,
                'Content-type':'application/json'
            }
        });
    localStorage.removeItem("token");
    localStorage.removeItem("email")
    dispatch(AuthLogout());
    history.push("/Login");

}