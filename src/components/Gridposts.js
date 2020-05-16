import React from "react";
import Pagination from "./Pagination";
import SideBar from "./SideBar";
import CardsContent from "./Stats/CardsContent";
class GridPosts extends React.Component{
    render() {

        return <div className="row">
            <div className="col-sm-3" style={{marginTop:"20px"}}>
                <br/>
                <SideBar/>
            </div>
            <div className="col-sm-9">
                <div style={{position:"sticky",top:'40px'}}>
                    <p style={{fontWeight:"bold",marginLeft:"480px"}}>World Data</p>
                    <CardsContent/>
                </div>
                <div style={{marginTop:"80px"}}>
                <Pagination  />
                </div>
            </div>
        </div>
    }
}
export default (GridPosts);