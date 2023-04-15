import _ from 'lodash'
// import {handleActions } from 'redux-actions'
// import { SET_HOME_NAME } from '@/constants/actionTypes'

const defaultStatus = {
  name: [],
  data: [],
  total: 0,
}

// export default handleActions({
//   [SET_HOME_NAME]:(state,action)=>({
//     ...state,
//     name:action.payload.result.list
//   })
// },defaultStatus)


// 简单的 存储
export default function homeReduce (state = defaultStatus, action) {
  // console.log(action,'action-raducer');
  switch (action.type) {
    case 'SET_HOME_NAME':

      return { ...state, name: action.payload.result.list}

    case 'SET_HOME_DATA':
    
      return { ...state, data:action.payload }
    
    default:
      return state
  }
}