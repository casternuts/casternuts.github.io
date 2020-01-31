import * as React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Helmet from 'react-helmet'
import LayoutMe from '../layouts/Layoutme'
import '../styles/md.css'

const PageMe = ({ data }: any) => {
  const postNode = data.markdownRemark
  return (
    <LayoutMe>
      <div style={{ padding: '20px' }} dangerouslySetInnerHTML={{ __html: postNode.html }} />
    </LayoutMe>
  )
}

export default PageMe
export const pageQuery = graphql`
  query DesignSystem {
    markdownRemark(frontmatter: { about: { eq: "about" } }) {
      id
      html
    }
  }
`
// export const pageMeQuery = graphql`
//   query {
//     allMarkdownRemark(filter: { frontmatter: { about: { eq: "about" } } }) {
//       edges {
//         node {
//           id
//           excerpt(pruneLength: 160)
//           html
//           frontmatter {
//             title
//             date(formatString: "MMMM DD, YYYY")
//             lang
//             category
//             tag
//           }
//         }
//       }
//     }
//   }
// `
