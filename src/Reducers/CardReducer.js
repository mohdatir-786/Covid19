const initialValue={
    confirmed: {value: 0},
    deaths: {value: 0},
    recovered: {value: 0}
};

const worldStatsHelper = (state, action) => {
    let stateCopy = JSON.parse(JSON.stringify(state));
    stateCopy.confirmed.value = action.payload.confirmed.value;
    stateCopy.deaths.value = action.payload.confirmed.value;
    stateCopy.recovered.value = action.payload.confirmed.value;
    return {...state, ...stateCopy};
}


const worldReducer=(state=initialValue,action)=>{
    switch (action.type) {
        case "WORLD_STATS" :
            console.log(action.payload);
            return worldStatsHelper(state, action);
        default:
            return state

    }

}
export default worldReducer;