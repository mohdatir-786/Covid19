import React from "react";
import {Line} from 'react-chartjs-2';
import {Container, Paper} from "@material-ui/core";
const lineChart=(props)=>{
    return <Container maxWidth='md' style={{marginBottom:"20px"}}>
        <Paper elevation={3} style={{height:"400px",backgroundColor:"#c7ddc7"}}>
            <Line
                data={{
                    labels: props.stats.labels,
                    datasets: [
                        {
                            label: props.stats.label,
                            fill: true,
                            lineTension: 0.5,
                            borderColor: props.stats.color,
                            backgroundColor: props.stats.backgroundColor,
                            borderWidth: 2,
                            data: props.stats.data,
                        }
                    ]
                }}
                options={{
                    backgroundColor: "#000000",
                    responsive: true,
                    maintainAspectRatio: false,
                    title:{
                        display:true,
                        text: props.stats.title,
                        fontSize:20,
                        fontColor: '#000000'
                    },
                    label: {
                        fontColor: '#000000'
                    },
                    legend:{
                        display:true,
                        position:'bottom',
                        fontColor: '#000000',
                        labels: {
                            fontColor: '#000000'
                        }
                    },
                    scales: {
                        yAxes: [{
                            ticks: {
                                fontColor: '#000000'
                            },
                        }],
                        xAxes: [{
                            ticks: {
                                fontColor: '#000000'
                            },
                        }]
                    }
                }}
            />
        </Paper>
    </Container>
}
export default lineChart;