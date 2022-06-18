import React from "react";
import { useState, useEffect } from "react";
import { displayWeather, getCurrentPosition } from "../../redux/overview/overview.actions";
import { connect } from "react-redux";

const Overview = ({ location, temp, windSpeed, humidity, weather, icon, showCurrentPosition, displayWeather, date }) => {
    const [query, setQuery] = useState('')
    const handleChange = (e) => {
        const value = e.target.value;
        setQuery(value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        displayWeather(query)

    }

    useEffect(() => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(showCurrentPosition)
        }
        else {
            alert("Geolocation not supported by this browser")
        }
    }, [showCurrentPosition])

    useEffect(() => {
        if (location)
            setQuery(location)
    }, [location])


    return (
        <div className="  row-span-2 flex flex-col p-5 items-center">
            <div className="search flex justify-center items-center my-6">
                <span className=" text-2xl text-black font-semibold mx-2 font-sans">Your city</span>
                <form action="post" onSubmit={(e) => handleSubmit(e)}>
                    <input type="text" className=" border-2 border-gray-400 text-xl rounded-lg p-1 mx-2 fonr-sans" onChange={(e) => handleChange(e)} value={query}
                    ></input>
                </form>
            </div>
            <div className="my-6  date flex items-center justify-center text-gray-500 font-sans text-lg font-semibold">{date ? (`${date.hours}:${String("0" + date.minutes).slice(-2)}, ${date.weekday}, ${date.month} ${date.day}, ${date.year}`) : undefined}</div>
            <div className="my-6 temperature flex items-center justify-center w-full">
                <div className="symbol w-1/4">
                    {
                        icon ? (<img className="w-full" src={`http://openweathermap.org/img/wn/${icon}.png`} alt="" />)
                            :
                            ''
                    }
                </div>
                <div className="temp-val text-5xl font-sans font-bold">{temp ? (temp - 273).toFixed(2) : undefined}&#xb0;C</div>
            </div>
            <div className="weather text-4xl font-sans font-bold">{weather}</div>
            <div className="other my-16 flex justify-center items-center">
                <div className="flex flex-col items-center mx-5">
                    <span className="humidity text-gray-500 font-sans font-semibold text-lg">Humidity</span>
                    <span className="value font-sans text-lg">{humidity}%</span>
                </div>
                <div className="flex flex-col items-center mx-5">
                    <span className="wind text-gray-500 font-sans font-semibold text-lg">Wind speed</span>
                    <span className="value font-sans text-lg">{windSpeed} km/j</span>
                </div>
            </div>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    showCurrentPosition: (position) => dispatch(getCurrentPosition(position)),
    displayWeather: (location) => dispatch(displayWeather(location))
})

const mapStateToProps = state => ({
    location: state.overview.data.location,
    temp: state.overview.data.temp,
    windSpeed: state.overview.data.windSpeed,
    humidity: state.overview.data.humidity,
    weather: state.overview.data.weather,
    icon: state.overview.data.icon,
    date: state.overview.data.date

})

export default connect(mapStateToProps, mapDispatchToProps)(Overview)