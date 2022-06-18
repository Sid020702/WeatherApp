import { all, call } from 'redux-saga/effects';
import { overviewSagas } from './overview/overview.sagas';
import { temperatureSagas } from './temperature/temperature.sagas';

export default function* rootSaga() {
    yield all([
        call(overviewSagas),
        call(temperatureSagas)
    ])
}