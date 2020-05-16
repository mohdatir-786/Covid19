import axios from "axios";
export const worldAction=()=> async  dispatch =>{
    try{
        const url="https://covid19.mathdro.id/api";
        const response= await axios.get(url);
        const value=response.data;
        console.log(value)
        dispatch({type:"WORLD_STATS",payload:value})
    }catch(error) {
        console.log(error)
    }

}