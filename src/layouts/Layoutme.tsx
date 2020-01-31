import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import '../styles/prism-theme.scss'
import '../styles/base.scss'

const Layout = ({ children }) => (
  <div>
    <Helmet
      title={'Casternuts Info'}
      meta={[
        { name: 'description', content: '캐스터넛트 경력 사항 입니다.' },
        { name: 'keywords', content: '캐스터넛트 개발자, 캐스터,캐스터넛트,프론트앤드,백앤드' },
        { name: 'google-site-verification', content: 'pmMczz3_obWdX30sbLeRjghI-Dvws3yhfm3_codQS_w' }
      ]}
    />

    <div
      style={{
        margin: '0 auto',
        maxWidth: 1000,
        padding: '2rem 1.0875rem 1.45rem 2rem'
      }}
    >
      {children}
    </div>
  </div>
)

Layout.propTypes = {
  children: PropTypes.any
}

export default Layout
