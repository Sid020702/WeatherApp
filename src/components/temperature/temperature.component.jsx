import React from "react";
import { connect } from "react-redux";
import { BarChart } from "../bar-chart/bar-chart.component";
import { useState, useEffect } from "react";
const Temperature = ({ temp_arr, label_arr }) => {
    const [chartData, setChartData] = useState({
        labels: [],
        datasets: [

            {
                label: "Temperature",
                data: [],
                backgroundColor: [
                    'rgb(96, 165, 250, 0.85)'
                ]
            }
        ]
    })

    useEffect(() => {
        setChartData({
            labels: label_arr,
            datasets: [

                {
                    label: "Temperature (Deg Cel)",
                    data: temp_arr,
                    backgroundColor: [
                        'rgb(96, 165, 250, 0.85)'
                    ]
                }
            ]
        })

    }, [temp_arr, label_arr])
    return (
        <div className="border-2 border-black">
            {
                <BarChart chartData={chartData} />

            }
        </div>
    )
}

const mapStateToProps = state => ({
    label_arr: state.temperature.chart_arr.label_arr,
    temp_arr: state.temperature.chart_arr.temp_arr
})
export default connect(mapStateToProps)(Temperature)