import React from "react";
import DisplayComponent from "../display/display.component";
import { connect } from "react-redux";
const Humidity = ({ icon_arr, humidity_arr, date }) => {
    let param = date ? date.day : null
    const returnDay = () => {
        return (param++)
    }

    return (
        <div className="  flex items-center justify-center">
            {icon_arr && humidity_arr ?
                icon_arr.map((icon, ind) => {

                    return <DisplayComponent key={ind} icon={icon} humidity={humidity_arr[ind]} day={returnDay()}></DisplayComponent>
                })
                :
                null

            }
        </div>
    )
}

const mapStateToProps = (state) => ({
    date: state.overview.data.date,
    icon_arr: state.overview.data.icon_arr,
    humidity_arr: state.overview.data.humidity_arr
})

export default connect(mapStateToProps)(Humidity)