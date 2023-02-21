'use client'

import React from 'react'
import styles from './SpecialistCard.module.css'

interface specialistCardProps {
  data: { name: string; image: string }
  selected: boolean
  setSelectSpecialist: (name: string) => void
}

const SpecialistCard = ({
  data,
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
      onClick={() => setSelectSpecialist(data.name)}
    >
      <div
        className={styles.imageSpecialist}
        style={{
          backgroundImage: `url(${data.image})`,
        }}
      ></div>
      <span
        className={
          selected === true
            ? styles.specialistNameSelect + ' ' + styles.specialistName
            : styles.specialistName
        }
      >
        {data.name}
      </span>
    </li>
  )
}

export default SpecialistCard
