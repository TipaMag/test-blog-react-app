import { createStore, combineReducers, applyMiddleware, compose } from "redux"
import appReducer from "./app-reducer"

import thunkMiddleware from 'redux-thunk'
import postsReducer from "./posts-reducer"
import { reducer as formReducer } from 'redux-form'

let reducers = combineReducers({
   app: appReducer,
   postsPage: postsReducer,

   form: formReducer
})


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)))

// let store = createStore(reducers, applyMiddleware(thunkMiddleware)) // applyMiddleware - for dispatching thunk function 

window.__store__ = store

export default store