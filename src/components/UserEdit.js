import React from "react";
import {connect} from "react-redux";
import {Field, reduxForm} from "redux-form";
import { userprofile_Actions,userEditActions} from "../Actions/profileActions";
import {Container, Grid, TextField, Box,Fab} from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
class userEdit extends React.Component {
    componentDidMount() {
    this.props.userprofile_Actions();

    }
    renderInput=({input,label, type,id,margin})=>{
        return (
            <Box >

                <TextField  {...input} type={type} id={id} margin={margin} label={label} autoComplete="off"/>
            </Box>
        );
    }
    onSubmit=(formValues)=> {
        this.props.userEditActions(formValues);
    }

    render(){
        return (
            <div style={{backgroundColor:"#8FBC8F"}}>
                <br/>
                <br/>
                 <Grid container spacing={1} >
                    <Grid item sm={12}>
                        <Container maxWidth='sm'>

                            <Paper className='border-decorate' elevation={3}
                                   style={{textAlign: 'center', padding: '30px',marginBottom:"80px"}}>
                                <div><h1>Edit Profile</h1></div>
                                <form onSubmit={this.props.handleSubmit(this.onSubmit)} >
                                    <Field id="nn" name='name' component={this.renderInput }  label=" Name" margin="normal"/>
                                    <Field id="email"  type="email" name="email"  component={this.renderInput } label="Email" margin="normal" />
                                    <Field id="phone" name="phone"  component={this.renderInput} label="Phone" margin="normal"/>
                                    <Field id="country" name="country" component={this.renderInput} label="Country" margin="normal" />
                                    <Fab variant="extended" aria-label="Submit" type='submit'
                                         className='button-decorate'>
                                        Edit
                                    </Fab>
                                </form>

                            </Paper>
                        </Container>
                    </Grid>
                </Grid>

            </div>
        )
    };
}
const mapStateToProps=(state)=>{
    return {
        initialValues:state.user_Reducer
    }
}
userEdit =  reduxForm({form:"Edit_Form",
})(userEdit);
export default connect(mapStateToProps,{userprofile_Actions,userEditActions})(userEdit);