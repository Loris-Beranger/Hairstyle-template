import Image from 'next/image'
import styles from './page.module.css'
import { HiOutlineLocationMarker } from 'react-icons/hi'
import { FiPhone, FiMessageCircle } from 'react-icons/fi'
import Header from '../components/Header/Header'
import Bottom from '../components/Bottom/Bottom'
import SpecialistCard from '../components/SpecialistList/SpecialistCard/SpecialistCard'
import { specialists } from './reservation/Calendar/data'
import SpecialistList from '../components/SpecialistList/SpecialistList'
import { prisma } from '../components/data'

export default async function Home() {
  const specialists = await prisma.specialist.findMany()
  console.log(specialists)

  return (
    <div className={styles.homeContainer}>
      <Header
        buttonLeft={false}
        buttonLeftHref={''}
        title={''}
        buttonRight={true}
        isWhite={true}
      />
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
          <SpecialistList data={specialists} />
        </section>
      </div>
      <Bottom href="/services" label={'Book now'} />
    </div>
  )
}
