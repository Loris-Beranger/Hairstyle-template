import React, { ReactElement, ReactEventHandler } from 'react'
import styles from './serviceCard.module.css'
interface serviceCardProps {
  data: {
    name: string
    price: number
    duration: string
    gender: number
    image: string
  }
  genderValue: number
  action?: () => void
  selected?: boolean
}
const ServiceCard: any = ({
  data,
  genderValue,
  action,
  selected,
}: serviceCardProps) => {
  if (genderValue === data.gender) {
    return (
      <div
        className={
          selected
            ? styles.serviceCardContainer +
              ' ' +
              styles.serviceCardContainerSelected
            : styles.serviceCardContainer
        }
        onClick={action}
      >
        <div
          className={styles.serviceCardImage}
          style={{
            backgroundImage: `url(${data.image})`,
          }}
        ></div>
        <div className={styles.serviceCardInfos}>
          <div className={styles.serviceCardInfosContainer}>
            <p
              className={
                selected
                  ? styles.serviceCardTitle +
                    ' ' +
                    styles.serviceCardTitleSelected
                  : styles.serviceCardTitle
              }
            >
              {data.name}
            </p>
          </div>
          <p
            className={
              selected
                ? styles.serviceCardPrice +
                  ' ' +
                  styles.serviceCardPriceSelected
                : styles.serviceCardPrice
            }
          >
            {data.price}€
          </p>
        </div>
        <div className={styles.durationContainer}></div>
        <span className={styles.serviceCardDuration}>{data.duration}</span>
      </div>
    )
  }
}

export default ServiceCard
