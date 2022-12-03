import axios from 'axios'
import { useQuery } from 'react-query'

export const GetCalendar = () => {
  return useQuery(['calendar'], () => axios.get('api/plage'))
}
