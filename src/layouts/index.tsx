import * as React from 'react'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

import 'modern-normalize'
import '../styles/normalize'

import Header from '../components/Header'
import LayoutRoot from '../components/LayoutRoot'

interface StaticQueryProps {
  site: {
    siteMetadata: {
      title: string
      description: string
      keywords: string
    }
  }
}

const IndexLayout: React.FC = ({ children }) => (
  <StaticQuery
    query={graphql`
      query IndexLayoutQuery {
        site {
          siteMetadata {
            title
            description
          }
        }
      }
    `}
    render={(data: StaticQueryProps) => (
      <LayoutRoot>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: data.site.siteMetadata.description },
            { name: 'keywords', content: data.site.siteMetadata.keywords },
            { name: 'google-site-verification', content: 'pmMczz3_obWdX30sbLeRjghI-Dvws3yhfm3_codQS_w' }
          ]}
        />
        <Header title={data.site.siteMetadata.title} />
        <div
          style={{
            margin: '0 auto',
            maxWidth: 1000,
            padding: '2rem 1.0875rem 1.45rem 2rem'
          }}
        >
          {children}
        </div>
      </LayoutRoot>
    )}
  />
)

export default IndexLayout
