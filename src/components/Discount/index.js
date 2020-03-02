import React from 'react'
import { injectIntl } from 'gatsby-plugin-intl'
import Title from '../Title/Title'
import styles from './index.module.scss'

export default injectIntl(({ intl }) => (
  <section className={styles.wrapper}>
    <div className={styles.container}>
      <Title small>Does that make your ears perk up? Then welcome aboard!</Title>
      <h4 className={styles.subtitle}>
        We are currently accepting new contributors and collaborators to join
        the development process.
        If you’d like to help us build the first
        decentralized platform for crypto market intelligence, sign up below to
        learn more.
      </h4>
    </div>
  </section>
))
