'use client'

import Link from 'next/link'
import React from 'react'
import styles from './bottom.module.css'

interface bottomProps {
  href: string
  label: string
  action?: () => void
  disable?: boolean
}
const Bottom = ({ href, label, action, disable }: bottomProps) => {
  if (disable) {
    return (
      <div className={styles.bottomContainer}>
        <Link
          href={href}
          className={styles.bottomButton + ' ' + styles.bottomButtonDisable}
        >
          {label}
        </Link>
      </div>
    )
  }

  return (
    <div className={styles.bottomContainer} onClick={action}>
      <Link href={href} className={styles.bottomButton}>
        {label}
      </Link>
    </div>
  )
}

export default Bottom
