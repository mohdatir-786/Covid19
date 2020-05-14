import React from "react";
import Pagination from "./Pagination";
import AppBar from "./AppBar";
class GridPosts extends React.Component{
    render() {

        return <div className="row">
            <div className="col-sm-3">
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <AppBar/>
            </div>
            <div className="col-sm-9"><Pagination  /></div>
        </div>
    }
}
export default (GridPosts);