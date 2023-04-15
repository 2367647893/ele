import { SET_LOGIN_NAME } from '@/constants/actionTypes'

const defaultStatus = {
  token: '',
}

export default function homeReduce (state = defaultStatus, action) {
  switch (action.type) {
    case SET_LOGIN_NAME:
      sessionStorage.setItem('token', action.payload.data.result)
      return { ...state, token: action.payload.data.result }
    
    default:
      return state
  }
}
