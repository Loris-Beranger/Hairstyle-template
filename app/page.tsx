import Image from 'next/image'
import styles from './page.module.css'
import { HiOutlineLocationMarker } from 'react-icons/hi'
import { FiPhone, FiMessageCircle } from 'react-icons/fi'

export default function Home() {
  return (
    <div className={styles.homeContainer}>
      <div className={styles.imageCaroussel}></div>
      <div className={styles.contentContainer}>
        <div className={styles.salonInfosContainer}>
          <h1 className={styles.salonName}>Style barber shop</h1>
          <p className={styles.location}>
            <HiOutlineLocationMarker size={15} /> 30124 Alpharetta W 2nd, MT
          </p>
        </div>
        <ul className={styles.listButtons}>
          <li className={styles.button}>
            <div className={styles.logoContainer}>
              <HiOutlineLocationMarker size={25} color={'#394574'} />
            </div>
            <span className={styles.buttonLabel}>Direction</span>
          </li>
          <li className={styles.button}>
            <div className={styles.logoContainer}>
              <FiPhone size={25} color={'#394574'} />
            </div>
            <span className={styles.buttonLabel}>Call</span>
          </li>
          <li className={styles.button}>
            <div className={styles.logoContainer}>
              <FiMessageCircle size={25} color={'#394574'} />
            </div>
            <span className={styles.buttonLabel}>Message</span>
          </li>
        </ul>
        <section className={styles.sectionSpectialists}>
          <h2 className={styles.sectionSpecialistsTitle}>Our specialists</h2>
          <ul className={styles.listSpecialists}>
            <li className={styles.specialist}>
              <div className={styles.imageSpecialist}></div>
              <span className={styles.specialistName}>Miles</span>
            </li>
            <li className={styles.specialist}>
              <div className={styles.imageSpecialist}></div>
              <span className={styles.specialistName}>Gibson</span>
            </li>
            <li className={styles.specialist}>
              <div className={styles.imageSpecialist}></div>
              <span className={styles.specialistName}>Weir</span>
            </li>
            <li className={styles.specialist}>
              <div className={styles.imageSpecialist}></div>
              <span className={styles.specialistName}>Justin</span>
            </li>
            <li className={styles.specialist}>
              <div className={styles.imageSpecialist}></div>
              <span className={styles.specialistName}>Mike</span>
            </li>
            <li className={styles.specialist}>
              <div className={styles.imageSpecialist}></div>
              <span className={styles.specialistName}>Tyler</span>
            </li>
          </ul>
        </section>
      </div>
    </div>
  )
}
