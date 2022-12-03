'use client'

import React, { ReactNode, useEffect, useState } from 'react'
import styles from './calendar.module.css'
import { HiOutlineChevronLeft, HiOutlineChevronRight } from 'react-icons/hi'
import { format, getDay, getDaysInMonth, isSameDay } from 'date-fns'
import { getAllDaysInMonth } from '../../utils/utils'
import axios from 'axios'
import { GetCalendar } from './hooks'

interface calendarProps {
  setListHours: (value: []) => void
}

const Calendar = ({ setListHours }: calendarProps) => {
  const { data, isLoading } = GetCalendar()
  const calendar = data?.data.calendar

  const dateNow = new Date()
  const currentDay = dateNow.getDate()
  const currentMonth = format(dateNow, 'MMMM yyyy')
  const daysOfMonth = getAllDaysInMonth(dateNow)

  console.log(calendar)

  const [daysToDisplay, setDaysToDisplay] = useState([])
  const [select, setSelect] = useState(currentDay)

  useEffect(() => {
    if (calendar) {
      setListHours(calendar[currentDay - 1].plage)
    }
  }, [calendar, currentDay, setListHours])

  if (isLoading) {
    return <div>...Loading</div>
  }

  return (
    <div className={styles.calendarContainer}>
      <div className={styles.topContent}>
        <div className={styles.navigationContainer}>
          <span className={styles.buttonsTab}>
            <HiOutlineChevronLeft />
          </span>
          <h4 className={styles.monthTitle}>{currentMonth}</h4>
          <span className={styles.buttonsTab}>
            <HiOutlineChevronRight />
          </span>
        </div>
        <div className={styles.listDayContainer}>
          <span>Mon</span>
          <span>Tue</span>
          <span>Wed</span>
          <span>Thi</span>
          <span>Fri</span>
          <span>Sat</span>
          <span>Sun</span>
        </div>
      </div>
      <div className={styles.mainContentContainer}>
        {calendar.map((day: any, index: number) => (
          <div
            key={index}
            className={
              select == day.number
                ? styles.daySelect + ' ' + styles.day
                : currentDay === day.number
                ? styles.currentDay + ' ' + styles.day
                : styles.day
            }
            onClick={() => {
              setSelect(day.number)
              setListHours(day.plage)
            }}
          >
            {day.number}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Calendar
