'use client'

import GenderSelect from './GenderSelect/GenderSelect'
import Header from '../../components/Header/Header'
import styles from './page.module.css'
import ServiceCard from './ServiceCard/ServiceCard'
import Bottom from '../../components/Bottom/Bottom'
import { GetServices } from './hooks'
import { useState } from 'react'

interface service {
  id: string
  name: string
  price: number
  duration: string
  gender: number
}

const Services = () => {
  const { data, isLoading } = GetServices()
  const [genderValue, setGenderValue] = useState<any>(0)
  const [selectService, setSelectService] = useState('')
  const services = data?.data.services

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
        <GenderSelect
          genderValue={genderValue}
          setGenderValue={setGenderValue}
        />
        {services && (
          <ul className={styles.listServices}>
            {services.map((service: service) => (
              <ServiceCard
                key={service.id}
                data={service}
                genderValue={genderValue}
                action={() => setSelectService(service.id)}
                selected={selectService === service.id}
              />
            ))}
          </ul>
        )}
      </section>
      <Bottom
        href={services ? `/reservation?id=${selectService}` : ''}
        label={'Apply'}
        disable={selectService === ''}
      />
    </div>
  )
}

export default Services
