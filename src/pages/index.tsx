import * as React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Page from '../components/Page'
// import Container from '../components/Container'
import MainLayout from '../layouts/mainLayout'
import { graphql, useStaticQuery } from 'gatsby'
import Container from '@material-ui/core/Container'

import PostList from '../components/PostList'

const mainIndexQuery = graphql`
  query mainIndexQuery {
    allMarkdownRemark(filter: { frontmatter: { about: { nin: "about" } } }) {
      edges {
        node {
          excerpt(truncate: true, pruneLength: 200)
          frontmatter {
            title
            path
            date(locale: "")
            tag
            category
          }
          id
        }
      }
      totalCount
      pageInfo {
        itemCount
        pageCount
        hasPreviousPage
        hasNextPage
        currentPage
      }
    }
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`

const IndexPage: React.FC = () => {
  const data = useStaticQuery(mainIndexQuery)

  return (
    <MainLayout>
      <Page>
        <Container>
          <div>
            <h2>게시글 목록</h2>
          </div>
          <ul style={{ paddingLeft: '5px' }}>
            {data.allMarkdownRemark.edges.map(({ node }: any) => (
              <PostList key={node.id} data={node}></PostList>
        
            ))}
          </ul>
        </Container>
      </Page>
    </MainLayout>
  )
}

export default IndexPage
