import React from 'react'
import { injectIntl, Link } from 'gatsby-plugin-intl'
import Icon from '@santiment-network/ui/Icon'
import Button from '@santiment-network/ui/Button'
import Layout from '../components/layout'
import SEO from '../components/seo'
import Main from '../components/Main'
import Pricing from '../components/Pricing'
import WhySantiment from '../components/WhySantiment/WhySantiment'
import Advantages from '../components/Advantages/Advantages'
import UseCases from '../components/UseCases/UseCases'
import FAQ from '../components/FAQ'
import Testimonials from '../components/Testimonials/Testimonials'
import ReadyToStart from '../components/ReadyToStart/ReadyToStart'
import styles from './index.module.scss'

const code = `#keyword[import] san

daa #keyword[=] san.get(
\t"daily_active_addresses/santiment",
\t#keyword[from_date=]"2018-06-01",
\t#keyword[to_date=]"2018-06-05",
\t#keyword[interval=]"1d"
)

prices #keyword[=] san.get(
\t"prices/santiment",
\t#keyword[from_date=]"2018-06-01",
\t#keyword[to_date=]"2018-06-05",
\t#keyword[interval=]"1d"
)`

const lines = code.split(`\n`).map((line, i) => {
  const formatted = line
    .replace(/#keyword\[(.*)\]/g, '<span class="code__keyword">$1</span>')
    .replace(/\t/g, '<span class="code__tab"></span>')

  return `<span class="code__number">${i + 1}</span>${formatted}`
})

function onGetAccessClick() {
  window.gtag('event', 'login_action_call', {
    location: 'Main section',
    text: 'Get access',
  })
}

function onDocumentationClick() {
  window.gtag('event', 'documentation_clicked')
}

const IndexPage = ({ intl }) => (
  <Layout>
    <SEO title="Santiment's Neuro - Crypto’s Most Comprehensive API" />
    <Main />
    <section className={styles.wrapper}>
      <div>
        <h1 className={styles.title}>
          {intl.formatMessage({ id: 'main.comprehensive' })}
          <br />
          <span className={styles.title__mark}>
            {intl.formatMessage({ id: 'main.crypto_api' })}
          </span>
        </h1>
        <h2 className={styles.desc}>
          {intl.formatMessage({ id: 'main.description' })}
        </h2>
        <Button
          as={Link}
          to='/account'
          className={styles.access}
          variant='fill'
          accent='blue'
          onClick={onGetAccessClick}
        >
          {intl.formatMessage({ id: 'main.get_access' })}
        </Button>
        <a
          href='https://help.santiment.net/metrics-explained#api'
          className={styles.doc}
          target='_blank'
          rel='noopener noreferrer'
          onClick={onDocumentationClick}
        >
          {intl.formatMessage({ id: 'main.documentation' })}
          <Icon type='arrow-right' className={styles.doc__icon} />
        </a>
      </div>

      <div className={styles.code}>
        <div className={styles.code__header}>
          <div className={styles.code__btn} />
          <div className={styles.code__btn} />
          <div className={styles.code__btn} />
        </div>
        <ol className={styles.source}>
          {lines.map((line, i) => (
            <li
              className={styles.source__line}
              key={i}
              dangerouslySetInnerHTML={{ __html: line }}
            />
          ))}
        </ol>
        <div className={styles.gathered}>
          <h3 className={styles.gathered__percent}>78.6 %</h3>
          <h4 className={styles.gathered__label}>
            {intl.formatMessage({ id: 'main.data' })}
          </h4>
        </div>
      </div>
    </section>
    <WhySantiment />
    <Advantages />
    <UseCases />
    <Pricing />
    <Testimonials />
    <FAQ />
    <ReadyToStart />
  </Layout>
)

export default injectIntl(IndexPage)
