import React from "react";
import {connect} from "react-redux";
import {Field,reduxForm} from "redux-form";
import {authLogin} from "../Actions/authAction";
import AppBar from "./AppBar";
import Paper from "@material-ui/core/Paper";
import Button from '@material-ui/core/Button';
import {Container, TextField, Grid,Box} from "@material-ui/core";
class Login extends React.Component {
state={error:null}
       renderInput=({input,label, type,id,margin})=>{
        return (
                <Box>
                <TextField  {...input} type={type} id={id} margin={margin} label={label} autoComplete="off"/>
                </Box>
        );
    }
    onSubmit=(formValues)=>{
        localStorage.setItem("email",formValues.email);
        this.props.authLogin(formValues);


    }
    render() {
        return (
            <div style={{backgroundColor:"grey"}}>
                <br/>
                <br/>
                <Grid container spacing={1} style={{marginTop:"50px"}}>
                    <Grid item sm={2}>
                        <AppBar/>
                    </Grid>
                    <Grid item sm={10}>
                        <Container maxWidth='sm'>
                            <Paper className='border-decorate' elevation={3}
                                   style={{textAlign: 'center', padding: '30px'}}>

            <form className="ui form error" onSubmit={this.props.handleSubmit(this.onSubmit) } >
                <Field    name="email" component={this.renderInput} type="email" id="email"
                          label="Email"
                          margin="normal" />
                <Field name="password" component={this.renderInput} type="password" id="password"
                       label="Password"
                       margin="normal"/>
                <Button variant="contained" aria-label="login"  className='button-decorate' type='submit'>Login</Button>
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
Login = connect(null,{authLogin})(Login)
export default reduxForm({
    form:"LoginForm",
    validate:validate
})(Login);