'use client'

import React, { useState } from 'react'
import styles from './genderSelect.module.css'

interface genderSelectProps {
  genderValue: number
  setGenderValue: (value: number) => void
}

const GenderSelect = ({ genderValue, setGenderValue }: genderSelectProps) => {
  return (
    <div className={styles.genderSelectContainer}>
      <button
        className={genderValue == 0 ? styles.buttonSelected : styles.button}
        onClick={() => setGenderValue(0)}
      >
        Woman
      </button>
      <button
        className={genderValue == 0 ? styles.button : styles.buttonSelected}
        onClick={() => setGenderValue(1)}
      >
        Man
      </button>
    </div>
  )
}

export default GenderSelect
