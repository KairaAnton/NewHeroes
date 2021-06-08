import { put } from 'redux-saga/effects';
import {
    createHeroError,
    createHeroRequest,
    createHeroSuccess,
    getHeroesError,
    getHeroesRequest,
    getHeroesSuccess,
    getHeroRequest,
    getHeroError,
    getHeroSuccess,

} from '../actions/heroesActionCreators';
import * as API from './../api';

export function* createHeroSaga({ data }) {
    yield put(createHeroRequest());

    try {
        const {
            data: { data: hero }
        } = yield API.createHero(data);
        yield put(createHeroSuccess(hero));
    } catch (error) {
        yield put(createHeroError(error));
    }
}

export function* getHeroesSaga(action) {
    const { params } = action;

    yield put(getHeroesRequest());

    try {
        const {
            data: { data: foundHeroes }
        } = yield API.getHeroes(params);
        yield put(getHeroesSuccess(foundHeroes));
    } catch (error) {
        yield put(getHeroesError(error));
    }
}

export function* getHeroSaga(action) {
    const { params } = action;
    yield put(getHeroRequest());

    try {
        const {
            data: { data: foundHero }
        } = yield API.getHero(params);
        yield put(getHeroSuccess(foundHero));
    } catch (error) {
        yield put(getHeroError(error));
    }
}