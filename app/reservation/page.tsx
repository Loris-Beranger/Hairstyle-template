'use client'

import React, { useState } from 'react'
import Bottom from '../../components/Bottom/Bottom'
import Header from '../../components/Header/Header'
import SpecialistCard from '../../components/SpecialistCard/SpecialistCard'
import Calendar from './Calendar/Calendar'
import { hours, specialists } from './Calendar/data'
import styles from './page.module.css'

const Reservation = () => {
  const [selectHour, setSelectHour] = useState('')
  const [listHours, setListHours] = useState([])
  const [selectSpecialist, setSelectSpecialist] = useState('')

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
          <Calendar setListHours={setListHours} />
        </section>
        <section className={styles.sectionTime}>
          <h4 className={styles.sectionTitle}>Select Time</h4>
          <ul className={styles.listHours}>
            {listHours.map((hour, index) => (
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
          <ul className={styles.listSpecialists}>
            {specialists.map((specialist, index) => (
              <SpecialistCard
                key={index}
                name={specialist}
                selected={selectSpecialist === specialist}
                setSelectSpecialist={setSelectSpecialist}
              />
            ))}
          </ul>
        </section>
      </div>
      <Bottom href="/" label={'Continue'} />
    </div>
  )
}

export default Reservation
