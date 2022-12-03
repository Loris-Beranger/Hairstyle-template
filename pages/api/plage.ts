// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { format, isSameDay } from 'date-fns'
import type { NextApiRequest, NextApiResponse } from 'next'
import { getAllDaysInMonth } from '../../app/utils/utils'
import { orderList, plageHours } from '../../components/data'

type Data = {
  calendar: any
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method === 'GET') {
    const dateNow = new Date()
    const daysOfMonth = getAllDaysInMonth(dateNow)
    let calendarList: { date: Date; plage: string[]; number: number }[] = []

    daysOfMonth.forEach((day) => {
      let newListPlage: string[] = plageHours
      orderList.map((order) => {
        const date = order.date
        if (isSameDay(day, date)) {
          let plage = format(date, 'HH:mm')
          newListPlage = newListPlage.filter((e) => e !== plage)
        }
      })
      calendarList.push({
        date: day,
        plage: newListPlage,
        number: day.getDate(),
      })
    })

    res.status(200).json({ calendar: calendarList })
  } else {
  }
}
