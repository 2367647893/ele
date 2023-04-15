import _ from 'lodash'
import { SET_FORM_NAME, SET_FORM_OPTIONS } from '@/constants/actionTypes'

const defaultStatus = {
  data: {},
}

export default function formReduce (state = defaultStatus, action) {
  switch (action.type) {
    case SET_FORM_NAME:
      return state
    
    case SET_FORM_OPTIONS:
      return { ...state, data: action.payload }

    default:
      return state
  }
}
