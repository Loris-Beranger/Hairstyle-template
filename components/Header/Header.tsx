import React from 'react'
import { VscArrowLeft } from 'react-icons/vsc'
import { AiOutlineUser } from 'react-icons/ai'
import styles from './header.module.css'

interface headerProps {
  buttonLeft: boolean
  title: string
  buttonRight: boolean
}

const Header = ({ buttonLeft, title, buttonRight }: headerProps) => {
  return (
    <div className={styles.headerContainer}>
      {buttonLeft && (
        <button className={styles.buttonBack}>
          <VscArrowLeft size={25} />
        </button>
      )}
      <h1 className={styles.headerTitle}>{title}</h1>
      {buttonRight && (
        <button className={styles.buttonAccount}>
          <AiOutlineUser size={25} />
        </button>
      )}
    </div>
  )
}

export default Header
