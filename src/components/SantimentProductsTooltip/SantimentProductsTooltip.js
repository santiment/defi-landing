import React, { useState } from 'react'
import cx from 'classnames'
import Tooltip from '@santiment-network/ui/Tooltip'
import Icon from '@santiment-network/ui/Icon'
import sanbaseLogoImg from './../../images/logos/logo-sanbase.svg'
import sheetsLogoImg from './../../images/logos/logo-sheets.svg'
import neuroLogoImg from './../../images/logos/logo-neuro.svg'
import styles from './SantimentProductsTooltip.module.scss'

const PRODUCTS = [
  {
    img: sanbaseLogoImg,
    title: 'Sanbase',
    description: 'header.product.sanbase',
    to: 'https://app.santiment.net',
  },
  {
    img: sheetsLogoImg,
    title: 'Sansheets',
    description: 'header.product.sheets',
    to: 'https://sheets.santiment.net',

  },
  {
    img: neuroLogoImg,
    title: 'SanAPI',
    description: 'header.product.neuro',
    to: 'https://neuro.santiment.net',
  }
]

const ProductItem = ({
                       intl,
                       product: { to, img, title, description },
                       className
                     }) => {
  return (
    <a className={cx(styles.wrapper, className)} href={to}>
      <div className={cx(styles.product, styles.wrapper__product)}>
        {img && <img className={styles.product__img} src={img} alt={title} />}
        <div className={styles.product__info}>
          <div className={styles.product__title}>{title}</div>
          <div className={styles.product__description}>{intl.formatMessage({ id: description })}</div>
            <MakeLink
              className={cx(styles.wrapper__link)}
              to={to}
              as={'div'}
              title={'Go to ' + title}
            />
        </div>
      </div>
    </a>
  )
}


const MakeLink = ({ to, title, className, as: El = 'a' }) => (
  <El href={to} className={cx(styles.link, className)}>
    {title} <Icon className={styles.linkArrow} type='pointer-right' />
  </El>
)

const OpenTrigger = () => <Icon type='arrow-down' className={styles.arrowIcon} />
const CloseTrigger = () => <Icon type='arrow-up' className={styles.arrowIcon}/>

const SantimentProductsTooltip = ({ className, intl, children }) => {
  const [isOpen, setOpen] = useState(false)

  return (
    <Tooltip
      passOpenStateAs='isActive'
      closeTimeout={150}
      position='bottom'
      align='start'
      offsetY={7}
      className={styles.tooltip}
      trigger={
        <div className={cx(className, styles.trigger, isOpen && styles.trigger__opened)}>
          {children}
          <div className={cx(styles.arrow, isOpen && styles.opened)}>
            {isOpen ? <CloseTrigger /> : <OpenTrigger />}
          </div>
        </div>
      }
      onOpen={() => {
        setOpen(true)
      }}
      onClose={() => {
        setOpen(false)
      }}
    >
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.title}>{intl.formatMessage({ id: 'header.products' })}</div>
          <MakeLink to='https://santiment.net' title={intl.formatMessage({ id: 'header.santiment.goto' })}/>
        </div>
        <div className={styles.products}>
          {PRODUCTS.map((item, index) => (
            <ProductItem key={index} product={item} intl={intl} />
          ))}
        </div>
      </div>
    </Tooltip>
  )
}

export default SantimentProductsTooltip
