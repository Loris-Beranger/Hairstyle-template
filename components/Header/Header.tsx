import React from 'react'
import { VscArrowLeft } from 'react-icons/vsc'
import { AiOutlineUser } from 'react-icons/ai'
import styles from './header.module.css'
import Link from 'next/link'

interface headerProps {
  buttonLeft: boolean
  buttonLeftHref: string
  title: string
  buttonRight: boolean
  isWhite: boolean
}

const Header = ({
  buttonLeft,
  buttonLeftHref,
  title,
  buttonRight,
  isWhite,
}: headerProps) => {
  return (
    <div className={styles.headerContainer}>
      {buttonLeft && (
        <Link
          href={buttonLeftHref}
          className={
            isWhite
              ? `${styles.buttonBack} ${styles.buttonBackWhite}`
              : styles.buttonBack
          }
        >
          <VscArrowLeft size={25} />
        </Link>
      )}
      <h1
        className={
          isWhite
            ? `${styles.headerTitle} ${styles.headerTitleWhite}`
            : styles.headerTitle
        }
      >
        {title}
      </h1>
      {buttonRight && (
        <button
          className={
            isWhite
              ? `${styles.buttonAccount} ${styles.buttonAccountWhite}`
              : styles.buttonAccount
          }
        >
          <AiOutlineUser size={25} />
        </button>
      )}
    </div>
  )
}

export default Header
