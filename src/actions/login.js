import { SET_LOGIN_NAME } from '@/constants/actionTypes'
import { post } from '@/utils/request'
import api from '@/services/api'

export function loginAction (opt) {
  return {
    type: SET_LOGIN_NAME,
    payload: post(api.sampleLogin, opt),
  }
}
