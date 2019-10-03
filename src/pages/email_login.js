import React from 'react'
import { navigate } from 'gatsby'
import { Mutation } from 'react-apollo'
import { parse } from 'query-string'
import Layout from '../components/layout'
import PageLoader from '../components/Loader/PageLoader'
import { CURRENT_USER_QUERY, VERIFY_EMAIL_MUTATION } from '../gql/user'
import { setCoupon } from '../utils/coupon'
import styles from './email_login.module.scss'

const updateCache = (
  cache,
  {
    data: {
      emailLoginVerify: { user },
    },
  },
) => {
  const currentUser = { ...user }
  setTimeout(() => {
    cache.writeQuery({
      query: CURRENT_USER_QUERY,
      data: { currentUser },
    })
    navigate('/gdpr', { replace: true })
  }, 1000)
}

export default ({ location: { search } }) => (
  <Layout>
    <Mutation mutation={VERIFY_EMAIL_MUTATION} update={updateCache}>
      {(verifyEmail, { called, error, data }) => {
        if (!called) {
          const { coupon, ...variables } = parse(search)
          setCoupon(coupon)
          verifyEmail({ variables })
        }
        if (error) {
          return (
            <div className={styles.wrapper}>
              <h2>Login failed</h2>
              <br />
              <p>
                Maybe you are trying to login with an old email link. Please,
                make sure, that you are using the latest link
              </p>
            </div>
          )
        }

        return (
          <div className={styles.wrapper}>
            <PageLoader text='Verifying' className={styles.loader} />
          </div>
        )
      }}
    </Mutation>
  </Layout>
)
