'use client'

import { useSession } from 'next-auth/react'
import React, { useState } from 'react'
import Bottom from '../../components/Bottom/Bottom'
import Header from '../../components/Header/Header'
import SpecialistCard from '../../components/SpecialistList/SpecialistCard/SpecialistCard'
import SpecialistList from '../../components/SpecialistList/SpecialistList'
import Calendar from './Calendar/Calendar'
import { hours, specialists } from './Calendar/data'
import styles from './page.module.css'

const Reservation = () => {
  const { data: session } = useSession()
  const user = session?.user
  const [selectHour, setSelectHour] = useState('')
  const [selectDay, setSelectDay] = useState<any>(null)
  const [listHours, setListHours] = useState([])
  const [selectSpecialist, setSelectSpecialist] = useState('')

  const serviceId = location.search.replace('?id=', '')

  const setOrderStorage = (storageKey: string, value: {}) => {
    localStorage.setItem(storageKey, JSON.stringify(value))
  }

  return (
    <div className={styles.reservationContainer}>
      <Header
        buttonLeft={true}
        buttonLeftHref={'/services'}
        title={'Reservation'}
        buttonRight={true}
        isWhite={false}
      />
      <div className={styles.mainContentReservation}>
        <section className={styles.sectionCalendar}>
          <h4 className={styles.sectionTitle}>Select Date</h4>
          <Calendar setListHours={setListHours} setSelectDay={setSelectDay} />
        </section>
        <section className={styles.sectionTime}>
          <h4 className={styles.sectionTitle}>Select Time</h4>
          <ul className={styles.listHours}>
            {listHours &&
              listHours.map((hour, index) => (
                <li
                  className={
                    selectHour === hour
                      ? styles.hourSelect + ' ' + styles.hour
                      : styles.hour
                  }
                  key={index}
                  onClick={() => setSelectHour(hour)}
                >
                  {hour}
                </li>
              ))}
          </ul>
        </section>
        <section className={styles.sectionSpecialist}>
          <h4 className={styles.sectionTitle}>Select Specialist</h4>
          {/* <SpecialistList /> */}
        </section>
      </div>
      <Bottom
        href="/order"
        label={'Continue'}
        action={() =>
          setOrderStorage('test', {
            service: serviceId,
            date: selectDay,
            user: user,
            status: 'come',
            specialistId: 'claire',
          })
        }
      />
    </div>
  )
}

export default Reservation
