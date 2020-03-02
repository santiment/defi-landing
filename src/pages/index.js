import React from 'react'
import { injectIntl } from 'gatsby-plugin-intl'
import Layout from '../components/layout'
import SEO from '../components/seo'
import Main from '../components/Main'
import Graphs from '../components/Graphs'
import Discount from '../components/Discount'

const IndexPage = ({ intl }) => (
  <Layout>
    <SEO title='EthCC | Santiment' />
    <Main />
    <Graphs />
    <Discount />
  </Layout>
)

export default injectIntl(IndexPage)
