import Link from 'next/link'
import React from 'react'
import styles from './bottom.module.css'

interface bottomProps {
  href: string
  label: string
}
const Bottom = ({ href, label }: bottomProps) => {
  return (
    <div className={styles.bottomContainer}>
      <Link href={href} className={styles.bottomButton}>
        {label}
      </Link>
    </div>
  )
}

export default Bottom
