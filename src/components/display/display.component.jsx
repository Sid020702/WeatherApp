import React from "react";
import { useState } from "react";
import { fetchTemperatureDataStart, clearTemperatureData } from "../../redux/temperature/temperature.actions";
import { connect } from "react-redux";
const DisplayComponent = ({ icon, humidity, day, date, month, lon, lat, fetchTemperatureDataStart, clearTemperatureData }) => {
    const [active, setActive] = useState(false)
    const handleClick = () => {
        if (!active) {
            let element = document.getElementsByClassName("active")[0] || null
            if (element) {
                element.click()
            }
            fetchTemperatureDataStart({
                lon,
                lat,
                day
            })

        }

        else {
            clearTemperatureData()
        }


        setActive(!active)

    }
    return (
        <div className={`${active ? "bg-blue-400 active" : "bg-white"}  rounded-xl h-full w-full flex flex-col items-center justify-center p-2 cursor-pointer`} onClick={handleClick}>
            <div><span className={`${active ? "text-white" : ""} font-sans text-2xl font-semibold`}>{day === date ? "Today" : (month + " " + day)}</span></div>
            <div className="w-full"><img className=" inline-block w-1/2" src={`http://openweathermap.org/img/wn/${icon}.png`} alt="img" /></div>
            <div className=" flex flex-col items-center justify-center w-full h-auto">
                <span className={`${active ? "text-white" : 'text-gray-400'} font-sans text-lg  font-semibold`} > Humidity</span>
                <span className={`${active ? "text-white" : ''} font-sans text-lg`}>{humidity}%</span>
            </div>
        </div >

    )
}


const mapStateToProps = state => ({
    lon: state.overview.data.lon,
    lat: state.overview.data.lat,
    date: state.overview.data.date.day,
    month: state.overview.data.date.month
})

const mapDispatchToProps = dispatch => ({
    fetchTemperatureDataStart: (payload) => dispatch(fetchTemperatureDataStart(payload)),
    clearTemperatureData: () => dispatch(clearTemperatureData())
})

export default connect(mapStateToProps, mapDispatchToProps)(DisplayComponent);