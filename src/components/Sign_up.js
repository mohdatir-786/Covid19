import React from "react";
import {connect} from "react-redux";
import {Field,reduxForm} from "redux-form";
import {signup_Actions} from "../Actions/authAction";
import history from "./history";
import {Container, Grid, TextField, Box,Fab} from "@material-ui/core";
import AppBar from "./AppBar";
import Paper from "@material-ui/core/Paper";
class Sign_up extends React.Component {

    renderInput=({input,label,meta, type,id,margin})=>{
        return (
            <Box >

                <div>{meta.error}</div>
                <TextField  {...input} type={type} id={id} margin={margin} label={label} autoComplete="off"/>
            </Box>
        );
    }
    onSubmit=(formValues)=>{
        this.props.signup_Actions(formValues);
        history.push("/Login");
    }
    render() {
        return (
            <div style={{backgroundColor:"LightGray"}}>
                <br/>
                <br/>
                <Grid container spacing={1} >
                    <Grid item sm={2}>
                        <AppBar/>
                    </Grid>
                    <Grid item sm={10}>
                        <Container maxWidth='sm'>
                            <Paper className='border-decorate' elevation={3}
                                   style={{textAlign: 'center', padding: '30px'}}>

            <form onSubmit={this.props.handleSubmit(this.onSubmit)} >
                <Field id="name" name="name" component={this.renderInput }  label=" Name" margin="normal"/>
                <Field id="email" type="email" name="email"  component={this.renderInput } label="Email" margin="normal" />
                <Field id="password" type='password' name="password"  component={this.renderInput} label="Password" margin="normal"/>
                <Field id="password" type="password" name="Confirm_password" component={this.renderInput} label="Confirm_Password" margin="normal" />
                <Fab variant="extended" aria-label="Signup" type='submit'
                     className='button-decorate'>
                    Signup
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

const validate=(formValues)=>{
const errors={};

    if(formValues.password !== formValues.Confirm_password){
        errors.Confirm_password="password mismatch";
    }
  return errors;
}
Sign_up = connect(null,{signup_Actions})(Sign_up)
export default reduxForm({
    form:"Signup_Form",
    validate:validate
})(Sign_up);