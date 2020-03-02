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
      <div class="pipedriveWebForms" className={styles.form} data-pd-webforms="https://pipedrivewebforms.com/form/64fb993cbe5dadded638d587c7e8645b4144829"><script src="https://cdn.pipedriveassets.com/web-form-assets/webforms.min.js"></script></div>
    </div>
  </section>
))
