import post from "../apis/post";
const fetchCountryStart=()=>{
    return {
        type:"FETCH_START"
    }
}
const fetchCountrySuccess=(value)=>{
    return {
        type:"FETCH_SUCCESS",
        payload:value
    }
}
const fetchCountryFailure=(error)=>{
    return{
        type:"FETCH_FAILURE",
        payload:error
    }
}
export const fetchCountry=(country)=> async  dispatch =>{
    dispatch(fetchCountryStart());
   try{
       const response= await post.get(`/api/stats/${country}`);
       const value=response.data;
       dispatch(fetchCountrySuccess(value));
   }catch(error) {
       dispatch(fetchCountryFailure(error))
   }

}