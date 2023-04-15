import { createActions } from 'redux-actions'
import { SET_HOME_NAME, SET_HOME_DATA } from '@/constants/actionTypes'
import { post } from '@/utils/request'
import api from '@/services/api'

import { getData } from '@/services'

// 简单 的 请求接口
export function setName (opt) {
  return {
    type: 'SET_HOME_NAME',
    payload: getData(opt),
  }
}