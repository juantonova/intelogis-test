import {call, put, takeEvery } from 'redux-saga/effects';
import { setRoute } from '../slices/applicationSlice';
import { fetchRoute } from '../../actions/api/routeApi';


function* workGetRoute(coordinates) {
    try {
        yield put(setRoute([]))
        const response = yield call(fetchRoute, coordinates.payload)
        const data = response?.routes[0]?.geometry?.coordinates || [];
        const way = data.map(el => el.reverse().map(x => x.toString()))
        yield put(setRoute(way))
    } catch(err) {
        console.log(err)
    }
}

function* routeApi() {
    yield takeEvery('applications/getRoute', workGetRoute);
}

export default routeApi;