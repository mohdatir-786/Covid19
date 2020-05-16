import React from 'react';
import {connect} from "react-redux";
import {Grid, Card,  CardContent, Typography} from '@material-ui/core';
import CountUp from 'react-countup';
import {worldAction} from "../../Actions/CardActions";

class CardsContent extends React.Component {
    componentDidMount() {
        this.props.worldAction();
    }

    render() {
        return  (
            <div >
                <Grid container spacing={1} justify="center" >
                    <Grid item md={2} component={Card} >
                        <div style={{backgroundColor:"#8FBC8F"}}>
                        <CardContent>
                            <Typography color="textSecondary" gutterBottom style={{fontWeight:"bold",color:"black"}}>
                                Infected
                            </Typography>
                            <Typography variant="h5" component="h2" style={{fontWeight:"bold",textShadow: "2px 2px 5px orange"}}>
                                <CountUp start={0} end={this.props.val.confirmed.value} duration={2} separator="," />
                            </Typography>
                        </CardContent>
                        </div>
                    </Grid>
                    <Grid item xs={12} md={2} component={Card} >
                        <div style={{backgroundColor:"#8FBC8F"}}>
                        <CardContent>
                            <Typography color="textSecondary" gutterBottom style={{fontWeight:"bold",color:"black"}}>
                                Recovered
                            </Typography>
                            <Typography variant="h5" component="h2" style={{fontWeight:"bold",textShadow: "2px 2px 5px blue"}}>
                                <CountUp start={0} end={this.props.val.recovered.value} duration={2} separator="," />
                            </Typography>
                        </CardContent>
                        </div>
                    </Grid>
                    <Grid item xs={12} md={2} component={Card} >
                        <div style={{backgroundColor:"#8FBC8F"}}>
                        <CardContent>
                            <Typography color="textSecondary" gutterBottom style={{fontWeight:"bold",color:"black"}}>
                                Deaths
                            </Typography>
                            <Typography variant="h5" component="h2" style={{fontWeight:"bold",textShadow: "2px 2px 5px red"}}>
                                <CountUp start={0} end={this.props.val.deaths.value} duration={2} separator="," />
                            </Typography>
                            <Typography color="textSecondary">
                            </Typography>
                        </CardContent>
                        </div>
                    </Grid>
                </Grid>
            </div>
        );
    }



}
const mapStateToProps=(state)=>{
    return {
        val: state.worldReducer,
    }
}
export default connect(mapStateToProps,{worldAction})(CardsContent);