import { call, put, takeLatest, all } from 'redux-saga/effects'
import { fetchTemperatureDataFailure, fetchTemperatureDataSuccess } from './temperature.actions'
import { getTempArr } from './temperature.utils'
import { TemperatureActionTypes } from './temperature.types'
import axios from 'axios'


export function* fetchTemperatureDataStartAsync({ payload: { lat, lon, day } }) {
    try {
        const url = yield `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=0cead94107309adbe451fe9e61707804`
        const res = yield axios.get(url)
        const data = yield res.data

        const chart_arr = yield getTempArr(data, day)
        yield put(fetchTemperatureDataSuccess(chart_arr))
    } catch (error) {
        yield put(fetchTemperatureDataFailure(error.message))
    }
}

export function* fetchTemperatureDataStart() {
    yield takeLatest(TemperatureActionTypes.FETCH_TEMPERATURE_DATA_START, fetchTemperatureDataStartAsync)
}

export function* temperatureSagas() {
    yield (all([
        call(fetchTemperatureDataStart)
    ]
    ))
}
