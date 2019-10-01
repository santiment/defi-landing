import React from "react"
import { Link } from "gatsby"
import cx from "classnames"
import Icon from "@santiment-network/ui/Icon"
import Panel from "@santiment-network/ui/Panel/Panel"
import Layout from "../../components/layout"
import styles from "./index.module.scss"

export default () => (
  <Layout>
    <Panel className={styles.wrapper}>
      <h2 className={styles.title}>Log in your account with</h2>
      <div className={styles.options}>
        <Link to="/login/email" className={cx(styles.btn, styles.btn_email)}>
          <Icon type="envelope" className={styles.btn__icon} />
          Email
        </Link>
      </div>
    </Panel>
  </Layout>
)
