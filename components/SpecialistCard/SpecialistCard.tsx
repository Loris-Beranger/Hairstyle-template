'use client'

import React from 'react'
import styles from './SpecialistCard.module.css'

interface specialistCardProps {
  name: string
  selected: boolean
  setSelectSpecialist: (name: string) => void
}

const SpecialistCard = ({
  name,
  selected,
  setSelectSpecialist,
}: specialistCardProps) => {
  return (
    <li
      className={
        selected === true
          ? styles.specialistSelect + ' ' + styles.specialist
          : styles.specialist
      }
      onClick={() => setSelectSpecialist(name)}
    >
      <div className={styles.imageSpecialist}></div>
      <span
        className={
          selected === true
            ? styles.specialistNameSelect + ' ' + styles.specialistName
            : styles.specialistName
        }
      >
        {name}
      </span>
    </li>
  )
}

export default SpecialistCard
