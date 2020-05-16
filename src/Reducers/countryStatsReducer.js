const initialState = {
    date: [],
    confirmed: [],
    recovered:[],
    deaths:[],
    loading:false,
    error: null
}

const fetchCountryHelper = (state, action) => {
    let stateCopy = JSON.parse(JSON.stringify(state))
    let date = [];
    let confirmed = [];
    let recovered=[];
    let deaths=[];
    action.payload.forEach(obj => {
        date.push(obj.date);
        confirmed.push(obj.confirmed);
        recovered.push(obj.recovered);
        deaths.push(obj.deaths);
    });
    stateCopy.date = date;
    stateCopy.confirmed = confirmed;
    stateCopy.recovered = recovered;
    stateCopy.deaths = deaths;
    stateCopy.loading = false;
    stateCopy.error = null
    return {...state, ...stateCopy};

};

const countryReducer=(state=initialState,action)=>{
    switch (action.type) {
        case "FETCH_START":
            return {...state,loading:true,error:null}
        case "FETCH_SUCCESS":
            return fetchCountryHelper(state, action);
        case "FETCH_FAILURE":
            return {...state,loading:false,error:action.payload}
        default:
            return state

    }
}
export default countryReducer;