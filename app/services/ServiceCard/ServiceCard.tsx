import React from 'react'
import styles from './serviceCard.module.css'

const ServiceCard = () => {
  return (
    <div className={styles.serviceCardContainer}>
      <div className={styles.serviceCardImage}></div>
      <div className={styles.serviceCardInfos}>
        <div className={styles.serviceCardInfosContainer}>
          <p className={styles.serviceCardTitle}>Deep Hair Coloring</p>
        </div>
        <p className={styles.serviceCardPrice}>$40.00</p>
      </div>
      <div className={styles.durationContainer}></div>
      <span className={styles.serviceCardDuration}>30min</span>
    </div>
  )
}

export default ServiceCard
