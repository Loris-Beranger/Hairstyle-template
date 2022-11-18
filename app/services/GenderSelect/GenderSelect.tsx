'use client'

import React, { useState } from 'react'
import styles from './genderSelect.module.css'

const GenderSelect = () => {
  const [value, setValue] = useState(0)
  return (
    <div className={styles.genderSelectContainer}>
      <button
        className={value == 0 ? styles.buttonSelected : styles.button}
        onClick={() => setValue(0)}
      >
        Woman
      </button>
      <button
        className={value == 0 ? styles.button : styles.buttonSelected}
        onClick={() => setValue(1)}
      >
        Man
      </button>
    </div>
  )
}

export default GenderSelect
