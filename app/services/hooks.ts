import axios from 'axios'
import { useQuery } from 'react-query'

export const GetServices = () => {
  return useQuery(['services'], () => axios.get('api/service'))
}
