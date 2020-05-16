import post from "../apis/post";
export const userprofile_Actions=()=> async dispatch=>{
    const response=await post.get("/api/user/me",{
        headers:{
            Authorization :`Token ${localStorage.getItem("token")}`,
            "Content-type":"application/json"
        }
    });

    dispatch({type: "USER_DATA", payload: response.data});

};

export const userEditActions=(formValues)=> async dispatch=>{
    const response=await post.patch("/api/user/me/",formValues,{
        headers:{
            Authorization :`Token ${localStorage.getItem("token")}`,
            "Content-type":"application/json"
        }
    });

    dispatch({type:"EDIT_PROFILE",payload:response.data});
};