import { SET_FORM_NAME, SET_FORM_OPTIONS } from '@/constants/actionTypes'
import { post } from '@/utils/request'
import api from '@/services/api'

// 添加数据
export function setData (opt) {
  return {
    type: SET_FORM_NAME,
    payload: post(api.samplePut, opt),
  }
}

// 添加数据
export function setDataOption (opt) {
  return {
    type: SET_FORM_OPTIONS,
    payload: opt,
  }
}
