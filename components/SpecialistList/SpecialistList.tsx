import React from 'react'
import { prisma } from '../data'
import styles from './SpecialistList.module.css'
import SpecialistCard from './SpecialistCard/SpecialistCard'

interface SpecialistListProps {
  data: []
}

const SpecialistList: any = ({ data }: SpecialistListProps) => {
  console.log(data)

  return (
    <ul className={styles.listSpecialists}>
      {data.map(
        (
          specialist: { id: string; name: string; image: string },
          index: number
        ) => (
          <SpecialistCard key={index} name={specialist.name} selected={false} />
        )
      )}
    </ul>
  )
}

export default SpecialistList
