import React from "react";
import { userprofile_Actions} from "../Actions/profileActions";
import {connect} from "react-redux";
import UserEdit from "./UserEdit";
import {Container, Grid} from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
class userProfile extends React.Component{
    state={
        UserEdit:false,
        UserProfile:true
    }
    render() {
        return  <div style={{backgroundColor:"#8FBC8F"}}>
            <br/>
            <br/>
                              <Grid container spacing={1} >
                                <Grid item sm={6}>
                                    <Container maxWidth='sm'>
                                        <Paper className='border-decorate' elevation={3}
                                               style={{textAlign: 'center', padding: '80px',marginTop:"100px"}}>
                                              <div><h1>Profile</h1></div>
                                             <div style={{border:"1px solid black"}}>
                                                 <label>Name:</label>
                                                 {this.props.values.name}
                                                 <div><label>Email:</label>
                                                     {this.props.values.email}
                                                 </div>
                                                 <div>
                                                     <label>Phone:</label>
                                                     {this.props.values.phone}
                                                 </div>
                                                 <div>
                                                     <label>Country:</label>
                                                     {this.props.values.country}
                                                 </div>
                                             </div>
                                        </Paper>
                                    </Container>
                                   </Grid>
                                  <Grid item sm={6}>
                                      <UserEdit/>
                                  </Grid>
                              </Grid>
            </div>
    }
}
const mapStateToProps=(state)=>{
    return {
    values:state.user_Reducer
    }
}
export default connect(mapStateToProps,{userprofile_Actions})(userProfile);