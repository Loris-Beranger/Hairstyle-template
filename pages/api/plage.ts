import { compareAsc, eachDayOfInterval, format, isSameDay, sub } from 'date-fns'
import type { NextApiRequest, NextApiResponse } from 'next'
import { getAllDaysInMonth } from '../../app/utils/utils'
import { plageHours, prisma } from '../../components/data'

type Data = {
  calendar: any
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method === 'GET') {
    const orderList = await prisma.order.findMany()

    let calendarListNow: any = []
    let calendarListNext: any = []
    const dateNow = new Date()
    const dateNext = new Date()
    dateNext.setMonth(dateNow.getMonth() + 1)
    const dates = [dateNow, dateNext]

    dates.map((date, index) => {
      const daysOfMonth = getAllDaysInMonth(date)
      daysOfMonth.forEach((day) => {
        let newListPlage: string[] = plageHours
        orderList.map((order) => {
          const date = order.date

          if (isSameDay(day, date)) {
            let plage = format(date, 'HH:mm')
            newListPlage = newListPlage.filter((e) => e !== plage)
          }
        })
        if (index === 0) {
          calendarListNow.push({
            date: day,
            plage: newListPlage,
            number: day.getDate(),
            isOut: compareAsc(day, sub(dateNow, { days: 1 })) === -1,
          })
        } else {
          calendarListNext.push({
            date: day,
            plage: newListPlage,
            number: day.getDate(),
            isOut:
              eachDayOfInterval({
                start: dateNow,
                end: day,
              }).length > 30,
          })
        }
      })
    })

    res.status(200).json({
      calendar: [
        { date: format(dateNow, 'MMMM yyyy'), list: calendarListNow },
        { date: format(dateNext, 'MMMM yyyy'), list: calendarListNext },
      ],
    })
  } else {
  }
}
