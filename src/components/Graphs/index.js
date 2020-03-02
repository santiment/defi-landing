import React from 'react'
import Title from '../Title/Title'
import Description from '../Description'
import { tr } from '../../utils/translate'
import styles from './index.module.scss'
import first from './maker.png'
import second from './jupit1.png'
import third from './sanbase.png'

const description = {
  product: tr('desc.graphs.product', 'Sangraphs'),
  title: tr('desc.graphs.title', 'DeFi/MakerDAO Project'),
  text:
    'As part of our roadmap, we’re on a mission to create the first decentralized platform for the development - and valuation - of market signals, strategies and custom industry alphas.',
  links: [
    {
      href: 'https://graphs.santiment.net/makerdao',
      children: tr('desc.graphs.link', 'Explore MakerDAO on Sangraphs')
    }
  ]
}

export default () => (
  <section className={styles.wrapper}>
    <Title className={styles.title}>But this was just the first step</Title>
    <div className={styles.content}>
      <p className={styles.text}>
        As part of our roadmap, we’re on a mission to create the{' '}
        <b>
          first decentralized platform for the development - and valuation - of
          market signals,
        </b>{' '}
        strategies and custom industry alphas.
      </p>
      <div>
        <img alt='DAA/Price diff signals' src={first} className={styles.img} />
        <div className={styles.desc}>Our custom Price-Network Activity Divergence Signal</div>
      </div>
    </div>
    <div className={styles.content}>

      <p className={styles.text}>
        Generating new alpha is currently reserved for <b>the select few</b>{' '}
        that have the money and know-how to fund the process
        <br />
        <br />
        We envision a place where anyone can{' '}
        <b>
          cojoin in the creation and backtesting of new market strategies,
        </b>{' '}
        or even claim a stake in their future performance.
      </p>
      <div>
        <img alt='DAA/Price diff signals' src={second} className={styles.img} />
        <div className={styles.desc}>Generating market alpha is centralized and elitist - but it doesn't have to be</div>
      </div>
    </div>
    <div className={styles.content}>
      <p className={styles.text}>
        To make this a reality, we are developing a custom framework that would{' '}
        <b>allow anyone to discover gainful anomalies in market data,</b>{' '}
        backtest new signals and simulate novel trading strategies.
      </p>
      <div>
        <img alt='DAA/Price diff signals' src={third} className={styles.img} />
        <div className={styles.desc}>Bringing anomaly detection and alpha development to the masses</div>
      </div>
    </div>
  </section>
)
