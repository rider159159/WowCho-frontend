import { http } from '@/utils/axios'
import { ApiResponse } from '@/interface'

export const fetchUpload = {
  upload: async (data?: any, isUnLoad?: boolean): Promise<ApiResponse> => await http.httpPost('/upload', data, isUnLoad)
}
