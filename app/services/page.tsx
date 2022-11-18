import GenderSelect from './GenderSelect/GenderSelect'
import Header from '../../components/Header/Header'
import styles from './page.module.css'
import ServiceCard from './ServiceCard/ServiceCard'
import Bottom from '../../components/Bottom/Bottom'

const Services = () => {
  return (
    <div className={styles.servicesContainer}>
      <Header
        buttonLeft={true}
        buttonLeftHref={'/'}
        title={'Hair coloring'}
        buttonRight={true}
        isWhite={false}
      />
      <section className={styles.sectionListServices}>
        <GenderSelect />
        <ul className={styles.listServices}>
          <ServiceCard />
          <ServiceCard />
          <ServiceCard />
          <ServiceCard />
          <ServiceCard />
          <ServiceCard />
          <ServiceCard />
        </ul>
      </section>
      <Bottom href="/services" label={'Apply'} />
    </div>
  )
}

export default Services
