import request from '@/utils/request'
import api from '@/services/api'

export const getData = opt => request.get(api.sampleList, opt)
