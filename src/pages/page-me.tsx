import * as React from 'react'
import { graphql } from 'gatsby'
import Container from '@material-ui/core/Container'

const PageMe = ({ data }: any) => {
  return (
    <Container>
      <div style={{ padding: '20px' }} dangerouslySetInnerHTML={{ __html: data.allMarkdownRemark.edges[0].node.html }} />
    </Container>
  )
}

export default PageMe

export const pageMeQuery = graphql`
  query {
    allMarkdownRemark(filter: { frontmatter: { about: { eq: "about" } } }) {
      edges {
        node {
          id
          excerpt(pruneLength: 160)
          html
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
            lang
            category
            tag
          }
        }
      }
    }
  }
`
