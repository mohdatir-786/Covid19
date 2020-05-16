import React from "react";
import {connect} from "react-redux";
import {fetchCountry} from "../../Actions/countryStatsAction";
import LineChart from "./LineChart";
import {Divider} from "@material-ui/core";


class statsCountry extends React.Component{

    componentDidMount() {
        this.props.fetchCountry(this.props.country);
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.country !== this.props.country) {
            this.props.fetchCountry(this.props.country);
        }
    }


    render() {
        return <div>
            <LineChart
                stats={{data: this.props.confirmed,
                title: 'Total Confirmed Cases',
                labels: this.props.date,
                label: 'Total Cases',
                backgroundColor: 'rgba(0,255,255,0.2)',
                color: 'black'
            }}
            />
            <br/>
            <Divider/>
            <br/>

            <LineChart stats={{data: this.props.recovered,
                title: 'Total People Recovered',
                labels: this.props.date,
                label: 'Recovered',
                backgroundColor: 'rgba(127,255,0,0.2)',
                color: 'black'
            }}
            />

            <br/>
            <Divider/>
            <br/>
            <LineChart  stats={{data: this.props.deaths,
                title: 'Total Deaths',
                labels: this.props.date,
                label: 'Deaths',
                backgroundColor: 'rgba(255,69,0,0.2)',
                color: 'black'
            }}
            />

        </div>
    }
}
const mapStateToProps=(state)=>{
    console.log(state.stats)
    return {
        confirmed:state.stats.confirmed,
        deaths:state.stats.deaths,
        recovered:state.stats.recovered,
        date:state.stats.date
    }
}
export default connect(mapStateToProps,{fetchCountry})(statsCountry);