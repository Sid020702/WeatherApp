import { call, put, takeLatest, all } from 'redux-saga/effects'
import { fetchDataStart, fetchDataFailure, fetchDataSuccess } from './overview.actions'
import OverviewActionTypes from './overview.types';
import { getDate, getHumidityArr, getIconArr } from './overview.utils';
import axios from 'axios';

export function* fetchDataStartAsync(lat, lon) {
    try {
        yield put(fetchDataStart())
        const url = yield `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=0cead94107309adbe451fe9e61707804`
        const res = yield axios.get(url)
        const data = yield res.data
        const url2 = yield `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=0cead94107309adbe451fe9e61707804`
        const res2 = yield axios.get(url2)
        const data2 = yield res2.data
        let d = yield new Date()
        let day = yield d.getDate()
        const humidity_arr = yield getHumidityArr(data2, day)
        const timezone = data.timezone
        const temp = yield data.main.temp;
        const windSpeed = yield data.wind.speed;
        const location = yield data.name
        const humidity = yield data.main.humidity;
        const weather = yield data.weather[0].main;
        const icon = yield data.weather[0].icon;
        const icon_arr = getIconArr(data2, day)
        const date = yield getDate(timezone)
        yield put(fetchDataSuccess({
            temp,
            windSpeed,
            lat,
            lon,
            location,
            humidity,
            humidity_arr,
            weather,
            icon,
            icon_arr,
            date
        }))
    } catch (error) {
        yield put(fetchDataFailure(error));
    }
}

export function* getCurrentPositionAsync({ payload }) {
    const lat = yield payload.coords.latitude
    const lon = yield payload.coords.longitude
    yield fetchDataStartAsync(lat, lon)
}

export function* displayWeatherAsync({ payload }) {
    const url = `http://api.openweathermap.org/geo/1.0/direct?q=${payload}&limit=1&appid=0cead94107309adbe451fe9e61707804`
    const res = yield axios.get(url)
    const data = yield res.data
    const lat = yield data[0].lat
    const lon = yield data[0].lon
    yield fetchDataStartAsync(lat, lon)
}





export function* getCurrentPosition() {
    yield takeLatest(OverviewActionTypes.GET_CURRENT_POSITION, getCurrentPositionAsync);
}

export function* displayWeather() {
    yield takeLatest(OverviewActionTypes.DISPLAY_WEATHER, displayWeatherAsync)
}

export function* overviewSagas() {
    yield (all([
        call(getCurrentPosition),
        call(displayWeather)
    ]))
}