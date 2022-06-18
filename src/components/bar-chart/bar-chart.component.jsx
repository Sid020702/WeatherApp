import { Bar } from "react-chartjs-2"
import Chart from 'chart.js/auto'
export const BarChart = ({ chartData }) => {
    console.log(chartData)
    return (
        <div className="w-full h-full">
            <Bar
                data={chartData}
                options={{
                    plugins: {
                        title: {
                            display: true,
                            text: "3-Hourly Temperatures"
                        },
                        legend: {
                            display: true,
                            position: "bottom"
                        }
                    }
                }} />
        </div>
    )
}