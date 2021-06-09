import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import { reducer, initialState } from './reducer';

const middlewares = [thunk];
const store = createStore(reducer, initialState, applyMiddleware(...middlewares));

export default store;