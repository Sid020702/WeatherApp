import { TemperatureActionTypes } from "./temperature.types"
const INITIAL_STATE = {
    isFetching: false,
    chart_arr: {
        temp_arr: [],
        label_arr: []
    },
    errorMessage: null
}

const temperatureReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case TemperatureActionTypes.FETCH_TEMPERATURE_DATA_START:
            return {
                ...state,
                isFetching: true
            }
        case TemperatureActionTypes.FETCH_TEMPERATURE_DATA_SUCCESS:
            return {
                ...state,
                isFetching: false,
                chart_arr: action.payload
            }
        case TemperatureActionTypes.FETCH_TEMPERATURE_DATA_FAILURE:
            return {
                ...state,
                isFetching: false,
                errorMessage: action.payload
            }
        case TemperatureActionTypes.CLEAR_TEMPERATURE_DATA:
            return ({
                ...state,
                chart_arr: {
                    temp_arr: [],
                    label_arr: []
                }
            })

        default:
            return state
    }

}

export default temperatureReducer