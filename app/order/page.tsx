'use client'

import { signIn, signOut, useSession } from 'next-auth/react'
import React from 'react'
import Bottom from '../../components/Bottom/Bottom'
import { prisma } from '../../components/data'
import Header from '../../components/Header/Header'
import styles from './page.module.css'

const Order = () => {
  const { data: session } = useSession()
  const user = session?.user

  return (
    <div className={styles.orderContainer}>
      <Header
        buttonLeft={true}
        buttonLeftHref={'/reservation'}
        title={session ? user?.name! : 'Order'}
        buttonRight={true}
        isWhite={false}
      />
      <section className={styles.orderSection}>
        {session ? <OrderContent /> : <LoginContent />}
      </section>
      {session && <Bottom href="/reservation" label={'Réserver'} />}
    </div>
  )
}

export default Order

const OrderContent = () => {
  const orderData = JSON.parse(localStorage.getItem('test'))
  console.log(orderData)

  return (
    <div className={styles.orderContentContainer}>
      <h4 className={styles.sectionTitle}>Reservation</h4>
      <p>{orderData.specialistId}</p>
      <p>{orderData.status}</p>
      <button
        onClick={() => signOut()}
        type="button"
        className={styles.signInButton}
      >
        Se déconnecter
      </button>
    </div>
  )
}
const LoginContent = () => {
  return (
    <div className={styles.loginContentContainer}>
      <h4 className={styles.sectionTitle}>
        Pour reserver vous devez vous connecter
      </h4>
      <button
        onClick={() => signIn()}
        type="button"
        className={styles.signInButton}
      >
        Se connecter
      </button>
    </div>
  )
}
