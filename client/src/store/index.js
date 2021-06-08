import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from '../reducers';
import createSagaMiddleware from 'redux-saga';
import rootSaga from '../sagas';


const sagaMiddleware = createSagaMiddleware();

const rootMiddleware = composeWithDevTools(applyMiddleware(sagaMiddleware));

const store = createStore(rootReducer, rootMiddleware);

sagaMiddleware.run(rootSaga);

export default store;
