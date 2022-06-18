import { TemperatureActionTypes } from "./temperature.types"

export const fetchTemperatureDataStart = (payload) => ({
    type: TemperatureActionTypes.FETCH_TEMPERATURE_DATA_START,
    payload
})

export const fetchTemperatureDataSuccess = (data) => ({
    type: TemperatureActionTypes.FETCH_TEMPERATURE_DATA_SUCCESS,
    payload: data
})

export const fetchTemperatureDataFailure = (error) => ({
    type: TemperatureActionTypes.FETCH_TEMPERATURE_DATA_FAILURE,
    payload: error
})

export const clearTemperatureData = () => ({
    type: TemperatureActionTypes.CLEAR_TEMPERATURE_DATA
})