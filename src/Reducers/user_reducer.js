const user_Reducer=(state={},action)=>{
    switch (action.type) {
        case "USER_DATA":
            return action.payload
        case "EDIT_PROFILE":
            return {...action.payload}
        default:
            return state
    }
}
export default user_Reducer;




