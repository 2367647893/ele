import { createStore, compose, combineReducers, applyMiddleware } from 'redux'
import promise from 'redux-promise'
import thunk from 'redux-thunk'
import { persistReducer } from 'redux-persist'
import sessionStorage from 'redux-persist/lib/storage/session'
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2'
import reduces from './reducer'

const rootPersistConfig = {
  key: 'root',
  storage: sessionStorage,
  stateReconciler: autoMergeLevel2,
  whitelist: [], // 白名单
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(
  persistReducer(rootPersistConfig, combineReducers(reduces)), 
  composeEnhancers(applyMiddleware(promise, thunk)),
)

export default store 
