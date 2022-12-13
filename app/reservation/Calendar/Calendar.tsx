'use client'

import React, { ReactNode, useEffect, useState } from 'react'
import styles from './calendar.module.css'
import { HiOutlineChevronLeft, HiOutlineChevronRight } from 'react-icons/hi'
import { format, getDay, getDaysInMonth, isSameDay } from 'date-fns'
import { GetCalendar } from './hooks'
import { Spin } from 'react-cssfx-loading'

interface calendarProps {
  setListHours: (value: []) => void
}

const Calendar = ({ setListHours }: calendarProps) => {
  const { data, isLoading } = GetCalendar()
  const [calendarPage, setCalendarPage] = useState(0)
  const calendar = data?.data.calendar[calendarPage]

  const dateNow = new Date()
  const currentDay = dateNow.getDate()

  console.log(calendar)

  const [select, setSelect] = useState(currentDay)

  useEffect(() => {
    if (calendar) {
      setListHours(calendar.list[currentDay - 1].plage)
    }
  }, [calendar, currentDay, setListHours])

  if (isLoading) {
    return (
      <div className={styles.loadingContainer}>
        <Spin color={'#fb7400'} />
      </div>
    )
  }

  return (
    <div className={styles.calendarContainer}>
      <div className={styles.topContent}>
        <div className={styles.navigationContainer}>
          {calendarPage === 1 && (
            <span
              className={styles.buttonsTab}
              onClick={() => {
                setCalendarPage(0)
                setSelect(-1)
              }}
            >
              <HiOutlineChevronLeft />
            </span>
          )}
          <h4 className={styles.monthTitle}>{calendar.date}</h4>
          {calendarPage === 0 && (
            <span
              className={styles.buttonsTab}
              onClick={() => {
                setCalendarPage(1)
                setSelect(-1)
              }}
            >
              <HiOutlineChevronRight />
            </span>
          )}
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
        {calendar.list.map((day: any, index: number) => (
          <div
            key={index}
            className={
              select == day.number
                ? styles.daySelect + ' ' + styles.day
                : isSameDay(dateNow, new Date(day.date))
                ? styles.currentDay + ' ' + styles.day
                : day.isOut
                ? styles.dayOut + ' ' + styles.day
                : styles.day
            }
            onClick={() => {
              if (!day.isOut) {
                setSelect(day.number)
                setListHours(day.plage)
              }
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
