import { takeLatest } from 'redux-saga/effects';
import ACTION_TYPES from '../actions/types';
import { createHeroSaga, getHeroesSaga, getHeroSaga } from './heroesSagas';

function* rootSaga() {
    yield takeLatest(ACTION_TYPES.CREATE_HERO, createHeroSaga);
    yield takeLatest(ACTION_TYPES.GET_HERO, getHeroSaga);
    yield takeLatest(ACTION_TYPES.GET_HEROES, getHeroesSaga);

}
export default rootSaga;
