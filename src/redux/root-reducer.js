import { combineReducers } from 'redux'
import overviewReducer from './overview/overview.reducer'
import temperatureReducer from './temperature/temperature.reducer';

export default combineReducers({
    overview: overviewReducer,
    temperature: temperatureReducer
});