import React from 'react'
import { injectIntl, Link } from 'gatsby-plugin-intl'
import { tr } from '../../utils/translate'
import styles from './Header.module.scss'
import AccountBtn from '../AccountBtn/AccountBtn'
import SantimentProductsTooltip from '../SantimentProductsTooltip/SantimentProductsTooltip'
import santimentSvg from '../../images/santiment.svg'
import logo from './EthCC_Logo.svg'

const Header = ({ isAccountPage, intl }) => {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <div className={styles.left}>
          <Link className={styles.logo} to='/'>
            <img alt='Santiment' src={santimentSvg} />
          </Link>
          <img src={logo} alt='EthCC' />
        </div>
        <div className={styles.right}>
          <div className={styles.link}>
          <SantimentProductsTooltip intl={intl}>
            <div>Products</div>
          </SantimentProductsTooltip>
          </div>
          <a className={styles.link} href='mailto:support@santiment.net'>
            {tr('header.support')}
          </a>
          <AccountBtn isAccountPage={isAccountPage} />
        </div>
      </nav>
    </header>
  )
}
export default injectIntl(Header)
