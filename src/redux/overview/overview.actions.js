import OverviewActionTypes from "./overview.types"

export const displayWeather = (location) => ({
    type: OverviewActionTypes.DISPLAY_WEATHER,
    payload: location
})

export const getCurrentPosition = (position) => ({
    type: OverviewActionTypes.GET_CURRENT_POSITION,
    payload: position
})

export const fetchDataStart = () => ({
    type: OverviewActionTypes.FETCH_DATA_START
})

export const fetchDataSuccess = (data) => ({
    type: OverviewActionTypes.FETCH_DATA_SUCCESS,
    payload: data
})

export const fetchDataFailure = (error) => ({
    type: OverviewActionTypes.FETCH_DATA_FAILURE,
    payload: error.message
})
