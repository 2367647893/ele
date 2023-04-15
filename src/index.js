import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { persistStore } from 'redux-persist'
import { PersistGate } from 'redux-persist/lib/integration/react'
import Router from './routers'
import store from './store'

// redux
// redux-persist redux-promise redux-thunk redx-action
// mobx dva redux redux-saga
// 一个 store

// 流程 用户 -> action -> reduce

ReactDOM.render(
  <Provider store={store}>
    {/* <StoreContext.Provider value={store}> */}
      <PersistGate loading={null} persistor={persistStore(store)}>
        <Router />
      </PersistGate>
    {/* </StoreContext.Provider> */}
  </Provider>,
  document.getElementById('root')
)