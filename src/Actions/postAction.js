import post from "../apis/post";
export const fetchPosts=()=>async  dispatch=>{
    const response= await post.get("/api/news/who-news");
    dispatch({type:"FETCH_POSTS",payload:response.data});
};