import React from 'react'
import { Mutation } from 'react-apollo'
import Button from '@santiment-network/ui/Button'
import Input from '@santiment-network/ui/Input'
import { injectIntl } from 'gatsby-plugin-intl'
import Tooltip from './Tooltip'
import { EMAIL_LOGIN_MUTATION } from '../../gql/user'
import { NotificationsContext } from '../Notifications/Notifications'
import { focusEmailEvent, submitEmailEvent } from '../Discount/index'
import { tr, trStr } from '../../utils/translate'
import styles from './index.module.scss'

const maker = {
  title: 'Maker(MKR)',
  date: 'Jul 18, 2019',
  classes: { wrapper: styles.maker, title: styles.maker__title },
  values: [
    { value: '$473.44', label: 'Price' },
    { value: '$6,811,431,345.00', label: 'Volume' },
    { value: '96.00', label: 'Network Growth' },
  ],
}

const eth = {
  title: 'Ethereum',
  date: 'Jul 21, 2019',
  classes: { wrapper: styles.eth, title: styles.eth__title },
  values: [
    { value: '$473.44', label: 'Price' },
    { value: '$6,811,431,345.00', label: 'Volume' },
    { value: '2nd', label: 'Trending position' },
  ],
}

export default injectIntl(({ intl }) => (
  <section className={styles.wrapper}>
    <div className={styles.top}>
      <Tooltip {...maker} />
      <Tooltip {...eth} />
      <h1 className={styles.title}>Help us decentralize crypto market intelligence
</h1>
      <h3 className={styles.subtitle}>Join our mission</h3>

                <Button
                  className={styles.btn}
                  variant='fill'
                  accent='positive'
                  as='a'
                  href='#contact'
                >
                  Get started
                </Button>
    </div>
    <div className={styles.bottom}>
      <div id='products' className={styles.infos}>
        <div className={styles.info}>
          <div className={styles.info__text}>At Santiment, we have created an <b>all-in-one platform</b> for analyzing - and reacting - to the behavior of major crypto stakeholders, including whales, miners, the crypto community and more.</div>
        </div>
        <div className={styles.info}>
          <div className={styles.info__text}>
            Using a combination of <b>on-chain, social media and development activity</b> data for 900+ cryptocurrencies, we’ve discovered new ways to add context to market moves, and created dozens of custom indicators, signals and strategies for the crypto industry.
          </div>
        </div>
      </div>
    </div>
  </section>
))
