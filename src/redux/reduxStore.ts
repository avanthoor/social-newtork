import {applyMiddleware, combineReducers, createStore } from "redux";
import thunkMiddlleWare from 'redux-thunk'

let reducers = combineReducers({})

let store = createStore(reducers, applyMiddleware(thunkMiddlleWare))


