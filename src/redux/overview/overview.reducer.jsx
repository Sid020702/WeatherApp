import OverviewActionTypes from "./overview.types";

const INITIAL_STATE = {
    isFetching: false,
    data: {},
    errorMessage: null
}

const overviewReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case OverviewActionTypes.GET_CURRENT_POSITION:
            return state
        case OverviewActionTypes.DISPLAY_WEATHER:
            return state

        case OverviewActionTypes.FETCH_DATA_START:
            return {
                ...state,
                isFetching: true
            }

        case OverviewActionTypes.FETCH_DATA_SUCCESS:
            return {
                ...state,
                isFetching: false,
                data: action.payload
            }

        case OverviewActionTypes.FETCH_DATA_FAILURE:
            return {
                ...state,
                isFetching: false,
                errorMessage: action.payload

            }
        default:
            return state;
    }
}
export default overviewReducer