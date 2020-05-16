import React from "react";
import StatsCountry from "./StatsCountry";
import SideBar from "../SideBar";
const helperStats=(props)=>{
    return <div className="row" >
        <div className="col-sm-3" style={{marginTop:"30px"}}>
            <SideBar/>
        </div>
        <div className="col-sm-9">
        <StatsCountry country={props.match.params.country}/>
        </div>
    </div>

}
export default helperStats;
