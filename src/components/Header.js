import React from "react";
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import {AppBar, Toolbar, Typography} from "@material-ui/core";
import TemporaryDrawer from "./sidedrawer";
const Header =(props)=>{
    return  <>
        <AppBar position='fixed' style={{backgroundColor: 'black'}}>
            <Toolbar >
                <Link to='/' style={{textDecoration: "none"}}>
                    <Typography variant="h5" align='center' style={{color:"white"}}>
                        Home
                    </Typography>
                </Link>
              <hr/>
                <TemporaryDrawer isAuth={props.isAuth}/>

            </Toolbar>
        </AppBar>
        <br/>
        <br/>
        <br/>
    </>
}
const mapStateToProps=(state)=>{
    return {
        isAuth:state.auth.token!==null
    }

}
export default connect(mapStateToProps)(Header);

